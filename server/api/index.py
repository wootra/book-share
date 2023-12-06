from flask import Flask
from flask_migrate import Migrate
from server.config import db
from flask_restful import Api
from server.routes import Users, Books, Rents

app = Flask(__name__)
migrate = Migrate(app, db)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
api = Api(app)


api.add_resource(Users, '/users')
api.add_resource(Books, '/books')
api.add_resource(Rents, '/rents')
