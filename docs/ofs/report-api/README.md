# Basic Report API

## Introduction

This Report API provides you with data of your current inventory and its performance in a given date.

### Token

Your token

## HTTP Method

GET

## Endpoint

https://ofp.adx.opera.com/openapi/reports

## Query Parameters

  | Name         | Required   | Description   | Examples |
  |:-------------|:----------:|:---------------|------------|
  |token         |Yes         |token           |            |
  |start_date    |Yes         |Start Date      |2021-07-01  |
  |end_date      |Yes         |End Date        |2021-08-01  |
  |split         |No          |if is true, return split data       |false  |


## Examples

```
GET https://ofp.adx.opera.com/openapi/reports?token={your_token}&start_date=2021-07-01&end_date=2021-08-01
```

```
curl -H "Content-Type:application/json" -X GET https://ofp.adx.opera.com/openapi/reports?token={your_token}&start_date=2021-07-01&end_date=2021-08-01
```

Successful response:

```json
{
    "list": [
        {
            "day": 20210709,
            "app_id": "",
            "app_name": "",
            "ad_tag_id": "",
            "ad_tag_name": "",
            "country_code": "NG",
            "format": "Native",
            "impression_count": 0,
            "request_count": 4,
            "revenue": 0
        }
    ],
    "total_count": 1
}
```

revenue: in dollar, (-1 means Updating in progress)

Bad response:
```json
{
    "code": 400,
    "message": "invalid token"
}
```
