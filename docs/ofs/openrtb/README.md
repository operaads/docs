# Server to Server API for Publishers

## API Overview
Publishers/SSP could call this API on server side to get RTB campaigns from OperaAds. The API is follow [OpenRTB 2.5 specification](https://www.iab.com/wp-content/uploads/2016/03/OpenRTB-API-Specification-Version-2-5-FINAL.pdf) completely and can be integrated easily.

## Requests
### Endpoint
```url
https://b-${zone}.adx.opera.com/ortb/v2/${publisherId}?ep=${endpointId}
```
Variable ${zone} has 3 options: eu, us, sg. All the 3 variables are assigned by OperaAds, the real endpoint will be like: `https://b-us.adx.opera.com/ortb/v2/pubxxxxxx?ep=epxxxxxx`
- The API uses the POST HTTP request method only
- There is no test endpoint. But the API can return test ads in integration phase.

### Reqeust Headers
- *x-openrtb-version: 2.5*

### Request Parameters
#### Bid Request
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id                 |string; required|Unique ID of the bid request, provided by the exchange.
|imp|object array; required|Array of Imp objects representing the impressionsoffered. Currently OperaAds only support 1 Imp object
|site|object; recommended|Details via a Site object about the publisher’s website. Only applicable and recommended for websites.
|app|object; recommended|Details via an App object about the publisher’s app (i.e., non-browser applications). Only applicable and recommended for apps.
|device|object; recommended|Details via a Device object about the user’s device to which the impression will be delivered.
|user|object; recommended|Details via a User object about the human user of the device; the advertising audience.
|at|integer;|Auction type, where 1 = First Price, 2 = Second Price Plus.
|tmax|integer|Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout. This value supersedes any a priori guidance from the exchange.
|cur|string array|Array of allowed currencies for bids on this bid request using ISO-4217 alpha codes. Recommended only if the exchange accepts multiple currencies.
|source|object|A Sorce object that provides data about the inventory source and which entity makes the final decision.
|regs|object|A Regs object that specifies any industry, legal, or governmental regulations in force for this request.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Imp
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id|string; required|A unique identifier for this impression within the context of the bid request (typically, starts with 1 and increments.
|banner|object|A Banner object; required if this impression is offered as a banner ad opportunity.
|video|object|A Video object; required if this impression is offered as a video ad opportunity.
|native|object|A Native object; required if this impression is offered as a native ad opportunity.
|displaymanager|string|Name of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile). Used by some ad servers to customize ad code by partner. Recommended for video and/or apps.
|displaymanagerver|string|Version of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile). Used by some ad servers to customize ad code by partner. Recommended for video and/or apps.
|instl|integer; default 0|1 = the ad is interstitial or full screen, 0 = not interstitial.
|tagid|string|Identifier for specific ad placement or ad tag that was used to initiate the auction. This can be useful for debugging of any issues, or for optimization by the buyer.
|bidfloor|float; default 0|Minimum bid for this impression expressed in CPM.
|bidfloorcur|string; default "USD"|Currency specified using ISO-4217 alpha codes. This may be different from bid currency returned by bidder if this is allowed by the exchange.
|exp|integer|Advisory as to the number of seconds that may elapse between the auction and the actual impression.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Banner
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|format|object array; recommended|Array of format objects representing the banner sizes permitted. If none are specified, then use of the h and w attributes is highly recommended.
|w|integer|Exact width in device independent pixels (DIPS); recommended if no format objects are specified.
|h|integer|Exact height in device independent pixels (DIPS); recommended if no format objects are specified.
|pos|integer|Ad position on screen.
|mimes|string array|Content MIME types supported. Popular MIME types may include “application/x-shockwave-flash”, “image/jpg”, and “image/gif”.
|api|integer array|List of supported API frameworks for this impression. If an API is not explicitly listed, it is assumed not to be supported.
|id|string|Unique identifier for this banner object. Recommended when Banner objects are used with a Video object to represent an array of companion ads. Values usually start at 1 and increase with each object; should be unique within an impression.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Video
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|mimes|string array; required|Content MIME types supported (e.g., “video/x-ms-wmv”, “video/mp4”).
|minduration|integer; recommended|Minimum video ad duration in seconds.
|maxduration|integer; recommended|Maximum video ad duration in seconds.
|protocols|integer array; recommended|Array of supported video protocols.At least one supported protocol must be specified in either the protocol or protocols attribute.
|w|integer; recommended|Width of the video player in device independent pixels (DIPS).
|h|integer; recommended|Height of the video player in device independent pixels (DIPS).
|startdelay|integer; recommended|Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements.
|placement|integer|Placement type for the impression. 
|linearity|integer|Indicates if the impression must be linear, nonlinear, etc. If none specified, assume all are allowed. 
|skip|integer|Indicates if the player will allow the video to be skipped, where 0 = no, 1 = yes.If a bidder sends markup/creative that is itself skippable, the Bid object should include the attr array with an element of 16 indicating skippable video.
|skipmin|integer; default 0|Videos of total duration greater than this number of seconds can be skippable; only applicable if the ad is skippable.
|skipafter|integer; default 0|Number of seconds a video must play before skipping is enabled; only applicable if the ad is skippable.
|sequence|integer|If multiple ad impressions are offered in the same bid request,the sequence number will allow for the coordinated delivery of multiple creatives.
|maxextended|integer|Maximum extended ad duration if extension is allowed. If blank or 0, extension is not allowed. If -1, extension is allowed, and there is no time limit imposed. If greater than 0, then the value represents the number of seconds of extended play supported beyond the maxduration value.
|minbitrate|integer|Minimum bit rate in Kbps.
|maxbitrate|integer|Maximum bit rate in Kbps.
|boxingallowed|integer; default 1|Indicates if letter-boxing of 4:3 content into a 16:9 window is allowed, where 0 = no, 1 = yes.
|playbackmethod|integer array|Playback methods that may be in use. If none are specified, any method may be used. Only one method is typically used in practice. As a result, this array may be converted to an integer in a future version of the specification. It is strongly advised to use only the first element of this array in preparation for this change.
|delivery|integer array|Supported delivery methods (e.g., streaming, progressive). If none specified, assume all are supported. 
|pos|integer|Ad position on screen. 
|companionad|object array|Array of Banner objects if companion ads are available.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Native
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|request|string; required|Request payload complying with the Native Ad Specification.
|ver|string; recommended|Version of the Dynamic Native Ads API to which request complies; highly recommended for efficient parsing.
|api|integer array|List of supported API frameworks for this impression. If an API is not explicitly listed, it is assumed not to be supported.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Format
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|w|integer|Width in device independent pixels (DIPS).
|h|integer|Height in device independent pixels (DIPS).
|wratio|integer|Relative width when expressing size as a ratio.
|hratio|integer|Relative height when expressing size as a ratio.
|wmin|integer|The minimum width in device independent pixels (DIPS) at which the ad will be displayed the size is expressed as a ratio.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:App
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id|string;recommended|Exchange-specific app ID.
|name|string|App name (may be aliased at the publisher’s request).
|bundle|string|A platform-specific application identifier intended to be unique to the app and independent of the exchange. On Android, this should be a bundle or package name (e.g., com.foo.mygame). On iOS, it is typically a numeric ID.
|domain|string|Domain of the app (e.g., “mygame.foo.com”).
|storeurl|string|App store URL for an installed app; for IQG 2.1 compliance.
|cat|string array|Array of IAB content categories of the app. 
|sectioncat|string array|Array of IAB content categories that describe the current section of the app. 
|pagecat|string array|Array of IAB content categories that describe the current page or view of the app. 
|ver|string|Application version.
|privacypolicy|integer|Indicates if the app has a privacy policy, where 0 = no, 1 = yes.
|paid|integer|0 = app is free, 1 = the app is a paid version.
|publisher|object|Details about the Publisher of the app.
|content|object|Details about the Content within the app.
|keywords|string|Comma separated list of keywords about the app.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Site
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id|string;recommended|Exchange-specific site ID.
|name|string|Site name (may be aliased at the publisher’s request).
|domain|string|Domain of the site (e.g., “mysite.foo.com”).
|cat|string array|Array of IAB content categories of the site. 
|sectioncat|string array|Array of IAB content categories that describe the current section of the site. 
|pagecat|string array|Array of IAB content categories that describe the current page or view of the site. 
|page|string|URL of the page where the impression will be shown.
|ref|string|Referrer URL that caused navigation to the current page.
|search|string|Search string that caused navigation to the current page.
|mobile|integer|Indicates if the site has been programmed to optimize layout when viewed on mobile devices, where 0 = no, 1 = yes.
|privacypolicy|integer|Indicates if the app has a privacy policy, where 0 = no, 1 = yes.
|publisher|object|Details about the Publisher of the site.
|keywords|string|Comma separated list of keywords about the site.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Publisher
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id|string;recommended|Exchange-specific publisher ID.
|name|string|Publisher name (may be aliased at the publisher’s request).
|domain|string|Highest level domain of the publisher (e.g., “publisher.com”).
|cat|string array|Array of IAB content categories of the publisher. 
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Device
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|ua|string; recommended|Browser user agent string.
|geo|object; recommended|Location of the device assumed to be the user’s current location defined by a Geo object
|dnt|integer; recommended|Standard “Do Not Track” flag as set in the header by the browser, where 0 = tracking is unrestricted, 1 = do not track.
|lmt|integer; recommended|"Limit Ad Tracking" signal commercially endorsed (e.g., iOS, Android), where 0 = tracking is unrestricted, 1 = tracking must be limited per commercial guidelines.
|ip|string; recommended|IPv4 address closest to device.
|ipv6|string|IP address closest to device as IPv6.
|devicetype|integer|The general type of device. 
|make|string|Device make (e.g., "Apple").
|model|string|Device model(e.g., "iPhone").
|os|string|Device operating system (e.g., "iOS").
|osv|string|Device operating system version (e.g., "3.1.2").
|hwv|string|Hardware version of the device (e.g., “5S” for iPhone 5S).
|ppi|integer|Screen size as pixels per linear inch.
|pxratio|float|The ratio of physical pixels to device independent pixels.
|js|integer|Support for JavaScript, where 0 = no, 1 = yes.
|geofetch|integer|Indicates if the geolocation API will be available to JavaScript code running in the banner, where 0 = no, 1 = yes.
|flashver|string|Version of Flash supported by the browser.
|language|string|Browser language using ISO-639-1-alpha-2.
|carrier|string|Carrier or ISP (e.g., “VERIZON”) using exchange curated string names which should be published to bidders a priori.
|mccmnc|string|Mobile carrier as the concatenated MCC-MNC code (e.g., “310-005” identifies Verizon Wireless CDMA in the USA). Refer to https://en.wikipedia.org/wiki/Mobile_country_code for further examples. Note that the dash between the MCC and MNC parts is required to remove parsing ambiguity.
|connectiontype|integer|Network connection type. 
|ifa|string|ID sanctioned for advertiser use in the clear (i.e., not hashed).
|didsha1|string|Hardware device ID (e.g., IMEI); hashed via SHA1.
|didmd5|string|Hardware device ID (e.g., IMEI); hashed via MD5.
|dpidsha1|string|Platform device ID (e.g., Android ID); hashed via SHA1.
|dpidmd5|string|Platform device ID (e.g., Android ID); hashed via MD5.
|macsha1|string|MAC address of the device; hashed via SHA1.
|macmd5|string|MAC address of the device; hashed via MD5.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Geo
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|lat|float|Latitude from -90.0 to +90.0, where negative is south.
|lon|float|Longitude from -180.0 to +180.0, where negative is west.
|type|integer|Source of location data; recommended when passing lat/lon. 
|accuracy|integer|Estimated location accuracy in meters; recommended when lat/lon are specified and derived from a device’s location services (i.e., type = 1). Note that this is the accuracy as reported from the device. Consult OS specific documentation (e.g., Android, iOS) for exact interpretation.
|lastfix|integer|Number of seconds since this geolocation fix was established. Note that devices may cache location data across multiple fetches. Ideally, this value should be from the time the actual fix was taken.
|ipservice|integer|Service or provider used to determine geolocation from IP address if applicable (i.e., type = 2). 
|country|string|Country code using ISO-3166-1-alpha-3.
|region|string|Region code using ISO-3166-2; 2-letter state code if USA.
|metro|string|Google metro code; similar to but not exactly Nielsen DMAs. See Appendix A for a link to the codes.
|city|string|City using United Nations Code for Trade & Transport Locations. 
|zip|string|Zip or postal code.
|utcoffset|integer|Local time as the number +/- of minutes from UTC.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:User
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id|string; recommended|Exchange-specific ID for the user. At least one of id or buyeruid is recommended.
|buyeruid|string; recommended|Buyer-specific ID for the user as mapped by the exchange for thebuyer. Atleastoneofbuyeruidoridisrecommended.
|yob|integer|Year of birth as a 4-digit integer.
|gender|string|Gender, where "M" = male, "F" = female, "O" = known to be other (i.e., omitted is unknown).
|keywords|string|Comma separated list of keywords,interests,or intent.
|customdata|string|Optional feature to pass bidder data that was set in the exchange’s cookie. The string must be in base85 cookie safe characters and be in any format. Proper JSON encoding must be used to include "escaped" quotation marks.
|geo|object|Location of the user’s home base defined by a Geo object. This is not necessarily their current location.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Source
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|fd|integer; recommended|Entity responsible for the final impression sale decision, where 0 = exchange, 1 = upstream source.
|tid|string; recommended|Transaction ID that must be common across all participants in this bid request (e.g., potentially multiple exchanges).
|pchain|string; recommended|Payment ID chain string containing embedded syntax described in the TAG Payment ID Protocol v1.0.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Object:Regs
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|coppa|integer|Flag indicating if this request is subject to the COPPA regulations established by the USA FTC, where 0 = no, 1 = yes.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

