# from server.config import db
from flask_restful import Resource, reqparse
# from flask_restful import reqparse, abort, Api, Resource
from server.models.users import User
from server.models.books import Book
from server.models.rents import Rent

parser = reqparse.RequestParser()


class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('a', type=int, help='Rate to charge for a resource')
        parser.add_argument('b', type=int, help='Rate to charge for b resource')
        parser.add_argument('c', type=int, help='Rate to charge for c resource')
        parser.add_argument('d', type=int, help='Rate to charge for d resource')
        params = parser.parse_args()
        print(params)
        return params


class Books(Resource):
    def get(self):
        books = [book.to_dict() for book in Book.query.all()]
        return books


class Rents(Resource):
    def get(self):
        rents = [rent.to_dict() for rent in Rent.query.all()]
        return rents
