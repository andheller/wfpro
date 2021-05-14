import React from "react";
import HeroSection from "components/HeroSection";
import Steps from "components/Steps";
import Benefits from "components/Benefits";
import CtaSection from "components/CtaSection";
import { useRouter } from "next/router";
import Document, { Html, Head, Main, NextScript } from 'next/document'



function IndexPage(props) {
  const router = useRouter();

  return (
    <>
        <title>White Folder Production- We make websites that grow businesses</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="We make clear websites to grow your business."
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        image="https://raw.githubusercontent.com/andheller/wfpro/80e4864a826d69f42c944bae9c91e7ae6a5dc2bf/src/assets/undraw_heatmap_uyye.svg"
        buttonOnClick={(e) => {
           {e.preventDefault(); window.artibotApi.trigger('bot:expand'); return false; }
        }}
      />
      <Steps
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://raw.githubusercontent.com/andheller/wfpro/80e4864a826d69f42c944bae9c91e7ae6a5dc2bf/src/assets/undraw_online_media_62jb.svg"
      />
      <Benefits
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="We take care of the technical stuff, so you don’t have to worry about it."
        subtitle=""
      />
      <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle="We help businesses create clear websites that drive business growth. Creating a clear message is the simplest, most effective way to supercharge your website."
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={(e) => {
          {e.preventDefault(); window.artibotApi.trigger('bot:expand'); return false; }
        }}
      />

       </>
  );
}

export default IndexPage;
