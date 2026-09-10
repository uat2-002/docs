# API Contract [FE+BE]

## Authentication

### **Endpoint: /register**

- Method: POST
- Headers:
  - Content-Type: application/json
- Request Body:

```json
{
  "email": "string",
  "password": "string"
}
```

- Success Response:

```json
{
  "id": "123",
  "email": "johndoe@example.com"
}
```

- Error Codes:
  - 400: Bad Request
  - 409: Email in use
  - 500: Internal server error

### **Endpoint: /login**

- Method: POST
- Headers:
  - Content-Type: application/json
- Request Body:

```json
{
  "email": "string",
  "password": "string"
}
```

- Success Response:

```json
{
  "accessToken": "string",
  "tokenType": "Bearer",
  "user": {
    "id": "123",
    "email": "johndoe@example.com"
  }
}
```

- Error Codes:
  - 400 Bad Request
  - 401 Unauthorized
  - 500: Internal server error

### **Endpoint: /me**

- Method: GET
- Headers:
  - Authorization: Bearer `<accessToken>`
- Request Body: None
- Success Response:

```json
{
  "id": "123",
  "email": "johndoe@example.com"
}
```

- Error Codes:
  - 401: Unauthorized
  - 500: Internal server error

### **Endpoint: /logout**

- Method: POST
- Headers:
  - Authorization: Bearer `<accessToken>`
- Request Body: None
- Success Response:

```json
{
  "message": "Successfully logged out"
}
```

- Error Codes:
  - 401: Unauthorized
  - 500: Internal server error

## Series search

### **Endpoint: /series/search**

- Method: GET
- Headers:
  - Authorization: Bearer `<accessToken>`
- Query Params:
  - query(string)
- Request Body:None
- Success Response:

```json
{
  "results": [
    {
      "tmdbId": 1,
      "title": "The Incredibles",
      "poster": "/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
      "releaseDate": "2004-10-27",
      "genres": ["drama"],
      "status": "ended"
    }
  ]
}
```

- Error Codes:
  - 400: Bad Request
  - 401: Unauthorized
  - 500: Internal server error

### **Endpoint: /series/:tmdbId**

- Method: GET
- Headers:
  - Authorization: Bearer `<accessToken>`
- URL Params
  - tmdbId(number)
- Request Body:None
- Success Response:

```json
{
  "tmdbId": 1,
  "title": "The Incredibles",
  "overview": "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
  "releaseDate": "2004-10-27",
  "genres": ["drama"],
  "poster": "/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
  "status": "ended",
  "seasons": [
    {
      "seasonNumber": 1,
      "episodes": [
        {
          "episodeId": 1,
          "episodeNumber": 1,
          "title": "Pilot"
        }
      ]
    }
  ]
}
```

- Error Codes:
  - 401: Unauthorized
  - 404: Not Found
  - 500: Internal server error