### Request Examples
An example of the OperaAds S2S API Request JSON object for a Video Ad on an Android mobile phone:
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
            "secure":1
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

## Responses
### HTTP Response Status Codes
OperaAds S2S API responses mapped to standard HTTP response codes:
| Code         | Definition    | Desciption
|--------------|---------------|------------------------------------------
|200|OK|Ad request filled.
|204|No Content|Ad request accepted but not filled.
|400|Bad Request|Request was incorrect or missing parameters.
|500|Internal Server Error|Some error occurs on server side

### Response Parameters
#### Bid Response
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id|string;required|ID of the bid request to which this is a response.
|seatbid|object array|Array of seatbid objects; 1+ required if a bid is to be made.
|bidid|string|Bidder generated response ID to assist with logging/tracking.
|cur|string; default "USD"|Bid currency using ISO-4217 alpha codes.
|ext|object|Placeholder for bidder-specific extensions to OpenRTB.

#### Object:SeatBid
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|bid|object array; required|Array of 1+ Bid objects (Section 4.2.3) each related to an impression. Multiple bids can relate to the same impression.
|seat|string|ID of the buyer seat (e.g., advertiser, agency) on whose behalf this bid is made.
|group|integer;default 0|0 = impressions can be won individually; 1 = impressions must be won or lost as a group.
|ext|object|Placeholder for bidder-specific extensions to OpenRTB.

