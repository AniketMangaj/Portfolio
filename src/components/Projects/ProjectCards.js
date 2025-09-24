import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, isBlog, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={`${title}-img`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <div className="d-flex">
          {/* 
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            className="me-2"
          >
            <BsGithub size={20} />{" "}
            {isBlog ? "Read Blog" : "View Code"}
          </Button>
          */}
          {!isBlog && demoLink && (
            <Button
              variant="secondary"
              href={demoLink}
              target="_blank"
            >
              <CgWebsite size={20} /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
