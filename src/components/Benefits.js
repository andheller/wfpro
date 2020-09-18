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
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
              },
              {
                title: "Support",
                body:
                  "We are always here to help solve any (website) problem.",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
              },
              {
                title: "Updates",
                body:
                  "We keep your website secure, updated and free of  bugs.",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
              },
              {
                title: "Advice",
                body:
                  "We want you to get the most out of your website. We can answer any of your website questions. If we don't know the answer, we'll figure it out. ",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
              },
            ]}
          />
        </Card>
      </Container>
    </Section>
  );
}

export default Benefits;
