from flask import Flask
from flask_migrate import Migrate
from server.config import db
from flask_restful import Api, Resource
# from flask_restful import reqparse, abort, Api, Resource
from server.models.users import User
from server.models.books import Book
from server.models.rents import Rent


app = Flask(__name__)
api = Api(app)
migrate = Migrate(app, db)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users


class Books(Resource):
    def get(self):
        books = [book.to_dict() for book in Book.query.all()]
        return books


class Rents(Resource):
    def get(self):
        rents = [rent.to_dict() for rent in Rent.query.all()]
        return rents


api.add_resource(User, '/users')
api.add_resource(Books, '/books')
api.add_resource(Rents, '/rents')

# with app.app_context():
#     db.create_all()

# if __name__ == "__main__":
#     app.run(host="localhost", debug=True, port=5555)

# print("running:", __name__)
# if __name__ == "server.api.index":
#     print("running", __name__)
#     app.run(host="localhost", debug=True, port=5555)
