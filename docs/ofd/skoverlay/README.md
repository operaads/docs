# OperaAds SKOverlay Integration Guide

## SKOverlay

We now support SKOverlay for video ads on iOS. It is supported with the iOS version of V14+.

## Specification

### Request

| Field             | Type | Description
| ----------------- | -----| -------------
| Bidrequest.imp.ext.skadn.skoverlay  | int  | 1 means skoverlay supported; 0 means skoverlay not supported


### Response
If you want open SKOverlay for your Video ads，below fields is required in bid response:
| Field                     | Type   | Description
| ------------------------- | -------| -------------
| BidResponse.seatbid.bid.ext.skadn.itunesitem  | string | bundle id,must have if skoverlay is 1
| BidResponse.seatbid.bid.ext.skadn.skoverlay  | object | skoverlay info

Fields description of the skoverlay object: 

| Field                     | Type   | Description
| ------------------------- | -------| -------------
| present  | int,default 1 if itunesitem exist, else 0| should show the SKOverlay  1=yes 0=no. 
| delay  | int, default 5 | delay in seconds before showing the SKOverlay (0 to 60 seconds)
| dismissible  | int, default 1 | should the SKOverlay be dismissable by the user. 1=yes 0=no
| pos  | int,default 0 | position of the SKOverlay. 0=bottom 1=bottom raise
| endcarddelay  | int,default 0 | delay in seconds before showing the overlay on top of the end card (0-60).Use -1 if you do not want to show the overlay on top of the end card.
| autoclose  | int,default 0 | Time in seconds to automatically dismiss the overlay (0-60).Value of 0 means no automatic dismiss
| click  | int,default 1 | Fire the click tracking when the overlay is displayed 1=yes 0=mo

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
        "placement": 4
      },
      "displaymanager": "opera",
      "displaymanagerver": "0.0.1",
      "instl": 0,
      "clickbrowser": 0,
      "tagid": "s887400326784",
      "bidfloor": 0.08,
      "bidfloorcur": "USD",
      "secure": 1,
      "exp": 7200,
      "ext":{
        "skoverlay":1
      }
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
                        "skadn":{
                            "version":"4.0",
                            "network":"cdkw7geqsh.skadnetwork",
                            "sourceidentifier":"4321",
                            "itunesitem":"123456789",
                            "sourceapp":"880047117",
                            "productpageid":"45812c9b-c296-43d3-c6a0-c5a02f74bf6e",
                            "fidelities":[
                                {
                                    "fidelity":0,
                                    "signature":"MEQCIEQlmZRNfYzKBSE8QnhLTIHZZZWCFgZpRqRxHss65KoFAiAJgJKjdrWdkLUOCCjuEx2RmFS7daRzSVZRVZ8RyMyUXg==",
                                    "nonce":"473b1a16-b4ef-43ad-9591-fcf3aefa82a7",
                                    "timestamp":"1594406341"
                                },
                                {
                                    "fidelity":1,
                                    "signature":"GRlMDktMmE5Zi00ZGMzLWE0ZDEtNTQ0YzQwMmU5MDk1IiwKICAgICAgICAgICAgICAgICAgInRpbWVzdGTk0NDA2MzQyIg==",
                                    "nonce":"e650de09-2a9f-4dc3-a4d1-544c402e9095",
                                    "timestamp":"1594406342"
                                }
                            ],
                            "skoverlay":{
                                "present":1,
                                "delay":10
                            }
                        }
                    },
                    "price":0.3107,
                    "id":"233905142216853169",
                    "impid":"000909905006892739c0_8912",
                    "crid":"1_201817729_0x0",
                    "adm":"...vast xml"
                }
            ]
        }
    ],
    "cur":"USD"
}

```
