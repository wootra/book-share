from server.models.users import User
from server.models.books import Book
from server.models.rents import Rent

from server.config import db
from server.api.index import app
try:
    with app.app_context():
        user1 = User(
            name="user1",
            email="user1@gmail.com",
            password="123",
            user_id="user1"
        )
        db.session.add(user1)
        db.session.commit()
        book1 = Book(
            title="user1",
            author="user1",
            owner_id=user1.id
        )
        db.session.add(book1)
        db.session.commit()
        rent1 = Rent(
            renter_id=user1.id,
            book_id=book1.id
        )
        db.session.add(rent1)
        db.session.commit()
except ValueError:
    print("ValueError")
