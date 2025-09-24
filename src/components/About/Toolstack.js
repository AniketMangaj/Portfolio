import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows11,
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiApachemaven,
  SiEclipseide,
  SiJunit5
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiWindows11 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiIntellijidea /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachemaven /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiEclipseide /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJunit5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
    </Row>
  );
}

export default Toolstack;
