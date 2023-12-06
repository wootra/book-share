# book-share

platform to share books

## model design

```mermaid
erDiagram
USER ||--o{ BOOK : owns
USER o|--o{ BOOK : rents
RENT |o..|| BOOK : rents
RENT }o..|| BOOK : rented
USER ||..o{ RENT : has
```
