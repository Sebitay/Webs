from flask import Flask, request, render_template, redirect, url_for
from utils.validations import validate_user, register_user

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("confessions/home.html")


@app.route("/register", methods=("GET", "POST"))
def register():
    error = None
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["contrasenna"]
        email = request.form["email"]

        if register_user(username, password, email):
            return redirect(url_for("index"))
        else:
            error = "Usuario o contraseña incorrecta"

    return render_template("auth/register.html", error=error)


@app.route("/login", methods=("GET", "POST"))
def login():
    error = None
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["contrasenna"]

        if validate_user(username, password):
            return redirect(url_for("index"))
        else:
            error = "Usuario o contraseña incorrecta"

    return render_template("auth/login.html", error=error)


if __name__ == "__main__":
    app.run(debug=True)
