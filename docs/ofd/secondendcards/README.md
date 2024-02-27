# OperaAds Second End Card Integration Guide

## Second End Card

Aimed to boost performance of app install campaigns. Only some suppliers support Second End Card, there is 2 cases:
<ol>
  <li>Use the second companion ad to display as 2nd End card.</li>
  <li>Auto generated Second End card with the app’s name and icon.</li>
</ol>

## Specification

### Request

If inventory support second end card, in bid request, below field is used to indicate:

| Field             | Type | Description
| ----------------- | -----| -------------
| BidRequest.imp.video.ext.dualendcard  | int  | 1  supported; 0 not supported


### Response
If you want open Second End Card for your Video ads，below fields is required in bid response:
| Field                     | Type   | Description
| ------------------------- | -------| -------------
| BidResponse.seatbid.bid.ext.networkec  | int,default 1 | 1 enable, 0 disable
| BidResponse.seatbid.bid.bundle  | string | A platform-specific application identifier intended to be unique to the app and independent of the exchange. On Android, this should be a bundle or package name (e.g., com.foo.mygame). On iOS, it is a numeric ID.

## Sample

### Request
```json
{
  "id": "00000822d5685e68fc80_9872",
  "imp": [
    {
      "id": "00000822d5685e68fc80_9872",
      "video": {
        "mimes": [
          "video/mp4"
        ],
        "maxduration": 20,
        "protocols": [
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "w": 640,
        "h": 360,
        "linearity": 1,
        "skip": 1,
        "sequence": 1,
        "minbitrate": 516,
        "placement": 4,
        "ext":{
          "dualendcard":1
        }
      },
      "displaymanager": "opera",
      "displaymanagerver": "0.0.1",
      "instl": 0,
      "clickbrowser": 0,
      "tagid": "s887400326784",
      "bidfloor": 0.08,
      "bidfloorcur": "USD",
      "secure": 1,
      "exp": 7200
    },
  ],
  "app": {
    "id": "app307992346304",
    "name": "Opera for Android Final",
    "domain": "opera.com",
    "privacypolicy": 1,
    "publisher": {
      "id": "pub236088034304"
    },
    "bundle": "com.opera.browser",
    "storeurl": "https://play.google.com/store/apps/details?id=com.opera.browser",
    "ver": "74.1.3922.71199"
  },
  "device": {
    "ua": "Mozilla/5.0 (Linux; Android 12; TECNO LG7n) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.192 Mobile Safari/537.36 OPR/74.1.3922.71199",
    "geo": {
      "type": 2,
      "country": "RUS",
      "region": "RU-KIR",
      "city": "Kirov"
    },
    "dnt": 0,
    "lmt": 0,
    "ip": "176.59.255.255",
    "devicetype": 4,
    "make": "TECNO",
    "model": "TECNOLG7n",
    "os": "ANDROID",
    "osv": "12",
    "h": 1567,
    "w": 720,
    "js": 1,
    "language": "ru",
    "mccmnc": "250-20",
    "connectiontype": 5
  },
  "user": {
    "id": "511b4522807a7902"
  },
  "at": 1,
  "tmax": 1000,
  "cur": [
    "USD"
  ],
  "bcat": [
    "IAB24",
    "IAB25",
    "IAB26"
  ],
  "badv": [
  ],
  "bapp": [
  ],
  "regs": {
    "coppa": 0,
    "ext": {
      "gdpr": 0
    }
  }
}
```

### Response
```json
{
    "id":"000909905006892739c0_8912",
    "seatbid":[
        {
            "bid":[
                {
                    "ext":{
                        "networkec":1
                    },
                    "price":0.3107,
                    "id":"233905142216853169",
                    "impid":"000909905006892739c0_8912",
                    "crid":"1_201817729_0x0",
                    "adm":"...vast xml",
                    "bundle":"com.opera.browser"
                }
            ]
        }
    ],
    "cur":"USD"
}

```
