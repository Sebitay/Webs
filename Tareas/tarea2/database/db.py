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

# obtener los datos de la base de datos
def getRegiones():
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("SELECT nombre FROM region;")
  regiones = cursor.fetchall()
  return regiones

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

def getArtesanias():
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("SELECT nombre FROM tipo_artesania;")
  artesanias = cursor.fetchall()
  return artesanias

def getTipos(id):
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("""
                 SELECT T.nombre 
                 FROM tipo_artesania T, artesano_tipo AT
                 WHERE AT.artesano_id = %s
                 AND AT.tipo_artesania_id = T.id;
                 """, (id))
  tipos = cursor.fetchall()
  id = []
  for i in tipos:
      id.append(i[0])
  return id
   
def getArtesanos(i,n):
  conn = getConn()
  cursor = conn.cursor()
  cursor.execute("""
                 SELECT A.id, A.comuna_id, A.descripcion_artesania, A.nombre, A.email, A.celular, B.nombre, C.nombre
                 FROM artesano A, comuna B, region C 
                 WHERE A.comuna_id = B.id
                 AND B.region_id = C.id
                 ORDER BY id DESC LIMIT %s OFFSET %s;
                 """,(n,(i-1)*n))
  artesanos = cursor.fetchall()
  return artesanos

def getArtesano(id):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                    SELECT A.id, A.comuna_id, A.descripcion_artesania, A.nombre, A.email, A.celular, B.nombre, C.nombre
                    FROM artesano A, comuna B, region C 
                    WHERE A.comuna_id = B.id
                    AND B.region_id = C.id
                    AND A.id = %s;
                    """,(id))
    artesano = cursor.fetchone()
    return artesano
   

def getFotos(id):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                 SELECT nombre_archivo, ruta_archivo
                 FROM foto
                 WHERE artesano_id = %s;
                 """,(id))
    fotos = cursor.fetchall()
    ret = []
    for foto in fotos:
        ret.append("up/"+foto[0])
    return ret

def count():
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""SELECT count(*) 
                   FROM artesano;
                   """)
    count = cursor.fetchone()
    return count[0]

def idArtesano():
    return count()+1

def idRegion(region):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                  SELECT id
                  FROM region
                  WHERE nombre = %s;
                  """, (region))
    id = cursor.fetchone()
    return id[0]

def idComuna(comuna, regionId):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                  SELECT id
                  FROM comuna
                  WHERE nombre = %s
                  AND region_id = %s;
                  """, (comuna,regionId))
    id = cursor.fetchone()
    return id[0]

def idTipo(tipo):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                  SELECT id
                  FROM tipo_artesania
                  WHERE nombre = %s;
                  """, (tipo))
    id = cursor.fetchone()
    return id[0]

# validar datos
def validarArtesano(region, comuna, descripcion, nombre, email, fono, artesanias):
  validate = True
  valid = False
  text = ''

  for reg in getRegiones():
      
      if reg[0]== region:
          valid |= True
          break
  validate &= valid

  if not valid:
     text += 'Region no existe\n'

  valid = False
  for com in getComunas(region):
      if com[0]== comuna:
          valid = True
          break
  
  if not valid:
      text += 'Comuna no pertenece a la region seleccionada\n'
  validate &= valid

  regex = re.compile(r"[\w\.\,\:]*")
  valid = (len(descripcion) <= 300 and bool(re.match(regex, descripcion)))

  if not valid:
      text += 'Descripcion no valida\n'
  validate &= valid

  regex = re.compile(r"[\w]*")
  valid = (len(nombre) >= 3 and len(nombre) <= 80 and bool(re.match(regex, nombre)))
  
  if not valid:
      text += 'Nombre no valido\n'
  validate &= valid

  regex = re.compile(r"^[\w\.]+@([\w]+\.)+[\w]+")
  valid = (len(email) <= 80 and bool(re.match(regex, email)))

  if not valid:
      text += 'Email no valido\n'
  validate &= valid

  regex = re.compile(r"^[0-9]{8}$")
  regex2 = re.compile(r"^\+56[0-9]{9}$")
  valid = (bool(re.match(regex, fono)) or bool(re.match(regex2, fono) or fono == ''))

  if not valid:
      text += 'Telefono no valido\n'
  validate &= valid

  i = 0
  for artesania in artesanias:
    valid = False
    for art in getArtesanias():
      if art[0] == artesania.lower():
        valid = True
        i+=1
        break

    if not valid:
      text += ('Artesania %s no valida\n', artesania)
    validate &= valid

  valid = (i>0 and i<=3)

  if not valid:
      text += 'Cantidad de artesanias no valida\n'
  validate &= valid

  return validate, text

# insertar datos en la base de datos
def insertTipo(id, artesanias):
    conn = getConn()
    cursor = conn.cursor()
    for artesania in artesanias:
        artesania = artesania.lower()
        cursor.execute("""
                      INSERT INTO artesano_tipo (artesano_id, tipo_artesania_id)
                      VALUES (%s, %s);
                      """,(id, idTipo(artesania)))
    conn.commit()
    return

def insertFoto(nombre,ruta):
    id = count()
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                    INSERT INTO foto (ruta_archivo, nombre_archivo, artesano_id)
                    VALUES (%s, %s,%s);
                    """,(ruta, nombre , id))
    conn.commit()
    return

def insertArtesano(region, comuna,  descripcion, nombre, email, fono, artesanias):
    id = idArtesano()
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute("""
                  INSERT INTO artesano (id ,comuna_id, descripcion_artesania, nombre, email, celular)
                  VALUES (%s, %s, %s, %s, %s, %s);
                  """, (id, idComuna(comuna,idRegion(region)), descripcion, nombre, email, fono))
    conn.commit()
    insertTipo(id,artesanias)
    return

def validarFoto(img):
    print(img)
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    # check if a file was submitted
    if img is None:
        return False, 'No se ha subido ninguna imagen\n'

    # check if the browser submitted an empty file
    if img.filename == "":
        return False, 'No se ha subido ninguna imagen\n'
    
    # check file extension
    ftype_guess = filetype.guess(img)
    if ftype_guess.extension not in ALLOWED_EXTENSIONS:
        return False, 'Extension no valida\n'
    # check mimetype
    if ftype_guess.mime not in ALLOWED_MIMETYPES:
        return False, 'Mimetype no valido\n'
    return True, ''