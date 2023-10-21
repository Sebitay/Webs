import pymysql


def getConnection():
  conn = pymysql.connect(
    db='confessions_db',
    user='dbadmin',
    passwd='dbadmin',
    host='localhost',
    charset='utf8'
  )
  return conn


def get_usuario(conn, username):
  sql = "SELECT id, username, password, email FROM usuarios WHERE username=%s"
  cursor = conn.cursor()
  cursor.execute(sql, (username,))
  conn.commit()
  usuario = cursor.fetchone()
  return usuario
