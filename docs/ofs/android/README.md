# Opera Ad SDK integration document

## I. Initialize SDK

Before loading ads, you should initialize the Opera Ad SDK by calling following API.
This needs to be done only once, ideally at app launch.

```java
// ChannelID: A meaningful string used to indicate the host app, such 'adx_sdk_for_hostname_beta'.
// UserId: The unique id used by the host app to identify the user.
// GoogleAdvertisingId: The advertising ID is a unique, provided by Google Play services.
// SecretKey: To request ads verification parameter, please obtain from the Opera Ads team.
// UseDebugServer: Used to connect to the Adx test server. Please also remember to change the secretKey to debug value when it is set to true.
OperaAdSdk.getInstance().initialize(ApplicationContext, ChannelID, UserId, GoogleAdvertisingId, SecretKey, UseDebugServer);

// If your APP also needs to comply with the GDPR policy, please enable this flag dynamically. This API can be called multiple times. If set to false, SDK
// request ads will not upload user sensitive information such as android id, google advertising id. In this way, it may not be possible to get the ads
// because of missing request parameters.
// @param enabled default is false.
OperaAdSdk.setPersonalizedAdsEnabled(boolean enabled);
```

## II. Native Ad

1. Native ad are loaded via the NativeAd class, remember to add AdListener to the NativeAd after building it. The following code demonstrates how to load native ad:

    ```java
    NativeAd nativeAd = new NativeAd(Context, PlacementId);
    // Used for targeting delivery
    nativeAd.setCountry(countryCode);  // see [wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    nativeAd.setCoordinate(latitude, longitude);
    nativeAd.setAdListener(new AdListener() {
        @Override
        public void onAdLoaded(Ad ad) {}
        @Override
        public void onError(Ad ad, AdError error) {}
        @Override
        public void onAdClicked(Ad ad) {}
        @Override
        public void onAdShown(Ad ad) {}
    });
    nativeAd.loadAd();
    ```

2. NativeAd class provide the following ad information:
    IconUrl, Title, Description, ctaButtonText, ctaButtonVisible(boolean) You should create a custom layout and bind ad data with above infos.

3. The SDK will log the impression and handle the click automatically. Please note that you must register the ad's view with the NativeAd instance to enable that.

    To make all ad elements of the view clickable register it using:

    ```java
    NativeAd.registerInteractionContainer(rootView);
    NativeAd.registerInteractionViews(icon, title, description...);
    NativeAd.registerCallToActionButton(ctaButton);
    ```

4. MediaView: Used for display ad content, include image and video type, etc. It should be defined in your custom layout as following:

    ```xml
    <com.opera.ad.MediaView
      android:id="@+id/native_ad_media"
      android:layout_width="wrap_content"
      android:layout_height="194dp"
      android:gravity="center"/>
    ```

    Also `must` always remember to call API `NativeAd.setMediaView(MediaView)` after find the MediaView from custom layout.
    If you don’t use MediaView and use ImageView instead, you also need to set it to `null`, like this: `NativeAd.setMediaView(null)`.

5. Download, WebPage or Market type ad: The SDK maybe returns Download, WebPage or Market type ad. So integrate the SDK you can choose to handle the download apk and prompt to install or jump to the ad landing page or open store. Need to set delegate with following API:

    ```java
    NativeAd.setAdClickDelegate(new AdClickDelegate() {
        @Override
        public boolean openUrl(@NonNull String url) {
            return false;
        }

        @Override
        public boolean downloadApk(@NonNull String url, @NonNull String defaultName) {
            return false;
        }

        @Override
        public boolean openStore(@NonNull String url) {
            return false;
        }
    });
    ```

    @return True if the host app has consumed the click event, false otherwise.

6. The SDK supports the WebView custom user agent to distinguish statistical sources, calling the following API:

    ```java
    NativeAd.setUserAgentDelegate(new UserAgentDelegate() {
        @Override
        public String makeUserAgent(@NonNull String defaultUserAgent) {
            return null;
        }
    });
    ```

7. At last, `NativeAd.unregister()` or `NativeAd.destroy()` should be called in your `unregister()` or `destroy()` method.

## III. Interstitial Ad

Interstitial Ads are full screen ads that display over an application’s content. These ads often result in higher eCPM for publishers.
The best time to use Interstitial Ads is during a natural break in the application flow, such as after reading an article in the news.
Within interstitial ad, we have supported video, html and special image only(`Native Interstitial`) formats.

### Native Interstitial

Native Interstitial ads only provides image url and the specific behavior of caching image needs to be implemented by the host app.
Normally, the Interstitial image have been pre-cached when we have the opportunity to display interstitial ads.
Similarly, the layout and display interface(fragment/activity) are also implemented by the host app.

1. Load Native Interstitial

    Same as above part II Native Ad. Then use `NativeAd.getImageUrl()` to get the image url and pre-cache it.

2. Register interaction view

    Register interaction views with method `NativeAd.registerInteraction*(views)`. And these views are used to record impression and click events.

3. MediaView

    Even the Native Interstitial ad can be displayed with ImageView. But also please remember to set MediaView to `null` with `NativeAd.setMediaView(null)`.

4. Click handler

    Please refer to Native Ad step 5, you can selectively handle clicks or use the default processing ways in the SDK.

### Interstitial

