from flask import Flask, request, render_template, redirect, url_for, session
from utils.validations import validate_login_user, validate_register_user, validate_confession, validate_conf_img
from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import uuid

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)
app.secret_key = "secret_key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

# --- Auth routes ---

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("contrasenna")
        email = request.form.get("email")
        error = ""
        if validate_register_user(username, password, email):
            # try to register user
            status, msg = db.register_user(username, password, email)
            if status:
                # set user field in session
                session["user"] = username
                return redirect(url_for("index"))
            error += msg
        else:
            error += "Uno de los campos no es valido."

        return render_template("auth/register.html", error=error)
    
    elif request.method == "GET":
        if session.get("user", None):
            return redirect(url_for("index"))
        else:
            return render_template("auth/register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("contrasenna")
        error = ""
        if validate_login_user(username, password):
            # try to login
            status, msg = db.login_user(username, password)
            if status:
                # set user field in session
                session["user"] = username
                return redirect(url_for("index"))
            error += msg
        else:
            error += "Uno de los campos no es valido."

        return render_template("auth/login.html", error=error)
    
    elif request.method == "GET":
        if session.get("user", None):
            return redirect(url_for("index"))
        else:
            return render_template("auth/login.html")


@app.route("/logout", methods=["GET"])
def logout():
    session.pop("user", None)
    return redirect(url_for("login"))


# --- User routes ---

@app.route("/profile", methods=["GET"])
def profile():
    user = session.get("user", None)
    if not user:
        return redirect(url_for("login"))
    
    _, username, email, _, _user_img = db.get_user_by_username(user)
    if _user_img: # no es None
        profile_picture = url_for('static', filename=f"uploads/{_user_img}")
    else:
        profile_picture = url_for('static', filename="svg/anonymous.svg")
    
    return render_template("confesions/profile.html", username=username, email=email, profile_picture=profile_picture)

@app.route("/profile/edit", methods=["POST"])
def edit_img():
    user = session.get("user", None)
    if not user:
        return redirect(url_for("login"))
    
    new_img = request.files.get("profile-img")


    if validate_conf_img(new_img):
        _filename_hash = hashlib.sha256(
            secure_filename(new_img.filename).encode("utf-8")
            ).hexdigest()
        

        _extension = filetype.guess(new_img).extension

        img_filename = f"{_filename_hash}_{str(uuid.uuid4())}.{_extension}" 

        # remove from file system the previous image
        old_img = db.get_profile_picture(user)[0]
        if old_img:
            os.remove(os.path.join(app.config["UPLOAD_FOLDER"], old_img))

        # save new image and update user profile picture in db
        new_img.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))
        db.change_profile_picture(user, img_filename)

    return redirect(url_for('profile'))

# --- Confession routes ---

@app.route("/", methods=["GET"])
def index():
    user = session.get("user", None)
    if not user:
        return redirect(url_for("login"))
    
    # --- get user profile picture for the nav bar ---
    
    user_profile_picture = db.get_profile_picture(user)[0]
    if user_profile_picture:
        profile_picture = url_for('static', filename=f"uploads/{user_profile_picture}")
    else:
        profile_picture = url_for('static', filename="svg/anonymous.svg")
    
    # get last confessions
    PAGE_SIZE = 3
    data = []
    for conf in db.get_confessions(page_size=PAGE_SIZE):
        _, conf_title, conf_text, conf_img, user_id = conf
        _, username, _, _, _user_img = db.get_user_by_id(user_id)

        conf_author_img = f"uploads/{_user_img}" if _user_img else "svg/anonymous.svg"
        conf_img = f"uploads/{conf_img}" if conf_img else "svg/anonymous.svg"

        data.append({
            "author": username,
            "author_img": url_for('static', filename=conf_author_img),
            "title": conf_title,
            "content": conf_text,
            "path_image": url_for('static', filename=conf_img)
        })
    
    return render_template("confesions/confesiones.html", data=data, profile_picture=profile_picture)


@app.route("/post-conf", methods=["POST"])
def post_conf():
    username = session.get("user", None)
    if username is None:
        return redirect(url_for("login"))

    conf_title = request.form.get("conf-title")
    conf_text = request.form.get("conf-text")
    conf_img = request.files.get("conf-img")

    if validate_confession(conf_text, conf_img):
        # 1. generate random name for img
        _filename = hashlib.sha256(
            secure_filename(conf_img.filename).encode("utf-8")
            ).hexdigest()
        _extension = filetype.guess(conf_img).extension
        img_filename = f"{_filename}_{str(uuid.uuid4())}.{_extension}"

        # 2. save img as a file
        conf_img.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))

        # 3. save confession in db
        user_id, _, _, _, _ = db.get_user_by_username(username)
        db.create_confession(conf_title, conf_text, img_filename, user_id)

    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
