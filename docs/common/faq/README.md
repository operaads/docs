# Frequently asked questions

#### Where are your data centers located?

We have 3 IDC：
- EU (Amsterdam)， majorly serve traffic from EMEA countries
- Asia (Singapore), majorly serve traffic from APAC countries
- US (Ashburn), majorly serve traffic from NA/LATAM countries

#### What's the timezone your report is using?
We use UTC+0

#### The impression expiry window you set?

Usually ranged from 20 ~ 60 minutes. This can be override by imp.exp in bid requests.

#### What are your timeout requirements?

Usually ~ 300ms.

#### How do you count impressions?

We support both ADM and BURL.


#### Do you pass us the net bid CPM or gross bid CPM in the ad response ?

We pass us net bid CPM price in ad response.


#### Do you use http protocol or https protocol in your impression tracking URL?

Only https protocol is supported on our side


#### Will you be able to provide us with gaid\idfa in every ad request?

Yes for in-app traffic, gaid/idfa is carried in ad requests.

#### Do you use the 1st price or 2nd price to calculate the revenue?

We use 1st price by default.

#### Which version of video VAST do you support?

- VAST 2.0
- VAST 2.0 Wrapper
- VAST 3.0
- VAST 3.0 Wrapper

#### Which version of MRAID you are support?

- MRAID 1.0
- MRAID 2.0

#### Do you require either SChain or PChain support?

Yes, SChain is required


#### How to indicate reward / interstitial bid requests?

- For reqwarded video request

  imp.video.ext.rewarded = 1

- For interstitial

  impr.instl = 1


#### Do you support gzip compression on bid requests?
Yes






