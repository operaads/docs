# SO Pixel Integration


## **Overview**

SO pixel is a snippet of JavaScript code that allows you to track user action on your website. It works by loading a small javascript library in your website which can be used  to trigger some events whenever a user action / event happens. 

The client side can define their events for tracking, which will be used in their campaigns run in OperaAds platform.

## **Integration**

In order to use the pixel, you just need to follow:

Step 1: Get pixel code from Opera Ads and install it to your website.  
Step 2: Add the pixel code in the place you want to track, usually the event to measure your conversion goal.

##  **Step 1：Setup Pixel Code**

Copy the pixel code：

```javascript
<!-- SO Pixel Code -->
  <script>
  !(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;n.src=w;g.parentNode.insertBefore(n,g)}})(window,document,"script","//res-odx.op-mobile.opera.com/sp.js","otag");

  otag('init', 'your-pixel-id-goes-here')

  </script>
<!-- End SO Pixel Code -->
```

Paste the pixel code in the header section of your website.    
Please make sure this code is installed for every page of your website. This is typically done by adding it to your website’s global header.

```html
<!-- Example -->
<!DOCTYPE html>
< html lang="en">
    <head>
        < script>...</ script>
        insert_pixel_code_here
    </head>

```

## **Step 2： Setup Events**

You can use below pixel code:

```javascript

otag('event', "your_event_name"); 
```

to track your website visitors' actions.  Where `your_event_name` can be defined by yourself,  for example:

* registration  
* deposit  
* add_to_cart
* purchase  
* page_loaded
* search_loaded
* … …


Note: event name is case sensitive, we suggest all event names using lowercase.

For example:

```javascript
<script>
   $("#yourButton").click(function() {
      otag("event",  "registration");
    })
</script>
```

*Note that the example above uses jQuery to trigger the event call, but you could trigger the function call using any method mechanism you would like.*
