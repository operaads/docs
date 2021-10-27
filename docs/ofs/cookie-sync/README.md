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

OperaAds Cookie Mapping URL is like `https://t.adx.opera.com/pub/sync?r=${publisher_encoded_cookie_mapping_url}`. Supplier should replace ${publisher_encoded_cookie_mapping_url} with its encoded cookie mapping url, for example, "https://publisher.adnetwork.com/pixel?uid=${OPERA_UID}" encoded as "https%3A%2F%2Fpublisher.adnetwork.com%2Fpixel%3Fuid%3D%24%7BOPERA_UID%7D", and in this case OperaAds Cookie Mapping URL is `https://t.adx.opera.com/pub/sync?r=https%3A%2F%2Fpublisher.adnetwork.com%2Fpixel%3Fuid%3D%24%7BOPERA_UID%7D`

## Cookie Mapping Service Workflow

### Step 1: Place OperaAds map tag directed to OperaAds Cookie Mapping URL

In order to initiate this flow, a supplier must place OperaAds map tag such that it renders in the user's browser. The map tag will direct the user's browser to OperaAds Cookie Mapping URL. Loot at OperaAds map tag below:

```html
<img src="https://t.adx.opera.com/pub/sync?r=https%3A%2F%2Fpublisher.adnetwork.com%2Fpixel%3Fuid%3D%24%7BOPERA_UID%7D" />
```

When loading in the user's browser, it will request a pixel from the OperaAds Cookie Mapping URL. This request will contain cookie in the HTTP header, which should be extracted for the next step.

### Step 2: Redirect to supplier' Cookie Mapping URL

OperaAds' Cookie Mapping service will get publisher’ Cookie Mapping URL from query paramter `r`, and redirects to that url after replacing macro ${OPERA_UID} with real opera uid ( if the macro does not exist, query parameter `operaUid` will be added into the redirect url). The redirect URL might look like the following:

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

If the cookie mapping operation is done, supplier should serve a 1x1 transparent pixel by default, and the workflow will end here. Bid requests for this user will include bidder-specific user id as BidRequest.user.buyeruid for OperaAds' OpenRTB implementation.
