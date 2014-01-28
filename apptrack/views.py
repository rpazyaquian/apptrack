__author__ = 'rebecca'

from apptrack import app
from flask import render_template, request, jsonify


@app.route('/echo', methods=['GET', 'POST'])
def echo():
    if request.method == 'POST':
        print request.get_json()
        return jsonify(**request.get_json())
    else:
        return "Post something to me!"


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('test.html')