InterstitialAd is rendered internally by the sdk. The host app only needs to load the ad in advance and show it at the appropriate time.

1. Prepare an instance of InterstitialAd and set up common parameters as Native Ad.

    ```java
    InterstitialAd interstitialAd = new InterstitialAd(Context, PlacementId);
    // Used for targeting delivery
    interstitialAd.setCountry(countryCode);  // see [wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    interstitialAd.setCoordinate(latitude, longitude);
    ```

2. InterstitialAd use `AdLoadListener` to observer loading event.

    ```java
    interstitialAd.setAdLoadListener(new AdLoadListener() {
        @Override
        public void onAdLoaded() {
            Log.d(TAG, "Interstitial ad loaded!")
        }

        @Override
        public void onAdLoadFailed(@NonNull AdError error) {
            Log.d(TAG, "Interstitial ad load failed!")
        }
    });
    ```

3. InterstitialAd use `AdInteractionListener` to observer events from the ad.

   ```java
   interstitialAd.setInteractionListener(new AdInteractionListener() {
       @Override
       public void onAdClicked() {
           Log.d(TAG, "Ad clicked!");
       }

       @Override
       public void onAdDisplayed() {
           Log.d(TAG, "Ad shown!");
       }

       @Override
       public void onAdDismissed() {
           Log.d(TAG, "Ad dismissed!");
       }

       @Override
       public void onAdFailed(@NonNull AdError error) {
           Log.d(TAG, "Error: " + error.getErrorMsg());
       }
   });
   ```

4. Calling `InterstitialAd.loadAd()` to request an ad. After load an ad, should call `isLoaded()` and `isAdInvalidated()`
   to check whether the ad is available to show before calling `show()`.

    ```java
    if (interstitialAd.isLoaded() && !interstitialAd.isAdInvalidated()) {
        interstitialAd.show();
    }
    ```

5. Since starting an activity to play this type of ad, do not need to register any view for it. Ad impression and click
   tracking will be done inside ad by itself. But remember to call `destroy()` to release ad if it's used or not needed.

## IV. Support OMID reporting

The Open Measurement Software Development Kit (OMSDK) is designed to facilitate third party viewability and verification measurement
for ads served to web video and mobile app environments. OMSDK has been integrated since 1.10.0. Related ads can send measurement
signals to the Open Measurement Interface Definition (OMID) provider (such as Oracle Moat) through Opera ad sdk.

1. How to enable OMSDK

    There is a unique OMSDK provided by IAB [https://iabtechlab.com](https://iabtechlab.com), please contact Opera Ads team to get it.
    Then add it as a dependency to the gradle file. After that, OMSDK will report related ads session events
    (like session start, ad visibility changed, so on) to the measurement provider.

    Without OMSDK, only related reports will be disabled and nothing else will be effected. It's totally ok to used Opera ad sdk without OMSDK.

2. OMSDK integration certification

    The OMSDK integration has been certified by IAB since March 11, 2021. Please contact Opera Ads team to get access to the IAB certification report.

## V. Inter Scroller Ad

The Inter Scroller ads show full screen content in any scrollable views like news feed in RecyclerView. It makes users believe they
can scroll up and down a blank area to see the full screen ad behind news content.

1. Inter Scroller ads are loaded via the `InterScrollerAd`. The following code demonstrates how to load it:

    ```java
    InterScrollerAd interScrollerAd = new InterScrollerAd(@NonNull Context context,
                                                          @NonNull String placementId,
                                                          @NonNull AdListener listener,
                                                          @Nullable ClickDelegate clickDelegate,
                                                          @Nullable UserAgentDelegate uaDelegate);
    interScrollerAd.loadAd();
    ```

2. The SDK will log the impression and handle the click automatically.

3. Please register the `InterScrollerAdView` and a helper view to enable the inter scroller ad:

    ```java
    InterScrollerAd.register(@NonNull InterScrollerAdView adView, @Nullable View interScrollerAdHolder);
    ```

    Like MediaView of Native ads, InterScrollerAd use InterScrollerAdView to show ad contents. The optional helper view can adjust the size and position
    of ad contents to match it. Otherwise the ad view will have a full screen size. Usually we can use ad view's parent view (such as RecyclerView) as the helper view.

4. `InterScrollerAdView` is used for display ad content. It should be defined in your custom layout as following:

    ```xml
        <com.opera.ad.interScroller.InterScrollerAdView
        android:id="@+id/inter_scroller_ad_container"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />
    ```

5. Notify SDK about the scroll events. Please invoke `InterScrollerAd#disposeOnScrollEvent()` when scrollable view is scrolled.
   Then SDK will adjust the ad content's coordinate which makes it "unmovable" on screen.
   For example, we can register `RecyclerView.OnScrollListener` for it if ad container is an item of RecyclerView. Just invoke #disposeOnScrollEvent() when scroll listener updates.
   Following API need be invoked when RecyclerView is scrolled:

    ```java
        RecyclerView.OnScrollListener scrollListener = new RecyclerView.OnScrollListener() {
                @Override
                public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
                    mInterScrollerAd.disposeOnScrollEvent();
                }
        };
        RecyclerView.addOnScrollListener(scrollListener);
    ```

6. Click handler, please refer to step 5 of Native Ad.

7. At last, `InterScrollerAd.unregister()` or `InterScrollerAd.destroy()` should be called in your `unregister()` or `destroy()` method.
