# from server.config import db
from flask import request
from flask_restful import Resource, reqparse
# from flask_restful import Resource
# from flask_restful import reqparse, abort, Api, Resource
from server.models.users import User
from server.models.books import Book
from server.models.rents import Rent


class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users

    def post(self):
        print("args:", request.args.to_dict())
        print("body:", request.get_json())
        res = {}
        # to validation:
        a = request.args.get("a", type=int, default=0)
        
        print("a is", type(a))
        res["params"] = request.args.to_dict()
        res["body"] = request.get_json()

        return res
        # parser.add_argument(
        #     'name', type=int, help='Rate to charge for a resource')
        # parser.add_argument(
        #     'age', type=int, help='Rate to charge for b resource')
        # parser.add_argument(
        #     'c', type=int, help='Rate to charge for c resource')
        # parser.add_argument(
        #     'd', type=int, help='Rate to charge for d resource')
        # params = parser.parse_args()
        # print(params)
        # return params


class Books(Resource):
    def get(self):
        books = [book.to_dict() for book in Book.query.all()]
        return books
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'a', type=int, help='a should be an integer')
        parser.add_argument(
            'b', type=int, help='b should be an integer')
        parser.add_argument(
            'c', type=int, help='c should be an integer')
        parser.add_argument(
            'd', type=int, help='d should be an integer')
        params = parser.parse_args()
        print(params)
        return params


class Rents(Resource):
    def get(self):
        rents = [rent.to_dict() for rent in Rent.query.all()]
        return rents
