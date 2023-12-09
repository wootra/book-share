from flask import Flask
from flask_migrate import Migrate
from server.config import db
import server.env_vars as env_vars
from flask_restful import Api
from server.routes import Users, Books, Rents
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

migrate = Migrate(app, db)
app.config.from_object(env_vars)

db.init_app(app)
api = Api(app)


api.add_resource(Users, '/api/users')
api.add_resource(Books, '/api/books')
api.add_resource(Rents, '/api/rents')
