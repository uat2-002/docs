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
