from flask import Flask, request, render_template, redirect, url_for, session
from utils.validations import validate_login_user, validate_register_user, validate_confession
from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)


app.secret_key = "s3cr3t_k3y"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

# --- Auth Routes ---
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

        return render_template("auth/login.html")
    
    elif request.method == "GET":
        if session.get("user", None):
            return redirect(url_for("index"))
        else:
            return render_template("auth/login.html")

@app.route("/logout", methods=["GET"])
def logout():
    session.pop("user", None)
    return redirect(url_for("login"))



# --- Routes ---
@app.route("/", methods=["GET"])
def index():
    user = session.get("user", None)
    if not user:
        return redirect(url_for("login"))
    
    # get last confessions 
    data = []
    for conf in db.get_confessions(page_size=3):
        _, conf_text, conf_img, user_id = conf
        _, username, _, _ = db.get_user_by_id(user_id)
        
        ### CHECKPOINT 

        img_filename = f"uploads/{conf_img}"
        data.append({
            "author": username,
            "content": conf_text,
            "path_image": url_for('static', filename=img_filename)
        })
    
    return render_template("confessions/confessions.html", data=data)

@app.route("/post-conf", methods=["POST"])
def post_conf():
    username = session.get("user", None)
    if username is None:
        return redirect(url_for("login"))

    conf_text = request.form.get("conf-text")
    conf_img = request.files.get("conf-img")

    if validate_confession(conf_text, conf_img):
        # 1. generate random name for img
        _filename = hashlib.sha256(
            secure_filename(conf_img.filename) # nombre del archivo
            .encode("utf-8") # encodear a bytes
            ).hexdigest()
        _extension = filetype.guess(conf_img).extension
        img_filename = f"{_filename}.{_extension}"

        # 2. save img as a file
        conf_img.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))

        # 3. save confession in db
        user_id, _, _, _ = db.get_user_by_username(username)
        db.create_confession(conf_text, img_filename, user_id)

    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True)
