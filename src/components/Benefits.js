import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Card from "react-bootstrap/Card";
import Features from "components/Features";

function Benefits(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card>
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Backups",
                body:
                  "When disaster strikes, we’ll be ready. We keep 90 days of backups as a standard and can do more on request.",
                image: "https://raw.githubusercontent.com/andheller/wfpro/4dd44bc27022592e1b872d181b9cdfc67147634b/src/assets/undraw_cloud_files_wmo8.svg",
              },
              {
                title: "Support",
                body:
                  "We are always here to help solve any (website) problem.",
                image: "https://raw.githubusercontent.com/andheller/wfpro/80e4864a826d69f42c944bae9c91e7ae6a5dc2bf/src/assets/undraw_done_a34v.svg",
              },
              {
                title: "Updates",
                body:
                  "We keep your website secure, updated and free of  bugs.",
                image:
                  "https://raw.githubusercontent.com/andheller/wfpro/80e4864a826d69f42c944bae9c91e7ae6a5dc2bf/src/assets/undraw_website_builder_bxki.svg",
              },
              {
                title: "Advice",
                body:
                  "We want you to get the most out of your website. We can answer any of your website questions. If we don't know the answer, we'll figure it out. ",
                image:
                  "https://raw.githubusercontent.com/andheller/wfpro/80e4864a826d69f42c944bae9c91e7ae6a5dc2bf/src/assets/undraw_browsing_urt9.svg",
              },
            ]}
          />
        </Card>
      </Container>
    </Section>
  );
}

export default Benefits;
