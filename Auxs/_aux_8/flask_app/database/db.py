import pymysql
import json

DB_NAME = "confessions_db"
DB_USERNAME = "dbadmin"
DB_PASSWORD = "dbadmin"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('database/querys.json', 'r') as querys:
	QUERY_DICT = json.load(querys)

# -- conn ---

def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset=DB_CHARSET
	)
	return conn

# -- querys --

def get_user_by_id(id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_user_by_id"], (id,))
	user = cursor.fetchone()
	return user

def get_user_by_email(email):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_user_by_email"], (email,))
	user = cursor.fetchone()
	return user

def get_user_by_username(username):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_user_by_username"], (username,))
	user = cursor.fetchone()
	return user

def create_user(username, password, email):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["create_user"], (username, password, email))
	conn.commit()

def get_confessions(page_size=None):
	conn = get_conn()
	cursor = conn.cursor()
	if page_size:
		cursor.execute(QUERY_DICT["get_page_confessions"], (page_size,))
	else:
		cursor.execute(QUERY_DICT["get_all_confessions"], ())
	confessions = cursor.fetchall()
	return confessions

def create_confession(conf_title, conf_text, conf_img, user_id, conf_timestamp):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["create_confession"], (conf_title, conf_text, conf_img, user_id, conf_timestamp))
	conn.commit()

def change_profile_picture(username, new_img):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["change_user_image"], (new_img, username))
	conn.commit()

def get_profile_picture(username):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_user_image"], (username,))
	user_img = cursor.fetchone()
	return user_img

def get_likes():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_all_likes"])
	likes = cursor.fetchall()
	likes = {x: y for x,y in likes}
	return likes

def like_conf(user_id, conf_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["create_like"], (user_id, conf_id))
	conn.commit()
	

# -- db-related functions --

def register_user(username, password, email):
	# 1. check the email is not in use
	_email_user = get_user_by_email(email)
	if _email_user is not None:
		return False, "El correo ya esta en uso."
	# 2. check the username is not in use
	_username_user = get_user_by_username(username)
	if _username_user is not None:
		return False, "El nombre de usuario esta en uso."
	# 3. create user
	create_user(username, password, email)
	return True, None

def login_user(username, password):
	a_user = get_user_by_username(username)
	if a_user is None or a_user[3] != password:
		return False, "Usuario o contraseña incorrectos."
	return True, None

