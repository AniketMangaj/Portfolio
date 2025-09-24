import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodDelivery from "../../Assets/Projects/FoodDeliver.jpeg";
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
          {/* Food Delivery System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodDelivery}
              isBlog={false}
              title="Food Delivery System"
              description="A full-stack food delivery application built with Java Spring Boot for the backend, React.js for the frontend, and MySQL for data persistence. Features include user authentication (JWT), role-based access control, real-time order tracking, and payment integration."
              // ghLink="https://github.com/aniket-mangaj/food-delivery-system"
              // demoLink="https://food-delivery-demo.example.com"
            />
          </Col>

          {/* Skin Cancer Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinCancer}
              isBlog={false}
              title="Skin Cancer Detection"
              description="A machine learning web app for early detection of skin cancer using a convolutional neural network trained on the HAM10000 dataset. Built with Python Flask for the API, TensorFlow/Keras for model training, and a React.js frontend for image upload and prediction display."
              // ghLink="https://github.com/aniket-mangaj/skin-cancer-detection"
              // demoLink="https://skin-cancer-detect.example.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
