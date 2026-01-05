import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/project1.png"; // reuse existing image
import skinCancer from "../../Assets/Projects/SkinCancer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a couple of projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* E-Commerce Shopping Web Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Shopping Web Application"
              description="A full-stack e-commerce web application developed using Spring Boot and React. The application supports user authentication, product listing, cart management, order placement, and MySQL-based data persistence."
              ghLink="https://github.com/AniketMangaj/MyFullStackProject"
            />
          </Col>

          {/* Skin Cancer Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinCancer}
              isBlog={false}
              title="Skin Cancer Detection"
              description="A machine learning-based web application for skin cancer detection using image classification. Built with Python and Flask, the system allows users to upload skin lesion images and receive predictions from a trained deep learning model. Created for educational purposes."
              ghLink="https://github.com/AniketMangaj/skin-cancer-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
