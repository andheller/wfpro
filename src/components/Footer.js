import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import "components/Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="copyright left">© 2021 White Folder Production</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
