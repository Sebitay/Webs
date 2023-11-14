from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import uuid
import pymysql
import re

# conectarse a la base de datos
def getConn():
  conn = pymysql.connect(
    db='Tarea2',
    user='cc5002',
    passwd='programacionweb',
    host='localhost',
    port=3306,
    charset='utf8'
  )
  return conn

#Obtener los datos de la base de datos
def getDeportes():
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("SELECT nombre FROM deporte;")
  deportesRaw = cursor.fetchall()
  deportes = []
  for item in deportesRaw:
    deportes.append(item[0])
  return deportes

print(getDeportes())