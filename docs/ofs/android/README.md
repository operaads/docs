# **Opera Ads SDK Integration Guide**

# **for Android**

## **Overview**

Welcome to the Ads SDK integration guide\! Our SDK enables developers to easily integrate high-quality ads into their Android applications, supporting a variety of ad formats including Native, Banner (with MRAID support), Interstitials, Rewarded Videos, and High-Engagement Rewarded Videos/Interstitials. This allows for effective monetization while providing engaging user experiences.

### **Key Features**

* **Ad Formats**: Native, Banner (MRAID-compliant), Interstitial, Rewarded Video, High-Engagement Rewarded Video/Interstitial (interactive variants for better user retention).
* **Easy Integration**: Minimal setup with Gradle dependencies.
* **Event Callbacks**: Robust listeners for ad lifecycle events (load, show, click, reward, etc.).
* **Compliance**: Supports GDPR, CCPA, and user consent handling.

### **Prerequisites**

* Android Studio 4.0+.
* Minimum Android SDK version: API 24 (Android 7.0 Nougat).
* Target SDK version: API 34 (Android 14\) or higher recommended.
* An active account with our ad platform to obtain APP ID and ad unit IDs.
* Internet, phone and network state permissions in your `AndroidManifest.xml`.

## **Installation**

### **Step 1: Add Dependencies**

Add the Ads SDK to your app-level `build.gradle` file. Similar to AdMob, we use Maven repositories for easy integration.

```
dependencies {
    implementation 'com.opera:opera-ads:+'
}
```

Add repositories:

```
repositories {
    maven { url 'https://artifact.op-mobile.opera.com/releases' }
}
```

