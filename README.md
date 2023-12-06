# book-share

platform to share books

## model design

```mermaid
erDiagram
USER ||--o{ BOOK : owns
USER o|--o{ BOOK : rents
RENT |o..|| BOOK : renting
RENT }o..|| BOOK : "rented(previously)"
USER ||..o{ RENT : has
```
