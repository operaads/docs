# Basic Config

Take the following code as an example:

``` html
<script src="https://res.adx.opera.com/adx/adsbyopera.js" async></script>
<ins class="adsbyopera"
  data-adx-slot="s600xxxxxxxxx"
  style="display: inline-block;width: 300px;"
></ins>
<script>(adsbyopera = window.adsbyopera || []).push({});</script>
```

## Size of the ads

For the ```<ins>``` tag, you need to set CSS style to it, which is usually ```display: inline-block```.

It is recommended to set the width and height of the ```<ins>``` tag, such as ```width: 500px; height: 300px;``` to determine the width and height of the ad.

::: tip
Please always set the width for the ```<ins>``` tag. If the width is empty, the rendered width of the tag is taken as the width of the ad.
When the height is not set, the height of the ```<ins>``` tag will be set automatically based on the height of the ad.
:::

## Ad Rendering

The rendering of the ad uses the following code:

``` js
(adsbyopera = window.adsbyopera || []).push({});
```

```adsbyopera``` is an object exported by default in the JS SDK. Use the object's ```push``` method to render ads.

The parameter can be the ```id``` of the ```<ins>``` tag, a specific DOM object (for example: ```document.getElementById("ad_1")```), a configuration object.

The definition of the configuration object is as follows:

``` ts
interface AdxOptions {
  adxSlot?: string; // slot id
  adxWidth?: number; // ad width
  adxHeight?: number; // ad height
  adxTarget: string | Element; // render target
  adxTypes?: sting[]; // supported creative types
}
```

::: tip
When a empty object is passed, it means render all tag with class name ```adsbyopera```.
:::

## Configure ads with HTML attributes

You can also use HTML attributes to configure ad slots.

Available attributes are:

### data-adx-slot

* Type: string

* Desc: The Slot ID of ad

### data-adx-width

* Type: number

* Desc: Width of ad

### data-adx-height

* Type: number

* Desc: Height of ad

::: tip
When a configuration item is specified through both the configuration object and the HTML attribute, the content in the configuration object is used.
:::

### data-adx-fit-width

* Type: boolean

* Desc: Whether to fill the width of parent element

::: tip
This attribute only available when `data-adx-width` is not specified.
:::

### data-adx-types

* Type: string[]

* Desc: The supported creative types
