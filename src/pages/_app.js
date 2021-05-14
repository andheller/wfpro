import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import "util/analytics.js";


function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Component {...pageProps} />

      <Footer
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        description="We make clear websites to grow your business."
        copyright="© 2021 White Folder Production"
        logo=""
      />
    </>
  );
}

export default MyApp;
