# Endpoint
(https://lungcare-project-testing.et.r.appspot.com/)

## Status Testing
- URL
    - /
- Method
    - GET

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
