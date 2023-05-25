# Endpoint
(https://lungcare-project-testing.et.r.appspot.com/)

## Status Testing
- URL
    - /
- Method
    - GET

## Login
- URL
    - /login
- Method
    - POST
- Request Body
    - username as string
    - password as string
- Response 
```json
{
    "message": "login successfull",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRubnNhbmdnYXJhQGdtYWlsLmNvbSIsImlhdCI6MTY4NTAxNDcwOSwiZXhwIjoxNjg1MDIxOTA5fQ.qqvU86q7QHujq-DCDc4zs0jCvIK7V65-nDZ2iXw0nDo"
}
```
for login username: danielkusuma@gmail.com password: danielkusuma

## Register
- URL
    - /register
- Method
    - POST
- Request Body
    - username as string
    - password as string
- Response 
```json
{
    "message": "user created successfully",
}
```

## Insert Image
- URL
    - /insertImage
- Method
    - POST
- Headers
    - Authorization: Bearer <token>
- Request Body
    - image as .jpg
- Response
```json
{
    message: "Insert Successfully"
}
```

## History
- URL
    - /history
- Method
    - GET
- Headers
    - Authorization: Bearer <token>
- Response
```json
[
    {
        "date": "2023-05-19T03:39:59.000Z",
        "gcsLink": "https://storage.googleapis.com/bucket-upload-testing/1684492800277",
        "processResult": "Processing"
    },
    {
        "date": "2023-05-19T03:41:00.000Z",
        "gcsLink": "https://storage.googleapis.com/bucket-upload-testing/1684492861097",
        "processResult": "Processing"
    }
]
```
