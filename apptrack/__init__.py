__author__ = 'rebecca'

from flask import Flask
from flask_bootstrap import Bootstrap
from flask_login import LoginManager
from flask_restless import APIManager
from models import db, User


app = Flask(__name__)
Bootstrap(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db.init_app(app)

with app.test_request_context():
    db.create_all()

manager = APIManager(app, flask_sqlalchemy_db=db)

user_blueprint = manager.create_api(User, methods=['GET', 'POST'])

login_manager = LoginManager()
login_manager.init_app(app)


import apptrack.views