import Analytics from "analytics";
import googleAnalyticsPlugin from "@analytics/google-analytics";
import Router from "next/router";

// Initialize analytics and plugins
// Documentation: https://getanalytics.io
const analytics = Analytics({
  debug: process.env.NODE_ENV !== "production",
  plugins: [
    googleAnalyticsPlugin({
      trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    }),
  ],
});

// Track initial pageview
if (typeof window !== "undefined") {
  analytics.page();
  !function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement("script");i.async=!0,i.type="text/javascript",i.src="https://app.artibot.ai/loader.js",e.getElementsByTagName("head").item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState)){new window.ArtiBot({i:"c532e7b4-ee00-4141-ab85-df78237ebf62"});a=!0}}}(window,document);

}

// Track pageview on route change
Router.events.on("routeChangeComplete", (url) => {
  analytics.page();
});



export default analytics;
