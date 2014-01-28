__author__ = 'rebecca'

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(24))
    json_data = db.Column(db.String(9999999))

    def __repr__(self):
        return '<User %r>' % self.username