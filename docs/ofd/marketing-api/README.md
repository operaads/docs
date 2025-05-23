# OperaAds Marketing API Integration Guide

## **Overview**

OperaAds Marketing API is used by advertisers to report events to the OperaAds server.

## **WorkFlow**

Usually there is 2 steps:

**Step1**: Add click\_id into campaign landing page url

The click\_id parameter is dynamically added by OperaAds side. And click\_id value is session related, different with each ad click.

**Step 2**: Advertisers get the ”click\_id” information from the landing page url query string.  Then this “click\_id” will be used for future macro substitution when calling OperaAds marketing API.

## **API Specification**

For OperaAds Marketing API, we support 2 methods to receive postback events:

### Method 1: By Query String

Using the Query string to carry event information.

HTTP Request using GET or POST

**URL**: [https://cb.adx.opera.com/marketing/pb](https://cb.adx.opera.com/marketing/pb)

**Query Parameters**:

| Parameters | Type | Description | Mandatory |
| :---: | :---: | ----- | :---: |
| partner | String | The partner name allocated by Opera | YES |
| cvid | String | The conversion ID allocated by Opera | YES |
| click\_id | String | An ID generated by OperaAds side dynamically (different click\_id for different AD requests.) and put in the click-through URL. Advertisers need to get the click\_id from the click-through URL, put it in this click\_id parameter without any change and post back to OperaAds Server. | YES |
| event\_name | String | Event name: install, register, login, purchase, place\_bet. If advertisers need more customized events,  please contact Opera Ads to create. | YES |
| event\_value | String | Event value if have, optional.  | Optional |
| payout | String | The payout to Opera in USD, optional. | Optional |

**Example**:

```
curl -X GET “https://cb.adx.opera.com/marketing/pb?partner=clientA&cvid=12345678&click_id=opera_generated_click_id&event_name=purchase&event_value=&payout=0.5”
```

For the query string case, we also support HTTP Post, like:

```
curl -X POST “https://cb.adx.opera.com/marketing/pb?partner=clientA&cvid=12345678&click_id=opera_generated_click_id&event_name=purchase&event_value=&payout=0.5”
```

**HTTP Response**

200 if the request is processed.

### Method 2: By HTTP Post body

Using HTTP Post body to carry event information

* URL： [`https://cb.adx.opera.com/marketing/pb`](https://cb.adx.opera.com/marketing/pb)
* HTTP Method: POST
* Content-Type: application/json
* Post body format

Example


```
curl --location '“https://cb.adx.opera.com/marketing/pb' \
--header 'Content-Type: application/json' \
--data '{
    "partner": "clientA",
    "cvid": "12345678",
    "click_id":"opera_generated_click_id",
    "event_name":"purchase",
    "event_value":"",
    "payout":"0.5"
}'
```

**Response**

HTTP Status Code is 200 if the request is processed.

Response Body (For Post Method)

HTTP Body in JSON format: {"status":0,"message":"ok"}

| Field | Type | Description |
| :---: | :---: | ----- |
| status | int | 0 means report success, otherwise failure |
| message | string | “ok” or the reason for failure. |