#### Object:Bid
| Attribute         | Type          | Desciption
|-------------------|---------------|------------------------------------------
|id|string; required|Bidder generated bid ID to assist with logging/tracking.
|impid|string; required|ID of the Imp object in the related bid request.
|price|float;required|Bid price expressed as CPM although the actual transaction is for a unit impression only. Note that while the type indicates float, integer math is highly recommended when handling currencies (e.g., BigDecimal in Java).
|nurl|string|Win notice URL called by the exchange if the bid wins (not necessarily indicative of a delivered, viewed, or billable ad); optional means of serving ad markup. Substitution macros may be included in both the URL and optionally returned markup.
|burl|string|Billing notice URL called by the exchange when a winning bid becomes billable based on exchange-specific business policy (e.g., typically delivered, viewed, etc.). Substitution macros may be included.
|lurl|string|Loss notice URL called by the exchange when a bid is known to have been lost. Substitution macros may be included. Exchange-specific policy may preclude support for loss notices or the disclosure of winning clearing prices resulting in ${AUCTION_PRICE} macros being removed (i.e., replaced with a zero-length string).
|adm|string|Optional means of conveying ad markup in case the bid wins; supersedes the win notice if markup is included in both. Substitution macros may be included.
|adid|string|ID of a preloaded ad to be served if the bid wins.
|adomain|string array|Advertiser domain for block list checking (e.g., "ford.com"). This can be an array of for the case of rotating creatives. Exchanges can mandate that only one domain is allowed.
|bundle|string|A platform-specific application identifier intended to be unique to the app and independent of the exchange. On Android, this should be a bundle or package name (e.g., com.foo.mygame). On iOS, it is a numeric ID.
|iurl|string|URL without cache-busting to an image that is representative of the content of the campaign for ad quality/safety checking.
|cid|string|Campaign ID to assist with ad quality checking; the collection of creatives for which iurl should be representative.
|crid|string|Creative ID to assist with ad quality checking.
|cat|string array|IAB content categories of the creative. 
|attr|integer array|Set of attributes describing the creative. 
|api|integer|API required by the markup if applicable. 
|protocol|integer|Video response protocol of the markup if applicable. 
|language|string|Language of the creative using ISO-639-1-alpha-2. The non- standard code "xx" may also be used if the creative has no linguistic content (e.g., a banner with just a company logo).
|w|integer|Width of the creative in device independent pixels (DIPS).
|h|integer|Height of the creative in device independent pixels (DIPS)
|wratio|integer|Relative width of the creative when expressing size as a ratio. Required for Flex Ads.
|hratio|integer|Relative height of the creative when expressing size as a ratio. Required for Flex Ads.
|exp|integer|Advisory as to the number of seconds the bidder is willing to wait between the auction and the actual impression.
|ext|object|Placeholder for exchange-specific extensions to OpenRTB.

