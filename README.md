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
- Response {
    "message": "login successfull",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRubnNhbmdnYXJhQGdtYWlsLmNvbSIsImlhdCI6MTY4NTAxNDcwOSwiZXhwIjoxNjg1MDIxOTA5fQ.qqvU86q7QHujq-DCDc4zs0jCvIK7V65-nDZ2iXw0nDo"
}

## Register
- URL
    - /register
- Method
    - POST
- Request Body
    - username as string
    - password as string
- Response {
    "message": "user created successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJpYXQiOjE2ODUwMTQ4NTEsImV4cCI6MTY4NTAxNDg4MX0.6YtKmaj8Y0KOxB5Z26IVCF123kNeeb3ftA_8K0dxWk8"
}

## Insert Image
- URL
    - /insertImage
- Method
    - POST
- Request Body
    - image as .jpg
    - username as string
- Response
{
    message: "Insert Successfully"
}

## History
- URL
    - /history/:username
- Method
    - GET
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

Note: for username just fill with "hellow" until the login feature comes
