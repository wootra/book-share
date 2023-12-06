from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Integer, ForeignKey
from server.config import db


class Rent(db.Model):
    __tablename__ = "rents"
    id: Mapped[Integer] = mapped_column(Integer, primary_key=True)
    renter_id: Mapped[Integer] = mapped_column(
        ForeignKey('users.id'), nullable=False)
    book_id: Mapped[Integer] = mapped_column(
        ForeignKey('books.id'), nullable=False)
    
    renter = relationship("User", back_populates="rented_records")
    book = db.relationship('Book', back_populates='rented_records')
