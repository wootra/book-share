# book-share

platform to share books

## requirements

- book owner can register their books to lend
- renter can rent books
- renter/lender can sign-up / log-in
- on book list, renter can select books and rent books
- on account page, renter can confirm the renting books
- on account page, lender can confirm their books which is currently lending with renter
-

## model design

```mermaid
erDiagram
USER ||--o{ BOOK : owns
USER o|--o{ BOOK : rents
RENT |o..|| BOOK : renting
RENT }o..|| BOOK : "rented(previously)"
USER ||..o{ RENT : has
```

## ui route design

```mermaid
stateDiagram-v2
    [*] --> /home : [GET] /books
    /home --> nav
    nav --> logo(image)
    nav --> rent(link)
    nav --> lend(link) : when<br/> customer<br/> logged in
    nav --> about(link)
    state "login(link) or username(button)" as login_or_username
    nav --> login_or_username
    logo(image) --> /home
    rent(link) --> /rent
    lend(link) --> /lend
    about(link) --> /about
    login_or_username --> login(link) : not logged in
    login_or_username --> username(button): logged in
    login(link) --> /log_in
    username(button) --> profile(link)
    profile(link) --> /userinfo/profile
    /userinfo/profile --> save(button)
    save(button) --> /userinfo/profile
    /userinfo --> profile(link)
    profile(link) --> /userinfo/profile : [GET]/profile
    /userinfo --> renting(link)
    renting(link) --> /userinfo/rent : [GET]/rents
    /userinfo --> lending(link)
    lending(link) --> /userinfo/lend : [GET]/lends
    /userinfo/lend --> /userinfo/lend : [PATCH]/lends/{id}<br>[POST]/lends/{id}
    username(button) --> logout(button)
    logout(button) --> /home : logging out
    /log_in --> sign_up(button)
    sign_up(button) --> /sign_up
    state "submit" as signup_submit
    /sign_up --> signup_submit
    signup_submit --> /home
    /log_in --> /home : customer logged in
    state "admin dashboard(/admin/home)" as admin_dash
    /log_in --> admin_dash : admin logged in
    state "submit" as admin_submit
    admin_dash --> admin_submit
    admin_submit --> admin_dash
```

## backend rounte design

```mermaid
---
title: "[GET] /books"
---
classDiagram
class Book {
    +int id
    +str title
    +str author
    -int owner_id
    +str description
    +User[] rented_users
    +User owner
}

class User {
    +int id
    +str name
    +str email
    +str user_id
    +Rent[] rented_records
    +Book[] owned_books
    +Book[] rented_books
}

class Rent {
    +int id
    -int renter_id
    -int book_id
    -User renter
    -Book book
}

Book <|-- User
User <|-- Book
Rent <|-- User
Rent <|-- Book
```
