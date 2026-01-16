---
title: Release Note
---

# **Release Notes**

## Opera Ads SDK for Android

This page contains the release notes for Opera Ads SDK for Android.

---

## Version 2.5.0 (2026-01-14)

### New Features
- **App Open Ads Support**: App Open Ads format is now publicly available

### Improvements
- Performance optimizations and bug fixes

---

## Version 2.4.1 (2026-01-12)

### New Features
- **TopOn SDK Compatibility**: Support for TopOn SDK custom adapter (versions 6.5.12 and above)
- **Server-Side Verification (SSV)**: Added SSV callback support for incentivized ads (Rewarded and Rewarded Interstitial)

### Improvements
- Performance optimizations and bug fixes

---

## Version 2.3.0 (2026-01-09)

### New Features
- **Client Bidding (C2S)**: Full support for client-side bidding integration
  - New APIs: `loadC2SBidAd()` for Native/Banner, `loadC2SBid()` for Fullscreen ads
  - `AdBid` interface with `getEcpm()`, `notifyWin()`, and `notifyLose()` methods
  - `LossReason` enum for auction result reporting

### Improvements
- Performance optimizations and bug fixes

---

## Version 2.2.2 (2025-12-12)

### New Features
- **Audio Control for Video Ads**: Added `OperaAds.setMuted()` API to control audio playback for video ads
- **OM SDK Update**: Upgraded Open Measurement SDK to version 1.6.1

### Improvements
- Performance optimizations and bug fixes

---

## Version 2.1.0 (2025-12-04)

### New Features
- **Server-to-Server Bidding**: Full support for S2S bidding integration
  - New `getBidToken()` API for collecting bidding signals
  - New `loadRtbAd()` / `loadRtb()` APIs for loading server bidding ads
- **TopOn Adapter**: Support for TopOn (Anythink) mediation custom event adapter

### Improvements
- Performance optimizations and bug fixes

---

## Version 2.0.1 (2025-11-17)

### Changes
- **Dependency Downgrade**: Downgraded `androidx.lifecycle` dependency version for better compatibility

### Improvements
- Performance optimizations and bug fixes

---

## Version 2.0.0 (2025-11-05)

### Major Release - Complete SDK Refactoring

This is the first major release with a complete SDK refactoring, introducing new interaction patterns and rendering mechanisms for better flexibility and compatibility.

### New Features
- **Modern Architecture**: Brand new SDK architecture with improved interaction and rendering mechanisms
- **Comprehensive Analytics**: Enhanced data analytics and reporting capabilities to help optimize performance and revenue
- **AppLovin MAX Adapter**: Support for AppLovin MAX custom event adapter
- **AdMob Adapter**: Support for AdMob custom event adapter

### Supported Ad Formats
- Native Ads
- Banner Ads (with MRAID support)
- Interstitial Ads
- Rewarded Video Ads
- High-Engagement Rewarded Videos/Interstitials

### Mediation Support
- AdMob Mediation
- AppLovin MAX Mediation

---

## Support

For technical support and questions, please contact:
- **Email**: [ad-sdk-support-list@opera.com](mailto:ad-sdk-support-list@opera.com)
- **Documentation**: [Opera Ads Developer Documentation](../)
- **Developer Portal**: [Opera Ads Publisher Portal](https://ofp.adx.opera.com/)
