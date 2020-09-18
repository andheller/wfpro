import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Features2 from "components/Features2";
import "components/Steps.scss";

function Steps(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-left">
            <figure className="Steps__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <Features2
              items={[
                {
                  title: "Send us a message",
                  description:
                    "Get started with a roadmapping session that is focused on how to make your new website grow your business.",
                  iconClass: "fas fa-comments",
                  iconColor: "primary",
                },
                {
                  title: "Prototype",
                  description:
                    "We develop a prototype website with your feedback until you are more than satisfied.",
                  iconClass: "fas fa-sitemap",
                  iconColor: "primary",
                },
                {
                  title: "Launch",
                  description:
                    "Liftoff! We work with you to launch your new site. We work to make sure your site stays updated and secure even after launch.",
                  iconClass: "fas fa-space-shuttle",
                  iconColor: "primary",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Steps;
