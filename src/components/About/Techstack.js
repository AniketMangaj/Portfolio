import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiMysql,
  DiPython
} from "react-icons/di";
import {
  SiSpringboot,
  SiApachemaven,
  SiHibernate,
  SiDocker
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython/></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachemaven /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHibernate /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
    </Row>
  );
}

export default Techstack;
