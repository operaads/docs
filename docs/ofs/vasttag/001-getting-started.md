# Quick Start

## Create a app/site

## Create an video ad placement

## Generate VAST Tag

## Request Parameters

| Parameter         | Mandatory     | Type        |Desc
|-------------------|:-------------:|:-----------:|------------------------------------------
| uid               |        Y      | string      | User unique id
| plc               |        Y      | string      | Placement key for media
| ts                |        N      | int         | Unix timestamp in seconds of this request
| bundleid          |        N      | string      | App Bundle ID. For example, com.opera.browser
| appversion        |        N      | string      | App version
| appname           |        N      | string      | App name
| site              |        N      | string      | The domain where advertisement will be displayed
| url               |        N      | string      | The full page URL where advertisement will be displayed
| ref               |        N      | string      | The referer of the page where advertisement will be displayed
| pagetitle         |        N      | string      | The page title where advertisement will be displayed
| vpw               |        N      | int         | The viewport width of the page where advertisement will be displayed
| vph               |        N      | int         | The viewport height of the page where advertisement will be displayed
| dt                |        N      | enum string | Device type. Optional values:<br> `UNKNOWN` <br>  `PHONE` <br> `TABLET` <br> `DESKTOP` <br> `CONNECTED_DEVICE` <br> `STB`
| os                |        N      | enum string | Optional values:<br> `ANDROID` <br> `IOS` <br> `WEBOS`
| osv               |        N      | string      | OS version. For example, 5.0
| ua                |        N      | string      | Client user agent
| make              |        N      | string      | Device vendor. For example, Samsung
| model             |        N      | string      | Device model. For example, SM-G965U
| dw                |        N      | int         | Device screen width. For example, 1080
| dh                |        N      | int         | Device screen height. For example, 1920
| adid              |        N      | string      | Advertising ID - Unhashed Apple IDFA or Google AdId
| ip                |        N      | string      | User's ip address
| mccmnc            |        N      | string      | Mobile operator MCC+MNC Code, like : 62120, see https://en.wikipedia.org/wiki/Mobile_country_code
| network           |        N      | enum string | Optional values:<br> `UNKNOWN` <br> `WIFI` <br> `CELLULAR_2G` <br> `CELLULAR_3G` <br> `CELLULAR_4G` <br> `CELLULAR_5G`
| lon               |        N      | double      | Longitude of user's current position
| lat               |        N      | double      | Latitude of user's current position
| consent           |        N      | string      | Flag to signify that the end user has given consent to use and process their data. Omission indicates no consent. `true` or `false` or `unknown` or a GDPR user consent string defined by IAB, see [GDPR-Transparency-and-Consent-Framework](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Consent%20string%20and%20vendor%20list%20formats%20v1.1%20Final.md#purposes-features).

## Tag Url Example

```url
https://s.adx.opera.com/tag/video?uid=fad3d048-981d-4f13-9b96-4136b17e187a&plc=s5340077725248&ts=1621654401&site=opera.com&url=https%3A%2F%2Fwww.opera.com%2Fnews%2Fp1&ref=https%3A%2F%2Fwww.opera.com&dt=PHONE&os=ANDROID&osv=9.1&ua=Opera%20News%2F7.4.2254.148299%2F52.0.2743.10%20%28Android%209%29&dw=1920&dh=1080
```

## Response Example

```xml
<VAST version="3.0">
    <Ad id="20009">
        <InLine>
            <AdSystem version="4.0">
                <![CDATA[iabtechlab]]>
            </AdSystem>
            <AdTitle>
                <![CDATA[iabtechlab video ad]]>
            </AdTitle>
            <Impression id="Impression-ID">
                <![CDATA[http://example.com/track/impression]]>
            </Impression>
            <Impression>
                <![CDATA[https://t-odx.op-mobile.opera.com/impr?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369]]>
            </Impression>
            <Impression>
                <![CDATA[https://adrta.com/i?clid=opr&paid=opr&dvid=v&avid=adv4201273455424&caid=o4201273455680&plid=m5212557365056&siteId=app5340073473792&publisherId=pub3054952966336&kv1=250x300&kv2=&kv4=103.196.20.138&kv3=24a5b3a074e7f369&kv10=&kv12=s5340077725248&kv25=Test_Media_For_Prebid&kv15=HK&kv16=0.00000000&kv17=0.00000000&kv18=&kv19=abc&kv28=&kv26=unknown&kv23=&kv27=PostmanRuntime%2F7.26.1&kv11=001004e1c7598c347fc0&lineItemId=a5212557364800&kv29=[ERRORCODE]&kv30=[CONTENTPLAYHEAD]_[ADPLAYHEAD]&kv33=[ASSETURI]&kv34=[VASTVERSIONS]&kv35=[IFATYPE]&kv36=[IFA]&kv37=[CLIENTUA]&kv38=[SERVERUA]&kv39=[DEVICEUA]&kv40=[DEVICEIP]&kv41=[LATLONG]&kv42=[DOMAIN]&kv43=[PAGEURL]&kv44=&kv45=[PLAYERSIZE]&kv46=[REGULATIONS]&kv47=[ADTYPE]&kv48=[TRANSACTIONID]&kv49=[BREAKPOSITION]&kv50=[APPNAME]&kv51=[PLACEMENTTYPE]&kv54=[LAT]&kv5=SSP&kv24=Mobile_Web_Video]]>
            </Impression>
            <Creatives>
                <Creative id="crid:a5212557364800:0.46047276opg" sequence="1">
                    <Linear skipoffset="00:00:05">
                        <Duration>00:00:16</Duration>
                        <TrackingEvents>
                            <Tracking event="start">
                                <![CDATA[http://example.com/tracking/start]]>
                            </Tracking>
                            <Tracking event="firstQuartile">
                                <![CDATA[http://example.com/tracking/firstQuartile]]>
                            </Tracking>
                            <Tracking event="midpoint">
                                <![CDATA[http://example.com/tracking/midpoint]]>
                            </Tracking>
                            <Tracking event="thirdQuartile">
                                <![CDATA[http://example.com/tracking/thirdQuartile]]>
                            </Tracking>
                            <Tracking event="complete">
                                <![CDATA[http://example.com/tracking/complete]]>
                            </Tracking>
                            <Tracking event="progress" offset="00:00:10">
                                <![CDATA[http://example.com/tracking/progress-10]]>
                            </Tracking>
                            <Tracking event="creativeView">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=creativeview]]>
                            </Tracking>
                            <Tracking event="start">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=start]]>
                            </Tracking>
                            <Tracking event="firstQuartile">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=firstquartile]]>
                            </Tracking>
                            <Tracking event="midpoint">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=midpoint]]>
                            </Tracking>
                            <Tracking event="thirdQuartile">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=thirdquartile]]>
                            </Tracking>
                            <Tracking event="complete">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=complete]]>
                            </Tracking>
                            <Tracking event="mute">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=mute]]>
                            </Tracking>
                            <Tracking event="unmute">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=unmute]]>
                            </Tracking>
                            <Tracking event="pause">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=pause]]>
                            </Tracking>
                            <Tracking event="resume">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=resume]]>
                            </Tracking>
                            <Tracking event="rewind">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=rewind]]>
                            </Tracking>
                            <Tracking event="fullscreen">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=fullscreen&isfullscreen=1]]>
                            </Tracking>
                            <Tracking event="exitFullscreen">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=fullscreen&isfullscreen=0]]>
                            </Tracking>
                            <Tracking event="acceptInvitationLinear">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=acceptinvitationlinear]]>
                            </Tracking>
                            <Tracking event="closeLinear">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=closelinear]]>
                            </Tracking>
                            <Tracking event="skip">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=skip]]>
                            </Tracking>
                            <Tracking event="progress" offset="00:00:02">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=progress&offset=2s]]>
                            </Tracking>
                            <Tracking event="progress" offset="00:00:15">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=progress&offset=15s]]>
                            </Tracking>
                            <Tracking event="progress" offset="97%">
                                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=progress&offset=97p]]>
                            </Tracking>
                        </TrackingEvents>
                        <VideoClicks>
                            <ClickThrough id="blog">
                                <![CDATA[
                                https://iabtechlab.com
                            ]]>
                            </ClickThrough>
                            <ClickTracking>
                                <![CDATA[
                                http://example.com/trackingurl/clickTracking
                            ]]>
                            </ClickTracking>
                            <ClickTracking>
                                <![CDATA[https://t-odx.op-mobile.opera.com/click?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369]]>
                            </ClickTracking>
                            <CustomClick>
                                <![CDATA[https://t-odx.op-mobile.opera.com/click?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369]]>
                            </CustomClick>
                        </VideoClicks>
                        <MediaFiles>
                            <MediaFile id="5241" delivery="progressive" type="video/mp4" codec="0" bitrate="500" minBitrate="360" maxBitrate="1080" width="400" height="300" scalable="true" maintainAspectRatio="true">
                                <![CDATA[
                                https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4
                            ]]>
                            </MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
            <Description></Description>
            <Survey></Survey>
            <Error>
                <![CDATA[http://example.com/error]]>
            </Error>
            <Error>
                <![CDATA[https://t-odx.op-mobile.opera.com/video?a=a5212557364800&cc=HK&cm=1&crid=0.46047276opg&dvt=UNKNOWN&ext=BxyGDBaQ5hSZVJNoDBckb-yKj_vng7yZhrJLXVf_f8smzd0CDo1eilG_1m1MoqUlYXBGb2fJp2WcjzQhv93oaKQ9ZcIFpgrxxDm07WzHDJLGVE_MHx45sb25z5cU76dK&gi=abc&iabCat=IAB9-31%2CIAB8&impr_dl=1626169829493&m=m5212557365056&ot=UNKNOWN&pubId=pub3054952966336&s=s5340077725248&se=001004e1c7598c347fc0&u=24a5b3a074e7f369&evt=error]]>
            </Error>
            <Pricing model="cpm" currency="USD">
                <![CDATA[
                 25.00
            ]]>
            </Pricing>
            <Extensions>
                <Extension type="iab-Count">
                    <total_available>
                        <![CDATA[ 2 ]]>

                    </total_available>
                </Extension>
                <Extension type="Tracking">
                    <CustomTracking>
                        <Tracking event="skip" offset="00:00:05">
                            <![CDATA[https://t-odx.op-mobile.opera.com/video]]>
                        </Tracking>
                    </CustomTracking>
                </Extension>
            </Extensions>
        </InLine>
    </Ad>
</VAST>
```
