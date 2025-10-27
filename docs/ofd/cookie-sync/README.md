# OperaAds Cookie mapping Integration Guide

## Cookie Mapping

Cookie Mapping is a feature that enables you to map your cookie—for example, an ID for a user that browsed your ads—with a corresponding OperaAds User ID, and construct user lists that can help you make more effective bidding choices. This guide describes concepts used in Cookie Mapping, as well as Cookie Mapping workflow.

## Concepts

### What is Cookie Mapping?

Bidders typically set the contents of cookies for users that browse their ads, which are used to identify users within that bidder. Even if two bidders would otherwise agree to exchanging this data, the security model of internet browsers restricts one from reading a cookie set by another domain.

In the context of digital advertising, OperaAds identifies users with cookies that belong to the adx.opera.com domain, and bidders participating in Real-Time Bidding may have their own domain where they identify some set of users they would like to show ads. Cookie Mapping enables the bidder to map their cookies with OperaAds', such that they can determine whether an impression sent in a bid request is associated with one of users being targeted, they will receive a bidder-specific User ID in the bid request.

The cookie mapping service described in this guide facilitates the creation and maintenance of the association between a bidder's cookie and the OperaAds User ID.

### Mapping Table

A mapping table can be used to map an ID or other data from one domain to another. OperaAds uses the Cookie Mapping Service to map the user's OperaAds User ID to bidder's cookie data, normally bidder-specific user id. Once a mapping has been established, in OperaAds' OpenRTB implementation, BidRequest.user.buyeruid will be set to bidder-specific user id.

## Getting Started

In order to get started with Cookie Mapping, you must contact your Account Manager, who can enable specific workflows and help you configure the cookie mapping url, like `https://t.adx.opera.com/sync?vendor=${BIDDER_ID}&uid=${DSP_USER_ID}`. ${BIDDER_ID} is allocated by OperaAds, and ${DSP_USER_ID} should be replaced with the bidder-specific user id. For example, `https://t.adx.opera.com/sync?vendor=600001&uid=4e93fa9e-86e3-11eb-8dcd-0242ac130003`.

## Cookie Mapping Service Workflow

### Step 1: Place the map tag directed to bidder's Cookie Mapping URL

In order to initiate this flow, a bidder must place a map tag such that it renders in the user's browser when BidRequest.user.buyeruid sent by OperaAds is empty. The map tag must direct the user's browser to your Cookie Mapping URL. For example, with a Cookie Mapping URL configured as `https://bidder.adnetwork.com/pixel`, it would look like:

```html
<img src="https://bidder.adnetwork.com/pixel" />
```

A bidder can also put user privacy macros in the Cookie Mapping URL, such as:`https://bidder.adnetwork.com/pixel?gdpr=${GDPR}&consent=${GDPR_CONSENT}&us_privacy=${US_PRIVACY}&gpp=${GPP_STRING}&gpp_sid=${GPP_SID}`

#### Macros supported
|Macros              |Type      |Description|
|--------------------|----------|-----------|
|${GDPR}             |integer   |Flag that indicates whether or not the request is subject to GDPR regulations. 0 = No, 1 = Yes, omission indicates Unknown|
|${GDPR_CONSENT}     |string    |GDPR consent string, which should follow TCFv2 standard|
|${US_PRIVACY}       |string    |Communicates signals regarding consumer privady under US privacy regulation.|
|${GPP_STRING}       |string    |Global privacy platform string|
|${GPP_SID}          |string    |GPP section id|

When loading in the user's browser, it will request a pixel from the bidder's Cookie Mapping URL. This request will contain their cookie in the HTTP header, which should be extracted for the next step.

### Step 2: Redirect to OperaAds’ Cookie Mapping service

The bidder's cookie mapping endpoint must redirect to OperaAds' Cookie Mapping service, including bidder-specific user id appended. The redirect URL might look like the following:

```url
https://t.adx.opera.com/sync?vendor=600001&uid=4e93fa9e-86e3-11eb-8dcd-0242ac130003
```

### Step 3: User's browser is redirected to OperaAds' Cookie Mapping service

OperaAds will receive a redirect containing the parameters you specified, in addition to OperaAds' cookie in the HTTP headers.

### Step 4: OperaAds serves pixel on the end

If the cookie mapping operation is done, OperaAds will serve a 1x1 transparent pixel by default, and the workflow will end here. Bid requests for this user will include bidder-specific user id as BidRequest.user.buyeruid for OperaAds' OpenRTB implementation.

## Record Mapping Relationship

A bidder is allowed to redirect to another cookie mapping service of OperaAds for the sake of recording the mapping relationship from bidder-specific user ID to OperaAds user ID. The typical formation of URL is shown below:

```url
https://t.adx.opera.com/sync/adv?cuid=4e93fa9e-86e3-11eb-8dcd-0242ac130003&advid=adv123456789
```

The cuid(Client User ID) and advid(advertiser ID) within query are indispensable, otherwise the call would get a http status code of 400 returned. With the mapping relationship being successfully recorded, the service would return a 1x1 transparent pixel and a HTTP status code of 200.
