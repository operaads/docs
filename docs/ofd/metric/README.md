# Metrics for Demand Partners

## Introduction
OperaAds can provide metrics to help measureing the inventory quality for demand partners. And these metrics are delivered through the metric object of OpenRTB bid requests.

## Metric Object Defination
This object is associated with an impression as an array of metrics. These metrics can offer insight into
the impression to assist with decisioning such as average recent viewability, click-through rate, etc. Each
metric is identified by its type, reports the value of the metric, and optionally identifies the source or
vendor measuring the value.

| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|type               |string; required|Type of metric being presented using exchange curated string names which should be published to bidders a priori. REQUIRED by the OpenRTB specification. The types we support are: - click_through_rate<br> - viewability<br> - video_completion_rate<br> - session_depth<br> Session depth (session_depth) is the total number of ads a user has seen in a given app session. A session ends after a user closes the app.
|value              |float; required|Number representing the value of the metric. Probabilities
must be in the range 0.0 – 1.0. REQUIRED by the OpenRTB specification.
|vendor             |string; recommended|Source of the value using exchange curated string names which should be published to bidders a priori. If the exchange itself is the source versus a third party, “EXCHANGE” is recommended.

## Request Example

```json
{
    "id":"2b2e61cc-f136-4ed3-a1c0-7624b7a61427",
    "imp":[
        {
            "id":"1",
            "tagid":"s4139511258944",
            "video":{
                "mimes":[
                    "video/mp4"
                ],
                "minduration":1,
                "maxduration":30,
                "minbitrate":100,
                "maxbitrate":2000,
                "placement":5,
                "skip":0,
                "protocols":[
                    2,
                    3,
                    5,
                    6
                ],
                "w":1280,
                "h":720,
                "startdelay":0,
                "linearity":1,
                "battr":[
                    16
                ],
                "maxextended":0,
                "boxingallowed":1,
                "playbackmethod":[

                ],
                "delivery":[
                    2
                ],
                "pos":7,
                "companionad":[
                    {
                        "id":"1",
                        "pos":7,
                        "w":1280,
                        "h":720
                    }
                ],
                "api":[
                    3,
                    5,
                    6
                ],
                "companiontype":[
                    1,
                    2,
                    3
                ],
                "ext":{
                    "rewarded":1
                }
            },
            "bidfloor":0.01,
            "bidfloorcur":"USD",
            "bidfloorcurdan":"USD",
            "instl":1,
            "secure":1,
            "metric": [
                {
                    "type": "click_through_rate",
                    "value": 0.03,
                    "vendor": "EXCHANGE"
                },
                {
                    "type": "video_completion_rate",
                    "value": 0.55,
                    "vendor": "EXCHANGE"
                },
                {
                    "type": "viewability",
                    "value": 0.85,
                    "vendor": "EXCHANGE"
                },
                {
                    "type": "session_depth",
                    "value": 10,
                    "vendor": "EXCHANGE"
                }
            ],
        }
    ],
    "app":{
        "id":"129242",
        "name":"Opera Mini",
        "bundle":"com.opera.mini.native",
        "cat":[
            "IAB1"
        ],
        "storeurl":"https://play.google.com/store/apps/details?id=com.opera.mini.native&hl=en_US",
        "keywords":"",
        "privacypolicy":1,
        "publisher":{
            "id":"21613",
            "name":""
        },
        "ver":"8.2.3"
    },
    "device":{
        "ua":"Mozilla/5.0 (Linux; Android 10; LM-X625N Build/) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19",
        "ip":"125.189.27.255",
        "geo":{
            "lat":0,
            "lon":0,
            "country":"KOR",
            "region":"",
            "city":"gyomun-dong",
            "zip":"",
            "type":2
        },
        "carrier":"",
        "language":"ko",
        "model":"lm-x625n",
        "os":"Android",
        "osv":"10",
        "h":0,
        "w":0,
        "connectiontype":2,
        "devicetype":4,
        "ifa":"cb28d9e4-32ba-410d-b5e7-b1345dxxxxxx",
        "make":"lg",
        "hwv":"",
        "ext":{
            "ifv":"",
            "atts":0
        }
    },
    "user":{
        "id":"",
        "ext":{

        }
    },
    "regs":{
        "coppa":0,
        "ext":{
            "gdpr":0
        }
    },
    "at":1,
    "tmax":600,
    "allimps":0,
    "cur":[
        "USD"
    ],
    "bcat":[
        "IAB25",
        "IAB26",
        "IAB24",
        "IAB11-4"
    ],
    "bapp":[

    ],
    "badv":[

    ],
    "ext":{
        "rewarded":1
    }
}
```


