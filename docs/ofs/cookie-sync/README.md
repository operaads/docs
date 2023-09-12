# OperaAds Cookie mapping Integration Guide for Suppliers

## Cookie Mapping

Cookie Mapping is a feature that enables you to map your cookie—for example, an ID for a user that browsed your website—with a corresponding OperaAds User ID, and construct user lists that can help advertisers make more effective bidding choices. This guide describes concepts used in Cookie Mapping, as well as Cookie Mapping workflow.

## Concepts

### What is Cookie Mapping?

In the context of digital advertising, OperaAds identifies users with cookies that belong to the adx.opera.com domain, and suppliers participating in Real-Time Bidding may have their own domain where they identify some set of users they would like to show ads. Cookie Mapping enables the suppliers to map their cookies with OperaAds', such that OperaAds can determine whether an impression sent in a bid request is associated with one of users being targeted, OperaAds will receive a OperaAds User ID in the bid request ( `req.user.buyeruid` field).

The cookie mapping service described in this guide facilitates the creation and maintenance of the association between a supplier's cookie and the OperaAds User ID.

### Mapping Table

A mapping table can be used to map an ID or other data from one domain to another. Suppliers should maintain the mapping table between supplier uid and OperaAds uid. Once a mapping has been established, in OperaAds' OpenRTB implementation, BidRequest.user.buyeruid should be set to OperaAds user id.

## Getting Started

OperaAds Cookie Mapping URL is like `https://t.adx.opera.com/pub/sync?pubid=${publisher_id}`. Suppliers should contact OperaAds account manager to get the publisher id，and provide their cookie mapping url, which contains ${OPERA_UID} macro. Suppose publisher_id is *pub123*, supplier cookie mapping url is https://publisher.adnetwork.com/pixel?uid=${OPERA_UID}, in this case OperaAds Cookie Mapping URL is `https://t.adx.opera.com/pub/sync?pubid=pub123`.

### Macros supported
|Macros              |Description|
|--------------------|-----------|
|${GDPR}             |Flag that indicates whether or not the request is subject to GDPR regulations. 0 = No, 1 = Yes, omission indicates Unknown|
|${GDPR_CONSENT}     |GDPR consent string, which should follow TCFv2 standard|
|${US_PRIVACY}       |Communicates signals regarding consumer privady under US privacy regulation.|
|${COPPA}            |California Consumer Privacy Act|
|${OPERA_UID}        |Opera User ID|
|${OPERA_UID_ENCODED}|Opera User ID encoded with base64|

## Cookie Mapping Service Workflow

### Step 1: Place OperaAds map tag directed to OperaAds Cookie Mapping URL

In order to initiate this flow, a supplier must place OperaAds map tag such that it renders in the user's browser. The map tag will direct the user's browser to OperaAds Cookie Mapping URL. Loot at OperaAds map tag below:

```html
<img src="https://t.adx.opera.com/pub/sync?pubid=pub123&gdpr=${GDPR}&consent=${GDPR_CONSENT}&us_privacy=${US_PRIVACY}" />
```

Suppliers should expand user privacy macro in the map tag. For example, expand ${GDPR} with 0 or 1, expand ${GDPR_CONSENT} with [gdpr consent string](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/TCF-Implementation-Guidelines.md), expand ${US_PRIVACY} with [us privacy string](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md).

When loading in the user's browser, it will request a pixel from the OperaAds Cookie Mapping URL. This request will contain cookie in the HTTP header, which should be extracted for the next step.

### Step 2: Redirect to supplier' Cookie Mapping URL

OperaAds' Cookie Mapping service will query publisher’ Cookie Mapping URL from backend according to paramter `pubid`, and redirects to that url after replacing macro ${OPERA_UID} with real opera uid ( if the macro does not exist, query parameter `operaUid` will be added into the redirect url). The redirect URL might look like the following:

```url
https://publisher.adnetwork.com/pixel?uid=4e93fa9e-86e3-11eb-8dcd-0242ac130003
```
Or if the macro ${OPERA_UID} does not exist, the redirect URL might look like the following:

```url
https://publisher.adnetwork.com/pixel?operaUid=4e93fa9e-86e3-11eb-8dcd-0242ac130003
```

### Step 3: User's browser is redirected to supplier' Cookie Mapping service

Supplier will receive a redirect containing opera uid, in addition to its own cookie in the HTTP headers.

### Step 4: Supplier serves pixel on the end

If the cookie mapping operation is done, supplier should serve a 1x1 transparent pixel by default, and the workflow will end here. Bid requests for this user should set BidRequest.user.buyeruid with opera uid for OperaAds' OpenRTB implementation.
