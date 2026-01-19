---
title: Release Note
---

# **Release Notes**

## Opera Ads SDK for Android

This page contains the release notes for Opera Ads SDK for Android.

---

## Version 2.5.0 (2026-01-13)

### New Features
- **App Open Ads**: App Open Ads format is now publicly available
- **Video Ad Enhancements**: Added support for WebM video format

### Improvements
- Template ad rendering improvements
- Performance optimizations and bug fixes

---

## Version 2.4.1 (2026-01-12)

### Improvements
- **Thread Safety**: SDK initialization now supports being called from any thread (previously required main thread before v2.4.1)
- Performance optimizations and bug fixes

---

## Version 2.4.0 (2026-01-11)

### New Features
- **TopOn SDK Compatibility**: Support for TopOn SDK custom adapter (versions 6.5.12 and above)
- **Server-Side Verification (SSV)**: Added SSV callback support for incentivized ads (Rewarded and Rewarded Interstitial)

### Improvements
- **Audio Control**: Fixed issues related to video ad mute settings
- Performance optimizations and bug fixes

---

## Version 2.3.0 (2026-01-08)

### New Features
- **Client Bidding (C2S)**: Full support for client-side bidding integration
  - New APIs: `loadC2SBidAd()` for Native/Banner, `loadC2SBid()` for Fullscreen ads
  - `AdBid` interface with `getEcpm()`, `notifyWin()`, and `notifyLose()` methods
  - `LossReason` enum for auction result reporting

### Improvements
- **Native Ads**: Support for additional clickable views when registering ad interactions
- **Demo Projects**: Added Kotlin demo project
- Performance optimizations and bug fixes

---

## Version 2.2.2 (2026-01-04)

### New Features
- **Audio Control for Video Ads**: Added `OperaAds.setMuted()` API to control audio playback for video ads
- **New Ad Formats (Beta)**: Internal testing support for Rewarded Interstitial and App Open ads
- **OkHttp 3.x Compatibility**: Added support for OkHttp 3.x alongside existing OkHttp 4.x support

### Improvements
- **Mediation Adapters**:
  - Improved banner ad size matching in mediation adapters
  - Added icon view support in AppLovin adapter
- **OM SDK Update**: Upgraded Open Measurement SDK to version 1.6.1
- Performance optimizations and bug fixes

---

## Version 2.2.0 (2025-12-11)

### Improvements
- **OM SDK Update**: Upgraded Open Measurement SDK to version 1.6.1
- **Security Enhancements**: Important security updates and fixes
- **WebView Requirements**: Template ads now require WebView version 63 or higher
- Performance optimizations and bug fixes

---

## Version 2.1.0 (2025-12-03)

### New Features
- **Server-to-Server Bidding**: Full support for S2S bidding integration
  - New `getBidToken()` API for collecting bidding signals
  - New `loadRtbAd()` / `loadRtb()` APIs for loading server bidding ads
- **TopOn Adapter**: Support for TopOn (Anythink) mediation custom event adapter (pre-v6.5.12)

### Improvements
- **Banner Ads**: Support for auto-refresh configuration via Opera Publisher Portal
- Performance optimizations and bug fixes

---

## Version 2.0.1 (2025-11-16)

### Changes
- **Dependency Compatibility**: Downgraded `androidx.lifecycle` dependency version for broader Android Gradle Plugin (AGP) compatibility

### Improvements
- Performance optimizations and bug fixes

---

## Version 2.0.0 (2025-11-05)

### Major Release - Complete SDK Refactoring

This is the first major release with a complete SDK refactoring, introducing new interaction patterns and rendering mechanisms for better flexibility and compatibility.

### New Features
- **Modern Architecture**: Brand new SDK architecture with improved interaction and rendering mechanisms
- **Comprehensive Analytics**: Enhanced data analytics and reporting capabilities to help optimize performance and revenue
- **Mediation Support**:
  - AppLovin MAX custom event adapter
  - AdMob custom event adapter

### Supported Ad Formats
- Native Ads
- Banner Ads (with MRAID support)
- Interstitial Ads
- Rewarded Video Ads
- Rewarded Interstitial Ads (High-Engagement format)

### Technical Improvements
- oRTB (OpenRTB) protocol support
- Modernized public APIs aligned with industry standards
- Enhanced ad interaction and click handling
- Improved ad choice view implementation

---

## Support

For technical support and questions, please contact:
- **Email**: [ad-sdk-support-list@opera.com](mailto:ad-sdk-support-list@opera.com)
- **Documentation**: [Opera Ads Developer Documentation](../)
- **Developer Portal**: [Opera Ads Publisher Portal](https://ofp.adx.opera.com/)
