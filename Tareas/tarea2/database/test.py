import pymysql
import os

def getConn():
  conn = pymysql.connect(
    db='Tarea2',
    user='admin',
    passwd='admin',
    host='localhost',
    port=3306,
    charset='utf8'
  )
  return conn

def getComunas(region):
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("""
                 SELECT C.nombre 
                 FROM comuna C,region R 
                 WHERE R.id = C.region_id
                 AND R.nombre = %s;
                 """, (region))
  comunas = cursor.fetchall()
  return comunas

def getRegiones():
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("SELECT nombre FROM region;")
  regiones = cursor.fetchall()
  return regiones

def getArtesanos(i):
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("""
                 SELECT id, comuna_id, descripcion_artesania, nombre, email, celular 
                 FROM artesano 
                 ORDER BY id DESC LIMIT %s, %s;
                 """,((i-1)*5,(i)*5))
  artesanos = cursor.fetchall()
  return artesanos

def getArtesanos(i):
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("""
                 SELECT A.id, A.comuna_id, A.descripcion_artesania, A.nombre, A.email, A.celular, B.nombre, C.nombre
                 FROM artesano A, comuna B, region C 
                 WHERE A.comuna_id = B.id
                 AND B.region_id = C.id
                 ORDER BY id DESC LIMIT %s, %s;
                 """,((i-1)*5,(i)*5))
  artesanos = cursor.fetchall()
  return artesanos


def getFotos(id):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                 SELECT nombre_archivo, ruta_archivo
                 FROM foto
                 WHERE artesano_id = %s;
                 """,(id))
    fotos = cursor.fetchall()
    ret = {}
    ret[id] = []
    for foto in fotos:
        ret[id].append(os.path.join(foto[1],foto[0]))
    return ret

print(getFotos(12))

