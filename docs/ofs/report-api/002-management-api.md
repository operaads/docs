# Management Open API

## Overview

This document describes the Open API endpoints for inventory management. All API endpoints require authentication via Bearer token in the Authorization header.

## Authentication

All API requests must include a valid authorization token in the request header:

```
Authorization: Bearer <your_auth_token>
```

---

## App Management

#### Create App

Creates a new app.

**Endpoint:** `POST /openapi/inventory/v1/app/create`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | App name |
| deviceType | int | Yes | Device type (see Device Types) |
| osType | int | Yes | Operating system type (see OS Types) |
| trafficType | int | Yes | Traffic type (see Traffic Types) |
| pkgName | string | Conditional | Package name (required when trafficType = 0 for App) |
| domainName | string | Conditional | Domain name (required when trafficType = 1 for Web) |
| url | string | Yes | App store URL or website URL |
| appAdsTxtLink | string | Yes | App-ads.txt URL |
| category | string | Yes | App category |
| coppaCompliant | boolean | No | COPPA compliance flag (default: false) |

**Example Request:**

```json
{
  "name": "My App",
  "deviceType": 1,
  "osType": 2,
  "trafficType": 0,
  "pkgName": "com.example.myapp",
  "url": "https://play.google.com/store/apps/details?id=com.example.myapp",
  "appAdsTxtLink": "https://example.com/app-ads.txt",
  "category": "Games",
  "coppaCompliant": false
}
```

**Response:**

```json
{
  "publisherId": "pub213660626112",
  "appId": "app14463798688768",
  "displayId": "app14463798688768",
  "name": "My App",
  "deviceType": 1,
  "osType": 2,
  "trafficType": 0,
  "pkgName": "com.example.myapp",
  "domainName": "",
  "url": "https://play.google.com/store/apps/details?id=com.example.myapp",
  "appAdsTxtLink": "https://example.com/app-ads.txt",
  "category": "Games",
  "coppaCompliant": false,
  "status": 2,
  "createTime": "2026-01-13T08:54:15Z",
  "updateTime": "2026-01-13T08:54:15Z"
}
```

---

#### Update App

Updates an existing app.

**Endpoint:** `POST /openapi/inventory/v1/app/update`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| appId | string | Yes | App ID to update |
| status | int | No | Status (see Status Values) |
| name | string | No | App name |
| deviceType | int | No | Device type |
| osType | int | No | Operating system type |
| trafficType | int | No | Traffic type |
| pkgName | string | No | Package name |
| domainName | string | No | Domain name |
| url | string | No | App store URL or website URL |
| appAdsTxtLink | string | No | App-ads.txt URL |
| category | string | No | App category |
| coppaCompliant | boolean | No | COPPA compliance flag |

**Example Request:**

```json
{
  "appId": "app_67890",
  "name": "My Updated App",
  "status": 1
}
```

**Response:**

Same structure as Create App response.

---

#### List Apps

Retrieves a list of apps.

**Endpoint:** `POST /openapi/inventory/v1/app/list`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| deviceType | int | No | Filter by device type |
| osType | int | No | Filter by OS type |
| trafficType | int | No | Filter by traffic type |
| category | string | No | Filter by category |
| status | int[] | No | Filter by status list |

**Example Request:**

```json
{
  "deviceType": 1,
  "osType": 2,
  "status": [0, 1]
}
```

**Response:**

```json
{
  "list": [
    {
      "publisherId": "pub213660626112",
      "appId": "app14463798688768",
      "displayId": "app14463798688768",
      "name": "My Updated App",
      "deviceType": 1,
      "osType": 2,
      "trafficType": 0,
      "pkgName": "com.example.myapp",
      "domainName": "",
      "url": "https://play.google.com/store/apps/details?id=com.example.myapp",
      "appAdsTxtLink": "https://example.com/app-ads.txt",
      "category": "Games",
      "coppaCompliant": false,
      "status": 1,
      "createTime": "2026-01-13T08:54:15Z",
      "updateTime": "2026-01-13T08:55:08Z"
    }
  ],
  "totalCount": 1
}
```

---

## Placement Management

#### Create Placement

Creates a new ad placement.

**Endpoint:** `POST /openapi/inventory/v1/placement/create`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| appId | string | Yes | App ID to create placement for |
| name | string | Yes | Placement name |
| floorPrice | number | No | Floor price in USD (e.g., 0.5 = $0.50) |
| countryFloorPrice | array | No | Country-specific floor prices (see below) |
| sdkAdFormat | int | Yes | SDK ad format (see SDK Ad Formats) |
| sdkAdTypes | int[] | No | SDK ad types |
| sdkAdSize | int | No | SDK ad size |
| sdkAutoRefresh | boolean | No | Enable auto refresh |
| sdkAutoRefreshInterval | int | No | Auto refresh interval in seconds |
| rewardedName | string | No | Reward name (for rewarded ads, max 50 characters) |
| rewardedQuantity | int | No | Reward quantity (1-1000) |
| rewardedDeliverySetting | int | No | Reward delivery setting (0=No callback, 1=Server callback) |
| callbackUrl | string | No | Server-to-server callback URL (required when rewardedDeliverySetting=1) |
| securityKey | string | No | Security key for callback verification |

**Country Floor Price Object:**

| Field | Type | Description |
|-------|------|-------------|
| countryCodes | string | Comma-separated country codes (e.g., "US,CA") or "*" for all |
| floorPrice | number | Floor price in USD |

**Example Request:**

