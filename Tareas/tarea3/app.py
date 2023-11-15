from flask import Flask, request, render_template, redirect, url_for
from werkzeug.utils import secure_filename
from database import db
import filetype
import hashlib
import uuid
import os

UPLOAD_FOLDER = '/static/up'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agregar_hincha/<text>', methods=['GET', 'POST'])
def agregar_hincha(text):
    if request.method == 'POST':
        region = request.form.get('regiones')
        comuna = request.form.get('comunas')
        deportes = request.form.getlist('checkbox')
        transporte = request.form.get('transporte')
        nombre = request.form.get('nombre')
        email = request.form.get('email')
        fono = request.form.get('fono')
        comentario = request.form.get('comentario')
        valid = db.validarHincha(region, comuna, deportes, transporte, nombre, email, fono, comentario)
        if not valid[0]:
            return redirect(url_for('agregar_hincha', text = valid[1]))
        if comentario == '':
            comentario = 'N/A'
        if fono == '':
            fono = 'N/A'
        db.insertHincha(region, comuna, deportes, transporte, nombre, email, fono, comentario)
        return redirect(url_for('index'))
    elif request.method == 'GET':
        print('get')
        if text == 'None':
            return render_template('hincha/agregar-hincha.html')
        else:
            return render_template('hincha/agregar-hincha.html', text = text)

@app.route('/agregar_artesano/<text>', methods=['GET', 'POST'])
def agregar_artesano(text):
    if request.method == 'POST':
        validate = True
        region = request.form.get('regiones')
        comuna = request.form.get('comunas')
        artesanias = request.form.getlist('checkbox')
        fotos = request.files.getlist('fotos')
        descripcion = request.form.get('descripcion')
        nombre = request.form.get('nombre')
        email = request.form.get('email')
        fono = request.form.get('fono')
        valid = db.validarArtesano(region, comuna, descripcion, nombre, email, fono, artesanias)
        validate &= valid[0]
        texto = ''
        if not valid[0]:
            texto = valid[1]
        for foto in fotos:
            if foto.filename == '':
                continue
            valid = db.validarFoto(foto)
            validate &= valid[0]
            if not valid[0]:
                texto += 'fotos: '+ valid[1] 
        if not validate:
            return redirect(url_for('agregar_artesano', text = texto))
        

        db.insertArtesano(region, comuna, descripcion, nombre, email, fono, artesanias)
        for foto in fotos:
                if foto.filename == '':
                    continue
                currPath = os.path.dirname(os.path.abspath(__file__)) + app.config['UPLOAD_FOLDER']
                _filename_hash = hashlib.sha256(
                secure_filename(foto.filename).encode("utf-8")
                ).hexdigest()
                _extension = filetype.guess(foto).extension
                filename = f"{_filename_hash}_{str(uuid.uuid4())}.{_extension}" 

                foto.save(os.path.join(currPath, filename))
                db.insertFoto(filename, currPath)

        return redirect(url_for('index'))
    elif request.method == 'GET':
        if text == 'None':
            return render_template('artesano/agregar-artesano.html')
        else:
            return render_template('artesano/agregar-artesano.html', text = text)
        
@app.route('/ver_hinchas/<i>', methods=['GET', 'POST'])
def ver_hinchas(i):
    if request.method == 'GET':
        total = db.countHincha()
        hinchas = db.getHinchas(int(i),5)
        deportes = {}
        for hincha in hinchas:
            deportes[hincha[0]] = db.Deportes(hincha[0])
        return render_template('hincha/ver-hinchas.html', hinchas = hinchas, deportes = deportes, paginas = total/5, i=int(i))


@app.route('/ver_artesanos/<i>', methods=['GET', 'POST'])
def ver_artesanos(i):
    if request.method == 'GET':
        total = db.count()
        artesanos = db.getArtesanos(int(i),5)
        tipos = {}
        for artesano in artesanos:
            tipos[artesano[0]] = db.getTipos(artesano[0])
        fotos = {}
        for artesano in artesanos:
            fotos[artesano[0]] = db.getFotos(artesano[0])
        return render_template('artesano/ver-artesanos.html', artesanos = artesanos, tipos = tipos, fotos = fotos, paginas = total/5, i=int(i))
    
@app.route('/informacion_artesano/<id>', methods=['GET', 'POST'])
def informacion_artesano(id):
    if request.method == 'GET':
        artesano = db.getArtesano(id)
        tipos = db.getTipos(id)
        fotos = db.getFotos(id)
        return render_template('artesano/informacion-artesano.html', artesano = artesano, tipos = tipos, fotos = fotos)


@app.route('/informacion_hincha/<id>', methods=['GET', 'POST'])
def informacion_hincha(id):
    if request.method == 'GET':
        hincha = db.getFullHincha(id)
        deportes = db.Deportes(id)
        return render_template('hincha/informacion-hincha.html', id = id, hincha = hincha, deportes = deportes)

@app.route('/estadisticas', methods=['GET', 'POST'])
def estadisticas():
    if request.method == 'GET':
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)