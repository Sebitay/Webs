import re

def validate_username(value):
  return value and len(value) > 4

def validate_password(value):
  malas = ["1234", "admin1", "odio a mis Aux >:(2"]
  return bool(re.search(r"\d", value)) and not value in malas

def validate_email(value):
  return "@" in value

def validate_user(username, password):
  return validate_username(username) and validate_password(password)

def register_user(username, password, email):
  return validate_username(username) and validate_password(password) and validate_email(email)
