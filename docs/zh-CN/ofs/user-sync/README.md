# Introduction

Opera Ads user sync旨在通过发送pixels的方式同步用户信息.

## 地址

``` wiki
https://res.adx.opera.com/adx/adsusersync.js
```

## User Sync 示例

::: warning
这只是示例代码，不要直接在你的网站HTML文件中使用
:::

添加user sync前的HTML代码示例：

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

添加user sync后的HTML代码示例：

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
不要设置async或者defer属性，你可能错过DOMContentLoaded事件，导致DOMContentLoaded监听事件无法工作。
:::