#### Substitution Macros
| Macro         | Desciption
|---------------|------------------------------------------
|${AUCTION_ID}|ID of the bid request; from BidRequest.id attribute.
|${AUCTION_BID_ID}|ID of the bid; from BidResponse.bidid attribute.
|${AUCTION_IMP_ID}|ID of the impression just won; from imp.id attribute.
|${AUCTION_SEAT_ID}|ID of the bidder seat for whom the bid was made.
|${AUCTION_AD_ID}|ID of the ad markup the bidder wishes to serve; from bid.adid attribute.
|${AUCTION_PRICE}|Clearing price using the same currency and units as the bid.
|${AUCTION_CURRENCY}|The currency used in the bid (explicit or implied); for confirmation only.
|${AUCTION_LOSS}|Loss reason codes. 

### Response Examples
Video Response:
```json
{
    "id":"610396f2272eb71212d0175b",
    "seatbid":[
        {
            "bid":[
                {
                    "id":"000104f77af88d062d02",
                    "impid":"1",
                    "price":1.6732495,
                    "nurl":"https://t-odx.op-mobile.opera.com/win?a=a5218405729472&b=1531843592&burl=aHR0cHM6Ly9hcGkxNi1hY2Nlc3Mtc2cucGFuZ2xlLmlvL2FwaS9hZC91bmlvbi9zaG93X2V2ZW50Lz9yZXFfaWQ9MDAwMTA0Zjc3YWY4OGQwNjJkMDJ1NDM1OCZ0dGRzcF9hZHhfaW5kZXg9MTcyJmV4dHJhPTRBZmh0UVJwMjJER09CdkE1ekkwbFMlMkZjVCUyQnc5SkpnYXdPQWhJZ21kR1NIcTltaGcyV293bHhhVk1DbnBYOWFFbkN2WmxKJTJGNFhuWDlZM2Z0OUVFM2pDMUtlRmNvNSUyRjgyRWdxcW9VZ2puRXpnUWtJRndORm5HaEhvYmwwT1NrWFpEYmZUWXpoQnVLb1pWT1F3ZjI4JTJGSVNpc0JNQ0MxSDhMUzIwWmI1MEhtNkxFQ0tBMVJzeE9XNSUyRjg4b3hSY1RLQzNGcXRCSzU0WnlqOUtXR21YS2QzUk9obCUyQjVRSnQ1b0JIcXVzU2RpeCUyQiUyQk9JaWF2UkphNng2cHNKV09IUXV3aUV1VEpnMmdJR2o3MnV3VDNGdW10dERrTk1laHVOTCUyRkxjYU0wM3c1cWhpOG1EWkpUdnhialRybnRXNFJaNGJsV3B2MlZRU2loWXBjc3BhJTJGM21ZRDRXNW9iSGpwaUlBU2ZvcUVFOHRPZkIlMkJKayUyQnFIN0Z3T1h4cDlodGtZYVh3MmlCQU4zSiUyQlEzanUwcyUyRjRhTVBnTk9oa1M1QTlIOVZqam1zeVp6TDU0NFp4dlpGZXRLTWZEak9oZjlXYkFxYzNEZWlrVWZOSDgyYzBuJTJCdWpHRVpQZFM0anJKNkx6aUlseGdOaDRCRjBTMVRtQWx2b1JZVFQ4ZTJHZlZxbHFXUSUyRlRabEp0T2N6VTglMkJkR3ByQXVqdWpLM0x2Q3hKdDRRTUJKQk9mU0lhSVZjNU5vMGlrUDMlMkYxdWNlTXlRYXM0cG5QYjQ5UGs5d1V0aGpIYmRQWGNPN0xxaElrRU9sdWZpMUlscnByUGtUWHQyYmZhZGpva01KTWFWQzNJV2w0VTZMREEyRGtKZnhReElQOUZzbU1aZlJCaUd4bzM1d1pxMWZEU3doU2lWMTQ1V0VOQjFsMDJjR3RIWjI2OE5kQndMUm1zV2k4MzFOVE5hdDZXM0JyRURHZEt4VDhYbGxkdlIzRHUzSEJCTHglMkZHUU4wVmlEVHBIUVNWa0QlMkZQVyUyQkQ1QVZra1BkWUhpS2dNZzZNJTJCRExrV2hNTGs2RXNLRkhxMkRxb0RhaGdjY2JVcm5QQTJxN0E2ViUyRmFMMWlpbVFJWEswNTM5OFh5eUpMQWolMkY3aFYlMkZaM20lMkIyb3Z1YUpPR1RyVjF1R1JZUkc1dTMlMkJRRE1ieFBYbkglMkJudnNwJTJCdnBlY1NUQmlZUkM3djZJdWpFWEVIUjBVTnVFRExPeEd5aW5nNUJkWG9VWWN6VEI3VU9LdEQ3RE9tRm9ES3k2QTBoRW1VU3VMVFJhRUFFU1VpM1VZbnVpTmJaNEhrZkpzeFVsTWY5TjdaZHBEcnNzVmg1QVQzRER6RG1waDhScjhvNm9Cd0VPbTdtMnhDeHdzUUtVeHpPelNLTVdGWkFFcXlrVmd2ejFUUE0weTdhMUdnV3QxTjlZS2dZaEV3U2J4MHhvQ3ozeEYwekVmNVpEb3hDOHUyT3hUM01CaXgzU3NTeDN3WWhxdDZNdGN3aHRNbE1FVkpJTEs5VTVBQnRCeHg1TXZjNDJOemFqTDNUOVA4QkgzMkNuNGpDTSUyQkRHcjVzb0Y5WVdseFlmeFg3VUpaRiUyRk1aMDk0M0lOU01zQXcwZDVlS3p3ZnpabFklMkJ2eVNJTk5reFJqQ0hoeUYwTElEcjJnZjZKZlp6YlUwYXl0YVVtWjNiVnZlbmJXNkpaTTNXaEx4VGhrS0NyWlVVeTZSdVZ1MWVNUzFFMDclMkYwanFFMWFnd2pJVEZrZ3l2Q2VCWXBHRFRIRlY0Z2tYNjhhdERUJTJGdnJCbXltdUpNbVdXSmJiS1NnVHpNSTAlMkJ0VVlsclZkNk02c0wzMnBUZTNhZEs0Q045Nm00a0FQc0szZ3U0N3V0SW9KTXczdyUyQkNndWRkY0I4TWlvRkl6QWtCaDlhV2xtQXprcndrRzV6NmFqY1BpeHVaWFY3MjhDVFJUemhQRkhPMGklMkZ5RTE0RHYya1hOSENkbU5zaGYxbFU5YlZ2cFRQa1VzZUNjS2hBVXR4TnRnOU1mcUs1T3Rya1VUdVhIN2JHNlVHWTJ0V0U0bWlWcm1sMGpqWEwzUSUyQnZ1ZmZOZlN5V3k4R3VFeWcwV3JjdlJsWXJ2SHBwbGFZSVhrVFRSVzJpQ0FwNnRlTW1RZFlZMkNUR2lWVndIU1BuVGgwZXdnTGw5Nkozc21rciUyRnpkeUE0bGpYNDRaVXViWHl1dWU2bzNXdmNBOEE2Ujc0ZXElMkY3OEs0MmtqWmVJbnlWUHQ4bU5rJTJGUWFvYjVEZ1ZqcHE3JTJGcmhuWklDcWR0a21ydDZTazNoZWhYWlpkcEVWVWJjNzV4ciUyQng0dFlLRkZIVFBCY1NSUDJYMU44dGxtUDNtJTJGbHZuaWVkSDRCVnhyTjIxUW5Ydk9HOVFKYVZwTnFUVk9iV2pOSVlCS3NzVE1jYWNudnllVjZKZ1I3WlNWeWZoT3dtRGYlMkJKREVBZ2NLQVF6V1pkNURXNWdPd05PQVRQYlVUWWkzaWhVMENSVWl4SDhXWjJtcjdGdlllWnpRcmN6b0dWMTBoeldkelVlb2lvJTJGUWt4YndFMFFqMldHMFB2OUUlMkJ3Z0V6NVZjJTJGa0NnUDFTb2hNSXBReHlrTFZlRVhWUFoxSVZpaHllRlhkbWxWTndPZU4xak01OVVYb1c1NDhzYXZsU1dNMUl4blE0eEV3Q2doUWI3SFV5V2d0UEkwclhGTk5vaSUyRjdURHMwaG12SzFodTVKSGtXUEhzWEU4NkdTUGVpV1RvaWdvUnJwWmpIMUpVMjN1Y045eVhxemsyWE1CNFVrR2FkQWtLNFoyYU11UnV2Q1AxZHl2ZEVhMzM0aEM2Y2pOMTN4UGlVVzByWGdpNHRwcG8yN1hpeVlpRTkzQzFJSTZaSkplME5OUVFHZlEzQ1owOXBBdzhOa2ZYSlNMbTIwdVNmN29RZ3d5TVpwTHJ6UTdOJTJGd2ZnRUFRd2RUWUQ1NWZIcCUyQkozWiUyQjdyeElqNkxkc2dhTkozeWdlNjMwNHpZZ2JFNFJMTG9vUGhFVFVhUGZ6d0dBek1HV3V4SjAlMkJJSzB1QkVqejV6RTIzNDZlTzRlQTBHME9PbkpEb0ZwSFZHcmhHeFlnRlMzUHZkUTZTTE5jbGUlMkZwVzUlMkJ5a1lFQjMlMkIxOUdNTEZaTHlaN0JHdEJJM1RjMHJPJTJGTzAwczB5JTJGcUpYWDRlNE9XSzdxTU94alYzTzJ1JTJGUFNucHg5YWZqaHVqNDUxT0V0UHVUTXoySXozTXFOS1VLQUNYNUFYRUZXQXJFU1hDT1ZJdG1remxqc1JjREdwJTJGM3hMb0JWakFrQTRsODFXaXVpY1ZvOHdkTGNUblF3REsycTdRTmhidXVDV2xaaXM4NFNIRk84RjdBOEpOWGxlWjV0QjdjSG1oTFJqNVEyRkNtQ0c0VXdBOWR2dHV3R2RrN1cyOEtsRlZjZnF6NE5SMUlQdG1XeWR1TzdzMENDV0E3RVNkR3hIdDZDeHBwRTdDcGp0Y3BsRUFXSXI5TVBoSFpzM2puQXBUZUVwcjgyeiUyQjNNN0dEUnBhOURWJTJGQTVtVGNMZiUyQjglMkJSOUFHaW1ka2E1R1NiNjM5b3I5MCUyRmZVMkZLeGNPam9UVVlQU3NyRng5b0FaaHgxTGVhRU1JMkhrJTJGeEI3REI3amM1cDlJVTNwbWglMkZRSUVRR3oyQ0xldyUyQlZLVUNsUVNzSnNxTjRtajBFRFdrZmF6M2FaSllWSzRDblYyeHRtT3h1OFh1alh4VkpBdUpZN2R6MndJekg5Mmhyc2E5OWlYYXBMb3VmTFVZM0FDeEJhYzB4dG5XUHlsVnJpRWJ3aEJldW5TcmJTREJPc1Y4dFU3NWNKYnNoaVlGaEczSUZEa1lLMWNpVmVkN0tFY2hDMEVKSVFEZm1CdDRBdnclM0QlM0Qmc291cmNlX3R5cGU9MSZwYWNrX3RpbWU9MTYyNzYyNTIwMi4zNSZvcGVucnRiX2FkeF9pZD0xNzImcGM9ZkdDeGdrOHVqR3BHdllBSW0lMkJwTnpXYWZWJTJGamNHJTJGSUQyQWdTRndNa2M2TSUzRCZ0dGRzcF9wcmljZT0yLjU3NDIz&cc=JP&cm=1&crid=1706596744963074opg&dvt=PHONE&ext=Bck7yLZ_8RAPmRQB3oQJ6FAE_RukF0T6-xyY-G77GTVQhW_hRVZ-N1L_pwPy5j6PoAZcUV24XD3O5iwHUpBRDva1nzP3Fyq6K_p9kUyiYFc2kVWEmwrfwv7UKruUCVoAS5QLNSkJcMDO2ocg26xZtg%3D%3D&gi=09FA7353-6B07-40A2-AA04-764A85AA0F27&iabCat=IAB18-5&impr_dl=1627626402357&m=m5218405729664&ot=IOS&pubId=pub4007008646336&s=s4139511258944&se=000104f77af88d062d02&srid=610396f2272eb71212d0175b&u=2ee1eeac03b5b47d&ac=${AUCTION_CURRENCY}&ap=${AUCTION_PRICE}",
                    "lurl":"https://t-odx.op-mobile.opera.com/loss?a=a5218405729472&b=1531843592&burl=aHR0cHM6Ly9hcGkxNi1hY2Nlc3Mtc2cucGFuZ2xlLmlvL2FwaS9hZC91bmlvbi9zaG93X2V2ZW50Lz9yZXFfaWQ9MDAwMTA0Zjc3YWY4OGQwNjJkMDJ1NDM1OCZ0dGRzcF9hZHhfaW5kZXg9MTcyJmV4dHJhPTRBZmh0UVJwMjJER09CdkE1ekkwbFMlMkZjVCUyQnc5SkpnYXdPQWhJZ21kR1NIcTltaGcyV293bHhhVk1DbnBYOWFFbkN2WmxKJTJGNFhuWDlZM2Z0OUVFM2pDMUtlRmNvNSUyRjgyRWdxcW9VZ2puRXpnUWtJRndORm5HaEhvYmwwT1NrWFpEYmZUWXpoQnVLb1pWT1F3ZjI4JTJGSVNpc0JNQ0MxSDhMUzIwWmI1MEhtNkxFQ0tBMVJzeE9XNSUyRjg4b3hSY1RLQzNGcXRCSzU0WnlqOUtXR21YS2QzUk9obCUyQjVRSnQ1b0JIcXVzU2RpeCUyQiUyQk9JaWF2UkphNng2cHNKV09IUXV3aUV1VEpnMmdJR2o3MnV3VDNGdW10dERrTk1laHVOTCUyRkxjYU0wM3c1cWhpOG1EWkpUdnhialRybnRXNFJaNGJsV3B2MlZRU2loWXBjc3BhJTJGM21ZRDRXNW9iSGpwaUlBU2ZvcUVFOHRPZkIlMkJKayUyQnFIN0Z3T1h4cDlodGtZYVh3MmlCQU4zSiUyQlEzanUwcyUyRjRhTVBnTk9oa1M1QTlIOVZqam1zeVp6TDU0NFp4dlpGZXRLTWZEak9oZjlXYkFxYzNEZWlrVWZOSDgyYzBuJTJCdWpHRVpQZFM0anJKNkx6aUlseGdOaDRCRjBTMVRtQWx2b1JZVFQ4ZTJHZlZxbHFXUSUyRlRabEp0T2N6VTglMkJkR3ByQXVqdWpLM0x2Q3hKdDRRTUJKQk9mU0lhSVZjNU5vMGlrUDMlMkYxdWNlTXlRYXM0cG5QYjQ5UGs5d1V0aGpIYmRQWGNPN0xxaElrRU9sdWZpMUlscnByUGtUWHQyYmZhZGpva01KTWFWQzNJV2w0VTZMREEyRGtKZnhReElQOUZzbU1aZlJCaUd4bzM1d1pxMWZEU3doU2lWMTQ1V0VOQjFsMDJjR3RIWjI2OE5kQndMUm1zV2k4MzFOVE5hdDZXM0JyRURHZEt4VDhYbGxkdlIzRHUzSEJCTHglMkZHUU4wVmlEVHBIUVNWa0QlMkZQVyUyQkQ1QVZra1BkWUhpS2dNZzZNJTJCRExrV2hNTGs2RXNLRkhxMkRxb0RhaGdjY2JVcm5QQTJxN0E2ViUyRmFMMWlpbVFJWEswNTM5OFh5eUpMQWolMkY3aFYlMkZaM20lMkIyb3Z1YUpPR1RyVjF1R1JZUkc1dTMlMkJRRE1ieFBYbkglMkJudnNwJTJCdnBlY1NUQmlZUkM3djZJdWpFWEVIUjBVTnVFRExPeEd5aW5nNUJkWG9VWWN6VEI3VU9LdEQ3RE9tRm9ES3k2QTBoRW1VU3VMVFJhRUFFU1VpM1VZbnVpTmJaNEhrZkpzeFVsTWY5TjdaZHBEcnNzVmg1QVQzRER6RG1waDhScjhvNm9Cd0VPbTdtMnhDeHdzUUtVeHpPelNLTVdGWkFFcXlrVmd2ejFUUE0weTdhMUdnV3QxTjlZS2dZaEV3U2J4MHhvQ3ozeEYwekVmNVpEb3hDOHUyT3hUM01CaXgzU3NTeDN3WWhxdDZNdGN3aHRNbE1FVkpJTEs5VTVBQnRCeHg1TXZjNDJOemFqTDNUOVA4QkgzMkNuNGpDTSUyQkRHcjVzb0Y5WVdseFlmeFg3VUpaRiUyRk1aMDk0M0lOU01zQXcwZDVlS3p3ZnpabFklMkJ2eVNJTk5reFJqQ0hoeUYwTElEcjJnZjZKZlp6YlUwYXl0YVVtWjNiVnZlbmJXNkpaTTNXaEx4VGhrS0NyWlVVeTZSdVZ1MWVNUzFFMDclMkYwanFFMWFnd2pJVEZrZ3l2Q2VCWXBHRFRIRlY0Z2tYNjhhdERUJTJGdnJCbXltdUpNbVdXSmJiS1NnVHpNSTAlMkJ0VVlsclZkNk02c0wzMnBUZTNhZEs0Q045Nm00a0FQc0szZ3U0N3V0SW9KTXczdyUyQkNndWRkY0I4TWlvRkl6QWtCaDlhV2xtQXprcndrRzV6NmFqY1BpeHVaWFY3MjhDVFJUemhQRkhPMGklMkZ5RTE0RHYya1hOSENkbU5zaGYxbFU5YlZ2cFRQa1VzZUNjS2hBVXR4TnRnOU1mcUs1T3Rya1VUdVhIN2JHNlVHWTJ0V0U0bWlWcm1sMGpqWEwzUSUyQnZ1ZmZOZlN5V3k4R3VFeWcwV3JjdlJsWXJ2SHBwbGFZSVhrVFRSVzJpQ0FwNnRlTW1RZFlZMkNUR2lWVndIU1BuVGgwZXdnTGw5Nkozc21rciUyRnpkeUE0bGpYNDRaVXViWHl1dWU2bzNXdmNBOEE2Ujc0ZXElMkY3OEs0MmtqWmVJbnlWUHQ4bU5rJTJGUWFvYjVEZ1ZqcHE3JTJGcmhuWklDcWR0a21ydDZTazNoZWhYWlpkcEVWVWJjNzV4ciUyQng0dFlLRkZIVFBCY1NSUDJYMU44dGxtUDNtJTJGbHZuaWVkSDRCVnhyTjIxUW5Ydk9HOVFKYVZwTnFUVk9iV2pOSVlCS3NzVE1jYWNudnllVjZKZ1I3WlNWeWZoT3dtRGYlMkJKREVBZ2NLQVF6V1pkNURXNWdPd05PQVRQYlVUWWkzaWhVMENSVWl4SDhXWjJtcjdGdlllWnpRcmN6b0dWMTBoeldkelVlb2lvJTJGUWt4YndFMFFqMldHMFB2OUUlMkJ3Z0V6NVZjJTJGa0NnUDFTb2hNSXBReHlrTFZlRVhWUFoxSVZpaHllRlhkbWxWTndPZU4xak01OVVYb1c1NDhzYXZsU1dNMUl4blE0eEV3Q2doUWI3SFV5V2d0UEkwclhGTk5vaSUyRjdURHMwaG12SzFodTVKSGtXUEhzWEU4NkdTUGVpV1RvaWdvUnJwWmpIMUpVMjN1Y045eVhxemsyWE1CNFVrR2FkQWtLNFoyYU11UnV2Q1AxZHl2ZEVhMzM0aEM2Y2pOMTN4UGlVVzByWGdpNHRwcG8yN1hpeVlpRTkzQzFJSTZaSkplME5OUVFHZlEzQ1owOXBBdzhOa2ZYSlNMbTIwdVNmN29RZ3d5TVpwTHJ6UTdOJTJGd2ZnRUFRd2RUWUQ1NWZIcCUyQkozWiUyQjdyeElqNkxkc2dhTkozeWdlNjMwNHpZZ2JFNFJMTG9vUGhFVFVhUGZ6d0dBek1HV3V4SjAlMkJJSzB1QkVqejV6RTIzNDZlTzRlQTBHME9PbkpEb0ZwSFZHcmhHeFlnRlMzUHZkUTZTTE5jbGUlMkZwVzUlMkJ5a1lFQjMlMkIxOUdNTEZaTHlaN0JHdEJJM1RjMHJPJTJGTzAwczB5JTJGcUpYWDRlNE9XSzdxTU94alYzTzJ1JTJGUFNucHg5YWZqaHVqNDUxT0V0UHVUTXoySXozTXFOS1VLQUNYNUFYRUZXQXJFU1hDT1ZJdG1remxqc1JjREdwJTJGM3hMb0JWakFrQTRsODFXaXVpY1ZvOHdkTGNUblF3REsycTdRTmhidXVDV2xaaXM4NFNIRk84RjdBOEpOWGxlWjV0QjdjSG1oTFJqNVEyRkNtQ0c0VXdBOWR2dHV3R2RrN1cyOEtsRlZjZnF6NE5SMUlQdG1XeWR1TzdzMENDV0E3RVNkR3hIdDZDeHBwRTdDcGp0Y3BsRUFXSXI5TVBoSFpzM2puQXBUZUVwcjgyeiUyQjNNN0dEUnBhOURWJTJGQTVtVGNMZiUyQjglMkJSOUFHaW1ka2E1R1NiNjM5b3I5MCUyRmZVMkZLeGNPam9UVVlQU3NyRng5b0FaaHgxTGVhRU1JMkhrJTJGeEI3REI3amM1cDlJVTNwbWglMkZRSUVRR3oyQ0xldyUyQlZLVUNsUVNzSnNxTjRtajBFRFdrZmF6M2FaSllWSzRDblYyeHRtT3h1OFh1alh4VkpBdUpZN2R6MndJekg5Mmhyc2E5OWlYYXBMb3VmTFVZM0FDeEJhYzB4dG5XUHlsVnJpRWJ3aEJldW5TcmJTREJPc1Y4dFU3NWNKYnNoaVlGaEczSUZEa1lLMWNpVmVkN0tFY2hDMEVKSVFEZm1CdDRBdnclM0QlM0Qmc291cmNlX3R5cGU9MSZwYWNrX3RpbWU9MTYyNzYyNTIwMi4zNSZvcGVucnRiX2FkeF9pZD0xNzImcGM9ZkdDeGdrOHVqR3BHdllBSW0lMkJwTnpXYWZWJTJGamNHJTJGSUQyQWdTRndNa2M2TSUzRCZ0dGRzcF9wcmljZT0yLjU3NDIz&cc=JP&cm=1&crid=1706596744963074opg&dvt=PHONE&ext=Bck7yLZ_8RAPmRQB3oQJ6FAE_RukF0T6-xyY-G77GTVQhW_hRVZ-N1L_pwPy5j6PoAZcUV24XD3O5iwHUpBRDva1nzP3Fyq6K_p9kUyiYFc2kVWEmwrfwv7UKruUCVoAS5QLNSkJcMDO2ocg26xZtg%3D%3D&gi=09FA7353-6B07-40A2-AA04-764A85AA0F27&iabCat=IAB18-5&impr_dl=1627626402357&m=m5218405729664&ot=IOS&pubId=pub4007008646336&s=s4139511258944&se=000104f77af88d062d02&srid=610396f2272eb71212d0175b&u=2ee1eeac03b5b47d&al=${AUCTION_LOSS}",
                    "adm":"<VAST>...</VAST>",
                    "adomain":[
                        "www.opera.com"
                    ],
                    "crid":"1706596744963074",
                    "cat":[
                        "IAB18-5"
                    ],
                    "attr":[
                        4
                    ],
                    "h":1792,
                    "w":828,
                    "exp":1200,
                    "ext":{

                    }
                }
            ],
            "seat":"adv5213223628992"
        }
    ],
    "bidid":"000104f77af88d062d02",
    "cur":"USD"
}
```
