# 基本配置

以下列代码为例：

``` html
<script src="https://res.adx.opera.com/adx/adsbyopera.js" async></script>
<ins class="adsbyopera"
  data-adx-slot="s600xxxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyopera = window.adsbyopera || []).push({});</script>
```

## 广告宽高

对于 ```<ins>``` 标签，需要对它设置相应的 CSS style，通常为 ```display: inline-block``` 以行内块级元素显示。

推荐为 ```<ins>``` 标签设置宽度和高度，例如 ```width: 500px; height: 300px;```，以确定广告的宽度和高度。

::: tip
请总是为 ```<ins>``` 标签设置宽度，若宽度为空，则取标签的渲染宽度为广告宽度。
当高度未设置时，将根据广告的高度，自动设置 ```<ins>``` 标签的高度。
:::

## 渲染广告

广告的渲染使用到了如下代码：

``` js
(adsbyopera = window.adsbyopera || []).push({});
```

```adsbyopera``` 为 JS SDK 中默认导出的对象，使用该对象的 ```push``` 方法来渲染广告。参数可以是 ```<ins>``` 标签的 ```id```、具体的 DOM 对象（例如：```document.getElementById("ad_1")```）或者一个配置对象。

配置对象的定义如下：

``` ts
interface AdxOptions {
  adxSlot?: string; // slot id
  adxWidth?: number; // 广告宽度
  adxHeight?: number; // 广告高度
  adxTarget: string | Element; // 渲染目标
}
```

::: tip
当传递一个空对象时，所有 class 为 ```adsbyopera``` 的标签都会被渲染。
:::

## 使用 HTML 属性来配置广告

你也可以使用 HTML 属性（attribute）来配置广告位。

可用的属性有：

### data-adx-slot

* 类型: string

* 说明：广告的 Slot ID

### data-adx-width

* 类型：number

* 说明：广告的宽度

### data-adx-height

* 类型：number

* 说明：广告的高度

::: tip
当同时通过配置对象和 HTML 属性指定了某一配置项时，以配置对象中的内容为准。
:::
