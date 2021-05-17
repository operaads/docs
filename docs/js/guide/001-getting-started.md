# Quick Start

## Get and copy ad code

A typical piece of ad code shows as follows:

``` html
<script src="https://res-odx.op-mobile.opera.com/adsbyopera.js" async></script>
<ins id="ad_1"
  data-adx-slot="s600xxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyopera = window.adsbyopera || []).push("ad_1");</script>
```

In which:

1. Introduced Opera Ad JS SDK，and use ```async``` to asynchronous loading.

2. ```<ins></ins>``` tag defines the body of the ad, the ad will be rendered into the tag, and the ID of the tag is ```ad_1```.

3. The code in second ```<script></script>``` tag is used to perform ad rendering ad.

## Paste the ad code into the page

Example HTML page before the AdSense code has been added：

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

Example HTML page with the Ad code added in:

``` html
<html>
<head>
This is the head of your page.
<title>Example HTML page</title>
</head>
<body>
This is the body of your page.
<script src="https://res-odx.op-mobile.opera.com/adsbyopera.js" async></script>
<ins id="ad_1"
  data-adx-slot="s600xxxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyopera = window.adsbyopera || []).push("ad_1");</script>
</body>
</html>
```

::: warning
This is sample code only, please don't use it in your own site's HTML.
:::

## Positioning the ads on your site with HTML

Just like the other elements of your site (images, paragraphs, etc.), you can change the position of your Opera ads by using HTML tags(```<div>```、```<table>```, etc.).

For example, if you surround your ad code with the HTML tags ```<div align="center">``` and ```</div>```, your ads will appear in the center of your page.

``` html{8,15}
<html>
<head>
This is the head of your page.
<title>Example HTML page</title>
</head>
<body>
This is the body of your page.
<div align="center">
<script src="https://res-odx.op-mobile.opera.com/adsbyopera.js" async></script>
<ins id="ad_1"
  data-adx-slot="s600xxxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyopera = window.adsbyopera || []).push("ad_1");</script>
</div>
</body>
</html>
```
