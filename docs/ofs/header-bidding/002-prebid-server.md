# Prebid Server

## Overview

Prebid Server is an open-source solution for server-to-server header bidding. Supplier's client can communicate with Prebid Server to request and receive bids. These bids can then compete directly with bids from publisher's primary ad server.
OperaAds has provided bid adapter [golang version](https://docs.prebid.org/dev-docs/pbs-bidders.html#operaads) for prebid server. Prebid server's documentation is available at [prebid-server-overview](https://docs.prebid.org/prebid-server/overview/prebid-server-overview.html), and the source code is available at [prebid-server-src](https://github.com/prebid/prebid-server).

## Request Parameters
### extended paramters for OperaAds
Following parameters are mandatory for pbs(*prebid-server*) integrationm, please contact OperaAds Account Manager to setup account and get these parameters.
| Name | Scope | Type | Description | Example
| ---- | ----- | ---- | ----------- | -------
| placementId | required | String | The Placement Id provided by Opera Ads. | `s5732648708160`
| endpointId | required | String | The Endpoint Id provided by Opera Ads. | `ep5732673449728`
| publisherId | required | String | The Publisher Id provided by Opera Ads. | `pub5732583002624` 

### request example
Following example includes sample imp object with publisherId,endpointId and placementId which can be used to test OperaAds Adapter. Make sure the bidfloorprice is set to zero and test ads will be returned. 

#### banner in webpage

```json
"imp":[
      {
         "id":"1",
         "banner":{
            "format":[
               {
                  "w":300,
                  "h":250
               }
            ]
         },
         "ext":{
            "operaads":{
               "publisherId":"pub5732583002624",
               "endpointId":"ep5732673449728",
               "placementId":"s5732648708160"
            }
         }
      }
   ]
```

#### banner in app

```json
"imp":[
      {
         "id":"1",
         "banner":{
            "format":[
               {
                  "w":300,
                  "h":250
               }
            ]
         },
         "ext":{
            "operaads":{
               "publisherId":"pub5732583002624",
               "endpointId":"ep5732673449728",
               "placementId":"s5732644673280"
            }
         }
      }
   ]
```

#### video in webpage

```json
"imp":[
      {
         "id":"1",
         "video": {
                "mimes": [
                    "video/mp4"
                ],
                "minduration": 0,
                "maxduration": 60,
                "protocols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ],
                "protocol": 3,
                "w": 1280,
                "h": 720,
                "linearity": 1,
                "skip": 1,
                "sequence": 1,
                "minbitrate": 516,
                "placement": 1
         },
         "ext":{
            "operaads":{
               "publisherId":"pub5732583002624",
               "endpointId":"ep5732673449728",
               "placementId":"s5732648708160"
            }
         }
      }
   ]
```

#### video in app

```json
"imp":[
      {
         "id":"1",
         "video": {
                "mimes": [
                    "video/mp4"
                ],
                "minduration": 0,
                "maxduration": 60,
                "protocols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ],
                "protocol": 3,
                "w": 1280,
                "h": 720,
                "linearity": 1,
                "skip": 1,
                "sequence": 1,
                "minbitrate": 516,
                "placement": 1
         },
         "ext":{
            "operaads":{
               "publisherId":"pub5732583002624",
               "endpointId":"ep5732673449728",
               "placementId":"s5732644673280"
            }
         }
      }
   ]
```

#### native in webpage

```json
"imp":[
      {
         "id":"1",
         "native": {
                "request": "{\"native\":{\"ver\":\"1.1\",\"layout\":3,\"assets\":[{\"id\":1,\"required\":1,\"title\":{\"len\":90}},{\"id\":2,\"required\":1,\"img\":{\"type\":3,\"wmin\":344,\"hmin\":194}},{\"id\":3,\"required\":1,\"img\":{\"type\":1,\"w\":128,\"wmin\":80,\"h\":128,\"hmin\":80}},{\"id\":4,\"required\":1,\"data\":{\"type\":2,\"len\":90}},{\"id\":6,\"required\":1,\"data\":{\"type\":12,\"len\":15}}]}}",
                "ver": "1.1"
         },
         "ext":{
            "operaads":{
               "publisherId":"pub5732583002624",
               "endpointId":"ep5732673449728",
               "placementId":"s5732648708160"
            }
         }
      }
   ]
```

#### native in app

```json
"imp":[
      {
         "id":"1",
         "native": {
                "request": "{\"native\":{\"ver\":\"1.1\",\"layout\":3,\"assets\":[{\"id\":1,\"required\":1,\"title\":{\"len\":90}},{\"id\":2,\"required\":1,\"img\":{\"type\":3,\"wmin\":344,\"hmin\":194}},{\"id\":3,\"required\":1,\"img\":{\"type\":1,\"w\":128,\"wmin\":80,\"h\":128,\"hmin\":80}},{\"id\":4,\"required\":1,\"data\":{\"type\":2,\"len\":90}},{\"id\":6,\"required\":1,\"data\":{\"type\":12,\"len\":15}}]}}",
                "ver": "1.1"
         },
         "ext":{
            "operaads":{
               "publisherId":"pub5732583002624",
               "endpointId":"ep5732673449728",
               "placementId":"s5732644673280"
            }
         }
      }
   ]
```
