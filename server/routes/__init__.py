# from server.config import db
from flask_restful import Resource
# from flask_restful import reqparse, abort, Api, Resource
from server.models.users import User
from server.models.books import Book
from server.models.rents import Rent


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
