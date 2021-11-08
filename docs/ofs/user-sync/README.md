# Introduction

Opera Ads user sync is aim to drop pixels to cookie users with IDs.

## Address

``` wiki
https://res.adx.opera.com/adx/adsusersync.js
```

## User Sync Example

::: warning
This is sample code only, please don't use it in your own site's HTML.
:::

Example HTML page before the user sync code has been added：

``` html
<html>
<head>
This is the head of your page.
<title>Example HTML page</title>
</head>
<body>
This is the body of your page.
</body>
</html>
```

Example HTML page with the user sync code added in:

``` html
<html>
<head>
This is the head of your page.
<title>Example HTML page</title>
</head>
<body>
This is the body of your page.
<script src="https://res.adx.opera.com/adx/adsusersync.js"></script>
</body>
</html>
```

::: warning
Don't set async or defer attributes, because you may miss the DOMContentLoaded event causing the event listener not to work.
:::