```json
{
  "appId": "app14463798688768",
  "name": "Banner Bottom",
  "floorPrice": 0.5,
  "countryFloorPrice": [
    {"countryCodes": "US,CA", "floorPrice": 0.8},
    {"countryCodes": "CN", "floorPrice": 0.3}
  ],
  "sdkAdFormat": 2,
  "sdkAdSize": 1,
  "sdkAutoRefresh": true,
  "sdkAutoRefreshInterval": 30
}
```

**Response:**

```json
{
  "sid": "s14463823852672",
  "appId": "app14463798688768",
  "name": "Banner Bottom",
  "status": 2,
  "floorPrice": 0.5,
  "countryFloorPrice": [
    {
      "countryCodes": "US,CA",
      "floorPrice": 0.8
    },
    {
      "countryCodes": "CN",
      "floorPrice": 0.3
    }
  ],
  "sdkAdFormat": 2,
  "sdkAdTypes": [],
  "sdkAdSize": 1,
  "sdkAutoRefreshInterval": 30,
  "sdkAutoRefresh": true,
  "orientation": 0,
  "rewardedName": "",
  "rewardedQuantity": 0,
  "rewardedDeliverySetting": 0,
  "callbackUrl": "",
  "securityKey": "",
  "createTime": "2026-01-13T09:00:48Z",
  "updateTime": "2026-01-13T09:00:48Z"
}
```

---

#### Update Placement

Updates an existing placement.

**Endpoint:** `POST /openapi/inventory/v1/placement/update`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| sid | string | Yes | Placement ID to update |
| status | int | No | Status (see Status Values) |
| name | string | No | Placement name |
| floorPrice | number | No | Floor price in USD |
| countryFloorPrice | array | No | Country-specific floor prices |
| sdkAdFormat | int | No | SDK ad format |
| sdkAdTypes | int[] | No | SDK ad types |
| sdkAdSize | int | No | SDK ad size |
| sdkAutoRefresh | boolean | No | Enable auto refresh |
| sdkAutoRefreshInterval | int | No | Auto refresh interval |
| orientation | int | No | Ad orientation |
| rewardedName | string | No | Reward name (max 50 characters) |
| rewardedQuantity | int | No | Reward quantity (1-1000) |
| rewardedDeliverySetting | int | No | Reward delivery setting (0=No callback, 1=Server callback) |
| callbackUrl | string | No | Callback URL (required when rewardedDeliverySetting=1) |
| securityKey | string | No | Security key |

**Example Request:**

```json
{
  "sid": "s14463823852672",
  "name": "Banner Top",
  "floorPrice": 0.6,
  "status": 1
}
```

**Response:**

Same structure as Create Placement response.

---

#### List Placements

Retrieves a list of placements.

**Endpoint:** `POST /openapi/inventory/v1/placement/list`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| appId | string | No | Filter by app ID |
| appType | int | No | Filter by app type |
| sdkAdFormat | int | No | Filter by SDK ad format |
| category | string | No | Filter by category |
| status | int | No | Filter by status |

**Example Request:**

```json
{
  "appId": "app_67890",
  "status": 1
}
```

**Response:**

```json
{
  "list": [
    {
      "sid": "s14463823852672",
      "appId": "app14463798688768",
      "name": "Banner Top",
      "status": 1,
      "floorPrice": 0.6,
      "countryFloorPrice": [
        {
          "countryCodes": "US,CA",
          "floorPrice": 0.8
        },
        {
          "countryCodes": "CN",
          "floorPrice": 0.3
        }
      ],
      "sdkAdFormat": 2,
      "sdkAdTypes": [],
      "sdkAdSize": 1,
      "sdkAutoRefreshInterval": 30,
      "sdkAutoRefresh": true,
      "orientation": 0,
      "rewardedName": "",
      "rewardedQuantity": 0,
      "rewardedDeliverySetting": 0,
      "callbackUrl": "",
      "securityKey": "",
      "createTime": "2026-01-13T09:00:48Z",
      "updateTime": "2026-01-13T09:01:45Z"
    }
  ],
  "totalCount": 1
}
```

---

## Enumerations

### Device Types

| Value | Description |
|-------|-------------|
| 0 | Unknown |
| 1 | Phone |
| 2 | Tablet |
| 3 | Desktop |
| 4 | Connected Device |
| 5 | Set Top Box |
| 6 | Others |

### OS Types

| Value | Description |
|-------|-------------|
| 0 | Unknown |
| 1 | iOS |
| 2 | Android |
| 3 | Roku |
| 4 | Windows |
| 5 | Tizen |
| 6 | Other |
| 7 | Fire |
| 8 | Web |
| 9 | Linux |
| 10 | Mac |
| 11 | Feature Phone |

### Traffic Types

| Value | Description |
|-------|-------------|
| 0 | App |
| 1 | Web |

### Status Values

| Value | Description |
|-------|-------------|
| 0 | Inactive |
| 1 | Active |

### SDK Ad Formats

| Value | Description |
|-------|-------------|
| 1 | App Open |
| 2 | Banner |
| 3 | Interstitial |
| 4 | MREC |
| 5 | Native |
| 6 | Rewarded |
| 7 | Rewarded Interstitial |

### SDK Ad Sizes

| Value | Description |
|-------|-------------|
| 1 | 320*50 |
| 2 | 300*250 |

---

## Error Handling

All API responses follow a consistent format:

**Success Response:**

```json
{
  "code": 0,
  "msg": "ok",
  "data": { ... }
}
```

**Error Response:**

```json
{
  "code": <error_code>,
  "msg": "<error_message>"
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid or missing token |
| 403 | Forbidden - Insufficient scope |
| 500 | Internal Server Error |

---

## Rate Limiting

API requests are subject to rate limiting. If you exceed the rate limit, you will receive a `429 Too Many Requests` response. Please implement appropriate retry logic with exponential backoff.
