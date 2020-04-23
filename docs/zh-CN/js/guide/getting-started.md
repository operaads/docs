# 快速上手

## 获取并复制广告代码

一段典型的广告代码如下：

``` html
<script src="https://res-odx.op-mobile.opera.com/adsbyopera.js" async></script>
<ins id="ad_1"
  data-adx-slot="s600xxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyopera = window.adsbyopera || []).push("ad_1");</script>
```

在上面的例子中，需要注意的地方有：

1. 引入了 Opera Ad JS SDK，然后设置为 ```async``` 异步加载；

2. ```<ins></ins>``` 标签定义了广告体，广告将渲染到该标签内，并且该标签的 ID 为 ```ad_1```；

3. 第二个 ```<script></script>``` 中的代码用于执行广告渲染。

## 将广告代码粘贴到页面中

未添加广告代码时：

``` html
<html>
<head>
这是您网页的标题部分。
<title>示例 HTML 网页</title>
</head>
<body>
这是您网页的正文部分。
</body>
</html>
```

添加广告代码后：

``` html
<html>
<head>
这是您网页的标题部分
<title>示例 HTML 网页</title>
</head>
<body>
这是您网页的正文部分。
<script src="https://res-odx.op-mobile.opera.com/adsbyopera.js" async></script>
<ins id="ad_1"
  data-adx-slot="s600xxxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyopera = window.adsbyopera || []).push("ad_1");</script>
</body>
</html>
```

::: warning 注意
这只是示例代码，请勿在您网站的 HTML 中使用。
:::

## 通过 HTML 调整广告在您网站上的位置

与网站上的图片、段落等其他元素一样，您可以使用 HTML 标记（```<div>```、```<table>``` 等）调整广告的位置。

例如，如果您使用 ```<div align="center">``` 和 ```</div>``` HTML 标记将您的广告代码括起来，则广告将显示在网页中间。

``` html{8,15}
<html>
<head>
这是您网页的标题部分
<title>示例 HTML 网页</title>
</head>
<body>
这是您网页的正文部分。
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
