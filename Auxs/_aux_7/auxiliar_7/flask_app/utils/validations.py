import re
import filetype

def validate_username(value):
    return value and len(value) > 4


def validate_password(value):
    malas = ["1234", "admin1", "odio a mis Aux >:(2"]
    return bool(re.search(r"\d", value)) and not value in malas


def validate_email(value):
    return "@" in value


def validate_login_user(username, password):
    return validate_username(username) and validate_password(password)


def validate_register_user(username, password, email):
    return validate_username(username) and validate_password(password) and validate_email(email)


def validate_conf_text(conf_text):
    return True


def validate_conf_img(conf_img):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    # check if a file was submitted
    if conf_img is None:
        return False

    # check if the browser submitted an empty file
    if conf_img.filename == "":
        return False
    
    # check file extension
    ftype_guess = filetype.guess(conf_img)
    if ftype_guess.extension not in ALLOWED_EXTENSIONS:
        return False
    # check mimetype
    if ftype_guess.mime not in ALLOWED_MIMETYPES:
        return False
    return True


def validate_confession(conf_text, conf_img):
    return validate_conf_text(conf_text) and validate_conf_img(conf_img)
