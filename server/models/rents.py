from typing import Final
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Integer, ForeignKey
from sqlalchemy import Table
from server.config import db
# from server.models.users import User
# from server.models.books import Book


class Rent(db.Model):
    __tablename__ = "rents"
    id: Mapped[Integer] = mapped_column(Integer, primary_key=True)
    renter_id: Mapped[Integer] = mapped_column(
        ForeignKey('users.id'), nullable=False)
    book_id: Mapped[Integer] = mapped_column(
        ForeignKey('books.id'), nullable=False)
    
    renter = relationship("User", back_populates="rented_records")
    book = db.relationship('Book', back_populates='rented_records')
    
    
# user_keyword_table: Final[Table] = Table(
#     "user_keyword",
#     Base.metadata,
#     Column("user_id", Integer, ForeignKey("user.id"), primary_key=True),
#     Column("keyword_id", Integer, ForeignKey("keyword.id"), primary_key=True),
# )