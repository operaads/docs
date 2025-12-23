# No iframe sdk

This SDK render ads by a div wrapper not iframe, but it only support js-taglist creative type. Please make sure only js-taglist ads in your slot.

## SDK Address

``` wiki
https://res.oa.opera.com/x/oatag.js
```

## How to config

Example HTML page with the Ad code added in:

``` html
<html>
<head>
This is the head of your page.
<title>Example HTML page</title>
<script src="https://res.oa.opera.com/x/oa.js" async></script>
</head>

<body>
This is the body of your page.
<script src="https://res.oa.opera.com/x/oatag.js" async></script>
<ins class="adsbyoperatag"
  data-adx-slot="s600xxxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyoperatag = window.adsbyoperatag || []).push({});</script>
</body>
</html>
```

::: warning
oa.js is required like the example in page head to render other type of Opera ads by your js-taglist ad.
:::
