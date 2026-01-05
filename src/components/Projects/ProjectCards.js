import React from "react";
import Card from "react-bootstrap/Card";
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
        <div className="project-card-footer">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer"
              className="project-github-link"
            >
              <BsGithub size={24} />
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
