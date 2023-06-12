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
    - email as string
    - password as string
- Response 
```json
{
    "message": "login successfull",
    "loginResult": {
        "email": "email",
        "username": "username",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubnNhbmdnYXJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaGVsbG93IiwiaWF0IjoxNjg2NDQ4MTU1LCJleHAiOjE2ODY0NTUzNTV9.2MpALEYF-3mqhF1-cQJ8MbR6-Z0oYhpxNDSF5Cd8Nkg"
    }
}
```

## Register
- URL
    - /register
- Method
    - POST
- Request Body
    - username as string
    - password as string
    - email as string
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
    "message": "Result Found",
    "id": "daniel kusuma1686395524679",
    "username": "daniel kusuma",
    "gcsLink": "https://storage.googleapis.com/bucket-upload-testing/daniel kusuma_1686395520591",
    "result": "Covid-19"
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
        "id": "daniel kusuma1686208696880",
        "date": "2023-06-08T00:18:26.000Z",
        "gcsLink": "https://storage.googleapis.com/bucket-upload-testing/daniel kusuma_1686208696204",
        "processResult": "Normal"
    },
    {
        "id": "daniel kusuma1686208738161",
        "date": "2023-06-08T00:19:06.000Z",
        "gcsLink": "https://storage.googleapis.com/bucket-upload-testing/daniel kusuma_1686208737687",
        "processResult": "Pneumonia"
    }
]
```

## Detail History
- URL
    - /detailHistory/:id
- Method
    - GET   
- Headers
    - Authorization: Bearer <token>
- Request Params
    - id as string
- Response
```json
[
    {
        "id": "daniel kusuma1686395004344",
        "date": "2023-06-10T04:03:43.000Z",
        "gcsLink": "https://storage.googleapis.com/bucket-upload-testing/daniel kusuma_1686394999887",
        "processResult": "Covid-19"
    }
]
```

## News
- URL 
    - /news/:category
- Method
    - GET
- Headers
    - Authorization: Bearer <token>
- Request Params
    - category as string
- Response
```json
[
    {
        "newsID": 7,
        "newsCategory": "Normal",
        "title": "Paru-Paru",
        "newsURL": "https://www.halodoc.com/kesehatan/paru-paru",
        "imageURL": "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/21081543/Paru-paru-1.jpg.webp"
    },
    {
        "newsID": 8,
        "newsCategory": "Normal",
        "title": "Cara Menjaga Kesehatan Paru",
        "newsURL": "https://yankes.kemkes.go.id/view_artikel/2022/cara-menjaga-kesehatan-paru",
        "imageURL": "https://yankes.kemkes.go.id/img/bg-img/gambarartikel_1672806411_950600.png"
    },
    {
        "newsID": 9,
        "newsCategory": "Normal",
        "title": "5 Macam Penyakit Paru yang Sering Terjadi",
        "newsURL": "https://www.alodokter.com/macam-macam-penyakit-paru-paru-yang-perlu-anda-ketahui",
        "imageURL": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1648442790/attached_image/macam-macam-penyakit-paru-paru-yang-perlu-anda-ketahui-0-alodokter.jpg"
    }
]
```

## Get User
- URL 
    - /getUser
- Method
    - GET
- Headers
    - Authorization: Bearer <token>
- Response
```json
[
    {
        "username": "hellow"
    }
]
```