Sync your project to download the dependencies. Use “[https://artifact.opera.com/releases](https://artifact.opera.com/releases)” instead if the main maven host is not available.

## **Initialization**

Initialize the SDK early in your app lifecycle, preferably in `Application.onCreate()` or `Activity.onCreate()`.

**Code Example (Java)**

```java
import com.opera.ads.AdError;
import com.opera.ads.OperaAds;
import com.opera.ads.initialization.OnSdkInitCompleteListener;
import com.opera.ads.initialization.SdkInitConfig;


class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()

    OperaAds.initialize(this,
        new SdkInitConfig.Builder(APPLICATION_ID)
            .publisherName(PUBLISHER)
            .coppa(coppa)
            .usPrivacy("1YNN")
            .build(),
        new OnSdkInitCompleteListener() {
            @Override
            public void onSuccess() {
                // OK.
            }

            @Override
            public void onError(@NonNull AdError error) {
                Log.e("Application", "Failed to init ad sdk", error.getMessage());
            }
        });
}
```

* **APPLICATION ID**: Register on our [publisher portal](https://ofp.adx.opera.com/) to get your application id.
* **Publisher Name**: A mobile app developer who integrates ad SDK to display ads and earn revenue.

## **Ad Formats Integration**

Our SDK supports multiple formats. Each follows a load-show pattern with callbacks.

### **Demo Example IDs**

**Package Name**: com.opera.ads.demo

**APP ID**: pub13423013211200/ep13423013211584/app13423536670400

**Native Unit ID**: s13429368154496

**Banner Unit ID**: s13423621779136(html)   s13429297184768(video)

**Interstitial Unit ID**: s13423624619200(html)   s13424442482432(video)

**Rewarded Unit ID**: s13938889680960

### **Native Ads**

Native ads blend with app content. Load and display in your custom ad container layout.

#### **Code Example (Java)**

```java
import com.opera.ads.AdError;
import com.opera.ads.nativead.NativeAd;
import com.opera.ads.nativead.NativeAdListener;
import com.opera.ads.nativead.NativeAdLoader;
import com.opera.ads.nativead.NativeAdRootView;

private NativeAd mNativeAd;

// Load Native Ad
NativeAdLoader.loadAd(context, "YOUR_NATIVE_AD_UNIT_ID", new NativeAdListener() {
    @Override
    public void onAdLoaded(@NonNull Nativead nativeAd) {
        mNativeAd = nativeAd;
    }
    @Override
    public void onAdFailedToLoad(@NonNUll AdError error) {

    }
    @Override
    public void onAdImpression() {

    }
    @Override
    public void onAdClicked() {

    }
});

if (!mNativeAd.isAdInvalidated()) {
    // Set AdChoice icon position.
    mNativeAd.setAdChoicePosition(NativeAd.AdChoicePosition.TOP_RIGHT);
    // Bind interactive views with ad.
    NativeAd.InteractionViews interactionViews = new NativeAd.InteractionViews.Builder(
        nativeAdMedia  // com.opera.ads.MediaView
    ).setTitleView(nativeAdTitle)
        .setBodyView(nativeAdBody)
        .setCallToActionView(nativeAdCallToAction)
        .setIconView(nativeAdIcon)
        .build();
    // The root view is the top level container. FrameLayout is preferred.
    // Each native ad view contains native ad assets, such as the
    // MediaView view element or the Title view element, which must be a
    // child of the root view.
    mNativeAd.registerInteractionViews(nativeAdRootView, interactionViews);
}

// Destory ad to release resources.
mNativeAd.destroy();
```

### **Banner Ads (MRAID Support)**

Banner ads are rectangular ad formats that occupy part of an app’s layout, like standard ***BANNER*** (320x50) or ***BANNER\_MREC*** (300x250), supporting MRAID for rich media interactions. Please see the ***AdSize*** class to know all the supported banner sizes.

Banner ads will refresh automatically for BANNER and BANNER\_MREC in default interval, and *`BannerAdView.setAutoRefreshInterval(int)`* can be used to set custom intervals. It can be disabled with *`BannerAdView.setAutoRefreshEnabled(boolean)`*.

You can configure banner autorefresh interval, or enable/disable auto refresh per ad placement id on Opera Ads console.

#### **Code Example (Java)**

```java
import com.opera.ads.AdError;
import com.opera.ads.AdFormat;
import com.opera.ads.AdSize;
import com.opera.ads.banner.BannerAd;
import com.opera.ads.banner.BannerAdListener;
import com.opera.ads.banner.BannerAdView;

private BannerAdView mBannerAdView;

mBannerAdView = new BannerAdView(context);
BannerAdListener adListener = new BannerAdListener() {
    @Override
    public void onAdLoaded(@NonNull BannerAd bannerAd) {
        // Banner is ready.
        // Note that it may be called agian on auto refreshed.
        // You can check bannerAd.refreshCount to know if it's called for auto refresh.
    }
    @Override
    public void onAdFailedToLoad(@NonNUll AdError error) {
        // Banner failed to load.
        // Note that it's only called if failed to load when loadAd()  called for the first time.
        // Will never be called for auto refresh.
    }
    @Override
    public void onAdImpression() {

    }
    @Override
    public void onAdClicked() {

    }
};
mBannerAdView.setPlacementId("YOUR_BANNER_AD_UNIT_ID");
mBannerAdView.setAdSize(AdSize.BANNER_MREC);
// Load Banner Ad.
// It can be called only once for a BannerAdView.
// If you call loadAd() again then it just fails siliently, without any callback.
mBannerAdView.loadAd(adListener);
// Add to layout
bannerContainer.addView(mBannerAdView)

// Destory ad to release resources
mBannerAdView.destroy();
```

### **Interstitial Ads**

Full-screen ads shown at natural breaks (e.g., level complete).

#### **Code Example (Java)**

```java
import com.opera.ads.AdError;
import com.opera.ads.interstitial.InterstitialAd;
import com.opera.ads.interstitial.InterstitialAdInteractionListener;
import com.opera.ads.interstitial.InterstitialAdLoadListener;

private InterstitialAd mInterstitialAd;

// Load Interstitial
InterstitialAd.load(context, "YOUR_INTERSTITIAL_AD_UNIT_ID", new InterstitialAdLoadListener() {
    @Override
    public void onAdLoaded(@NonNull InterstitialAd ad) {
        mInterstitialAd = ad;
    }
    @Override
    public void onAdLoadFailed(@NonNull AdError error) {
        
    }
});
// Show Interstitial
if (!mBannerAdView.isAdInvalidated()) {
    mInterstitialAd.show(context, new InterstitialAdInteractionListener() {
    @Override
    public void onAdClicked() {

    }
    @Override
    public void onAdDisplayed() {

    }
    @Override
    public void onAdDismissed() {

    }
    @Override
    public void onAdFailedToShow(@NonNull AdError error) {

    }
    });
}

// Destory ad to release resources
mInterstitialAd.destroy();
```

### **Rewarded Video**

Users watch for rewards. Callback on completion.

#### **Code Example (Java)**

```java
import com.opera.ads.AdError;
import com.opera.ads.RewardItem;
import com.opera.ads.rewarded.RewardedAd;
import com.opera.ads.rewarded.RewardedAdInteractionListener;
import com.opera.ads.rewarded.RewardedAdLoadListener;

private RewardedAd mRewardedAd;

// Load Rewarded Video
RewardedAd.load(context, "YOUR_REWARDED_AD_UNIT_ID", new RewardedAdLoadListener() {
    @Override
    public void onAdLoaded(@NonNull RewardedAd ad) {
        mRewardedAd = ad;
    }
    @Override
    public void onAdLoadFailed(@NonNull AdError error) {

    }
});
// Show Rewarded Video
if (!mBannerAdView.isAdInvalidated()) {
    mRewardedAd.show(context, new RewardedAdInteractionListener() {
    @Override
    public void onAdClicked() {

    }
    @Override
    public void onAdDisplayed() {

    }
    @Override
    public void onAdDismissed() {

    }
    @Override
    public void onAdFailedToShow(@NonNull AdError error) {

    }
    @Override
    public void onRewarded(@NonNull RewardItem reward) {

    }
});
}

// Destory ad to release resources
mRewardedAd.destroy();
```

## **Ad Mediation**

To support mediation, please set the *`AdMediationProvider`* for *`SdkInitConfig`* when initializing ***`OperaAds`***.

```java
// Create the initialization configuration
new SdkInitConfig.Builder(APPLICATION_ID)
                 .mediationProvider(new AdMediationProvider(...))
// Perform any additional configuration/setting changes
                 .build()

```

### **Bidding**

To collect bidding signals, or get bidding tokens, please use *`OperaAds.getBidToken(...)`* *`.`*
The *`BidTokenCallback`* will be called on the main thread asynchronously.
If placement id, ad format or ad size are known when you call `getBidToken()` then please call builder’s methods to specify them properly.
If bidding for banner ads, please set proper *`AdSize`* for the request meanwhile.

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

### **Mediation Platforms**

We've impelmenated 3 adapters for AdMob/TopOn/Applovin mediation platforms. Please refer to [Mediation Adapter Integration guide](https://doc.adx.opera.com/ofs/mediation/) for more information.

## **Privacy**

### **Coppa**

Generally speaking, the [Children’s Online Privacy Protection Act (COPPA)](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule) regulates the collection, use, and disclosure of personal information for children under the age of 13 by certain websites and online services (including mobile apps). For more information on COPPA, please refer to the Federal Trade Commission's [COPPA FAQ](https://www.ftc.gov/tips-advice/business-center/guidance/complying-coppa-frequently-asked-questions-0).
Use *`PrivacyManager.setCoppa(...)`* to change coppa status.

```java
/**
 * Flag indicating if it's subject to the COPPA: 0 = no, 1 = yes, null = unspecified.
 *
 * See [COPPA](https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy).
 */
PrivacyManager.setCoppa(...)
```

### **U.S. states privacy (CCPA)**

To help you comply with U.S. states privacy laws, use *`PrivacyManager.setUSPrivacy(...)`* to change or apply the compliance status of CCPA. For more information, please refer to [IAB USPrivacy](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md).

```java
/**
 * The consumer privacy under US privacy regulation.
 *
 * See [The IAB Tech Lab's US Privacy String](https://github.com/InteractiveAdvertisingBureau/USPrivacy).
 */
PrivacyManager.setUSPrivacy(...)
```

### GDPR

Opera Ads is listed in TCF Global Vendor List, id: 1135, please make sure to enable Opera Ads in your CMP provider's backend(e.g. Google UMP message). Opera Ads SDK will read application's consent status from system preference, and send to Ad Networks in ad requests.

![GDPR TCF Vendor List](./images/gdpr-tcf-vendor.png)

## **Notice**

* If a certain cached ad is being displayed, please make sure it's still valid (by checking `if (!isAdInvalidated())`) at first. Otherwise the ad may fail to show, or impressions may not generate revenue.
* Unless otherwise specified, all APIs and callbacks work on the main thread.
* Full support for Kotlin integration begins with version 2.2.2.

## **Advanced**

### **Audio Control for Video Ads**

Opera Ads SDK provides fine-grained control over audio playback for video ads (including Banner, Interstitial, Rewarded, Rewarded Interstitial, and App Open ad formats) through the `OperaAds.setMuted()` API.

#### **API Usage**

```java
/**
 * Control audio playback state for video ads.
 *
 * @param muted Audio control setting:
 *              - true: Video ads will play muted (no sound)
 *              - false: Video ads will play unmuted (with sound)
 *              - null: Reset to default behavior (system decides based on user interaction)
 */
OperaAds.setMuted(Boolean muted);
```

#### **Parameter Values**

| Value | Behavior | Use Case |
|-------|----------|----------|
| `true` | Force mute all video ads | Apps that prefer silent ads, or during quiet hours |
| `false` | Force unmute all video ads | Apps with audio-focused content, after user permission |
| `null` | Default behavior | Let the system decide based on autoplay policies |

#### **Important Notes**

* **Must be called before loading ads**: The muted setting only affects ads loaded **after** calling `setMuted()`. It does not apply to already-loaded ads.
* **Global setting**: The setting applies to all video ad formats across the entire SDK.
* **Persistence**: The setting persists for the current app session until changed again.

#### **Code Example**

```java
// Example 1: Mute all video ads
OperaAds.setMuted(true);
// Now load ads - they will play muted
RewardedAd.load(context, placementId, loadListener);

// Example 2: Unmute all video ads
OperaAds.setMuted(false);
// Load new ads - they will play with sound
InterstitialAd.load(context, placementId, loadListener);

// Example 3: Reset to default behavior
OperaAds.setMuted(null);
// Load ads - system decides audio behavior
BannerAdView bannerAdView = new BannerAdView(context);
bannerAdView.setPlacementId(placementId);
bannerAdView.loadAd(adListener);
```

## **FAQ**

### **Q: My app's minSdk is lower than 24, how can I integrate Opera Ads SDK?**

**A:** Opera Ads SDK requires `minSdk 24` (Android 7.0). If your app targets a lower API level, you need to override the library's minSdk requirement in your `AndroidManifest.xml`:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.yourapp.package">

    <uses-sdk tools:overrideLibrary="com.opera.ads" />

    <!-- Your other manifest entries -->
</manifest>
```

**SDK Behavior on Unsupported Devices:**

Opera Ads SDK **automatically detects** the device API level during initialization:
* On devices with API level >= 24: Initialization succeeds normally
* On devices with API level < 24: Initialization **fails immediately** and triggers `OnSdkInitCompleteListener.onError()` with an appropriate error message

**Important:** Using `tools:overrideLibrary` only allows compilation - it does not make the SDK compatible with API levels below 24.

## **Best Practices**

* **Load Ads Early**: Preload ads in background for faster display (similar to AdMob).
* **User Consent**: Always collect and pass consent (GDPR/CCPA) before initializing.
* **Error Handling**: Implement retries for ad load failures.
* **Testing**: Use test ad unit IDs from our dashboard.
* **Frequency Capping**: Limit interstitials/rewarded to avoid user churn (e.g., 1 per 5 minutes).
* **High-Engagement Ads**: Use for premium placements to boost eCPM.

## **Troubleshooting**

* **Ads Not Loading**: Check internet, permissions, API key, and console logs.
* **Initialization Failed**: Verify SDK version and manifest entries.
* **Contact Support**: Reach out via \[ad-sdk-support-list@opera.com\] with logs.

For iOS integration or advanced features, refer to our full documentation or contact support.
