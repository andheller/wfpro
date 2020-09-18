import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import "util/analytics.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />

      <Component {...pageProps} />

      <Footer
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2020 White Folder Production"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default MyApp;
