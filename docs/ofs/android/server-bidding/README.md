---
title: Server Bidding
---

# **Server Bidding (S2S) Integration**

Server Bidding provides APIs for server-side auction scenarios. You can use these APIs to:
- Build your own mediation server with server-side bidding
- Integrate with third-party mediation solutions
- Implement any custom server-side auction logic

## **Getting Bid Tokens**

Use `OperaAds.getBidToken()` to collect bidding signals that can be sent to your auction server.

The `BidTokenCallback` will be called on the main thread asynchronously. If placement ID, ad format, or ad size are known when you call `getBidToken()`, please specify them using the builder's methods. For banner ads, make sure to set the proper `AdSize`.

```java
// Please ensure that Opera ads sdk has been initialized.
// Bid banner ads.
final BidTokenRequest bidTokenRequest =
        new BidTokenRequest.Builder(AdMediation.[YOUR-ID])
                .placementId("s123456789")
                .adFormat(AdFormat.BANNER)
                .adSize(AdSize.BANNER_MREC) // use correct AdSize
                .build();
// Or for native ads.
// bidTokenRequest = new BidTokenRequest.Builder(AdMediation.[YOUR-ID])
//            .placementId("s123456789")
//            .adFormat(AdFormat.NATIVE)
//            .build();

OperaAds.getBidToken(bidTokenRequest, new BidTokenCallback() {
    @Override
    public void onSuccess(@NotNull String bidToken) {
        // Bidding token is ready.
    }

    @Override
    public void onError(@NotNull AdError error) {
        // Report error.
    }
});
```

## **Loading Server Bidding Ads**

After your server completes the auction and Opera wins, use the `loadRtbAd()` or `loadRtb()` APIs with the bid response to load the ad:

```java
// Native Ads
NativeAdLoader.loadRtbAd(context, "PLACEMENT_ID", bidResponse, listener);

// Banner Ads
bannerAdView.loadRtbAd(bidResponse, listener);

// Interstitial Ads
InterstitialAd.loadRtb(context, "PLACEMENT_ID", bidResponse, listener);

// Rewarded Ads
RewardedAd.loadRtb(context, "PLACEMENT_ID", bidResponse, listener);

// Rewarded Interstitial Ads
RewardedInterstitialAd.loadRtb(context, "PLACEMENT_ID", bidResponse, listener);

// App Open Ads
AppOpenAd.loadRtb(context, "PLACEMENT_ID", bidResponse, listener);
```
