# 快速开始

## 步骤

1. 创建一个应用/网站

2. 创建一个视频广告位

3. 生成VAST TAG

## 请求参数

| 参数         | 是否必填     | 类型        |描述
|-------------------|:-------------:|:-----------:|------------------------------------------
| uid               |        是      | 字符串      | 用户唯一ID
| plc               |        是      | 字符串      | 广告位ID
| ts                |        否      | 整数         | 请求的Unix时间戳
| bundleid          |        否      | 字符串      | 应用Bundle ID. 例如, com.opera.browser
| appversion        |        否      | 字符串      | 应用版本
| appname           |        否      | 字符串      | 应用名字
| site              |        否      | 字符串      | 网站域名
| url               |        否      | 字符串      | 网页的URL
| ref               |        否      | 字符串      | 网页的REFER
| pagetitle         |        否      | 字符串      | 网页的标题
| vpw               |        否      | 整数         | 网页的可视区域宽度
| vph               |        否      | 整数         | 网页的可视区域高度
| dt                |        否      | 字符串枚举型 | 设备类型，可选值:<br> `UNKNOWN` <br>  `PHONE` <br> `TABLET` <br> `DESKTOP` <br> `CONNECTED_DEVICE` <br> `STB`
| os                |        否      | 字符串枚举型 | 操作系统，可选值:<br> `ANDROID` <br> `IOS` <br> `WEBOS`
| osv               |        否      | 字符串      | 操作系统版本. 例如, 5.0
| ua                |        否      | 字符串      | 用户代理
| make              |        否      | 字符串      | 设备制造商. 例如, Samsung
| model             |        否      | 字符串      | 设备型号. 例如, SM-G965U
| dw                |        否      | 整数         | 设备屏幕宽度. 例如, 1080
| dh                |        否      | 整数         | 设备屏幕高度. 例如, 1920
| adid              |        否      | 字符串      | 广告投放跟踪ID 例如, Apple IDFA或者 Google AdId
| ip                |        否      | 字符串      | 用户的ip地址
| mccmnc            |        否      | 字符串      | 移动运营商 MCC+MNC码, 例如 : 62120, see https://en.wikipedia.org/wiki/Mobile_country_code
| network           |        否      | 字符串枚举型 | 网络类型, 可选值:<br> `UNKNOWN` <br> `WIFI` <br> `CELLULAR_2G` <br> `CELLULAR_3G` <br> `CELLULAR_4G` <br> `CELLULAR_5G`
| lon               |        否      | 浮点型      | 用户当前位置的经度
| lat               |        否      | 浮点型      | 用户当前位置的纬度
| consent           |        否      | 字符串      | 用户是否同意使用和处理其个人数据. 空按不同意处理. 可选值为`true` 或者 `false` 或者 `unknown` 或者 符合IAB标准的GDPR user consent string, 详见 [GDPR-Transparency-and-Consent-Framework](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Consent%20string%20and%20vendor%20list%20formats%20v1.1%20Final.md#purposes-features).

## Tag Url 实例

```url
https://s.adx.opera.com/tag/video?uid=fad3d048-981d-4f13-9b96-4136b17e187a&plc=s5340077725248&ts=1621654401&site=opera.com&url=https%3A%2F%2Fwww.opera.com%2Fnews%2Fp1&ref=https%3A%2F%2Fwww.opera.com&dt=PHONE&os=ANDROID&osv=9.1&ua=Opera%20News%2F7.4.2254.148299%2F52.0.2743.10%20%28Android%209%29&dw=1920&dh=1080
```

## 响应实例

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
