
## Introduction

This article gives some API usage examples for those who want to pull performance data(180 consecutive days at most) from Opera .

### Token

Your token

## HTTP Method

GET

## Endpoint

https://cms-adx.op-mobile.opera.com/oapi/report/dsp

## Query Parameters

  | Name         | Required   | Description   | Examples |
  | :-           | :-         | :-            | :-      |
  |token        |Yes        |Token         |v4lef2aQ5XO6fqn6tWlsetSYANpe2R6f|
  |start_date   |Yes        |Start Date    |2022-09-12|
  |end_date     |Yes        |End Date      |2022-09-19|

## Error Handing

  | StatusCode   | Message              | Description |
  | :-           | :-                   | :-          |
  | 0            | Ok                   | successful response|
  | 1            | Invalid parameters   | invalid query parameters like: 2020-9-12, must have leading-zero, or end_date - start_date >= 180 days|
  | 2            | Invalid token        | invalid token|
  | 3            | Too many request     | blocked by qps limiter|
  | 4            | Internal error       | internal error like unable to connect to database|

## Examples

	GET https://cms-adx.op-mobile.opera.com/oapi/report/dsp?token=v4lef2aQ5XO6fqn6tWlsetSYANpe2R6f&start_date=2022-09-12&end_date=2022-09-19

	curl -H "Content-Type:application/json" -X GET https://cms-adx.op-mobile.opera.com/oapi/report/dsp?token={your_token}&start_date=2022-09-12&end_date=2022-09-19

## Successful response

```json
{
  "data": [
    {
      "date": "2022-09-19",
      "impressionCount": 33118,
      "requestCount": 200095221,
      "fillCount": 1045361,
      "revenue": "23.917"
    },
    {
      "date": "2022-09-18",
      "impressionCount": 28810,
      "requestCount": 115185572,
      "fillCount": 1484676,
      "revenue": "59.239"
    },
    {
      "date": "2022-09-17",
      "impressionCount": 43454,
      "requestCount": 218424477,
      "fillCount": 1345227,
      "revenue": "66.388"
    },
    {
      "date": "2022-09-16",
      "impressionCount": 43031,
      "requestCount": 234421731,
      "fillCount": 1233303,
      "revenue": "18.026"
    },
    {
      "date": "2022-09-15",
      "impressionCount": 51923,
      "requestCount": 313809163,
      "fillCount": 2394707,
      "revenue": "26.762"
    },
    {
      "date": "2022-09-14",
      "impressionCount": 68345,
      "requestCount": 215060249,
      "fillCount": 1860096,
      "revenue": "52.543"
    },
    {
      "date": "2022-09-13",
      "impressionCount": 86381,
      "requestCount": 215612754,
      "fillCount": 2139820,
      "revenue": "67.812"
    },
    {
      "date": "2022-09-12",
      "impressionCount": 81459,
      "requestCount": 219343417,
      "fillCount": 1835471,
      "revenue": "69.602"
    }
  ],
  "message": "ok",
  "statusCode": 0
}
```