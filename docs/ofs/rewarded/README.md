# OperaAds Rewarded Integration Guide

### Request

| Field             | Type | Description
| ----------------- | -----| -------------
| imp.video.ext.rewarded  | int  | 1 means rewarded supported; 0 means rewarded not supported

## Sample

### Request (video)
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
          "rewarded":1
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
    }
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
  "source": {
    "ext": {
      "omidpn": "Opera",
      "omidpv": "omsdk-1.3.16-Opera"
    }
  },
  "regs": {
    "coppa": 0,
    "ext": {
      "gdpr": 0
    }
  }
}
```
