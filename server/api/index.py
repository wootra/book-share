from flask import Flask, render_template
from flask_migrate import Migrate
from server.config import db
# from server.api import api
from server.models.users import User
from server.models.books import Book
from server.models.rents import Rent


app = Flask(__name__)
migrate = Migrate(app, db)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


@app.route("/users/")
def user_list():
    users = User.query.all()
    return render_template(users.to_dict())


@app.route("/books/")
def books_list():
    books = Book.query.all()
    return render_template(books.to_dict())


@app.route("/rents/")
def rents_list():
    rents = Rent.query.all()
    return render_template(rents.to_dict())


# with app.app_context():
#     db.create_all()

# if __name__ == "__main__":
#     app.run(host="localhost", debug=True, port=5555)

# print("running:", __name__)
# if __name__ == "server.api.index":
#     print("running", __name__)
#     app.run(host="localhost", debug=True, port=5555)
