import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aniket Mangaj </span>
            from <span className="purple">Karnataka, India.</span>
            <br />
            I am a passionate Java Developer with a strong foundation in Core Java,
            OOP concepts, and full-stack web development.
            <br />
            I have hands-on experience with Spring Boot, REST APIs, MySQL,
            and frontend development using React.
            <br />
            I completed my BE in Computer Science and Engineering from
            Hirasugar Institute of Technology, Nidasoshi.
            <br />
            As a fresher, I have built an E-commerce shopping web application
            using Spring Boot for the backend and React for the frontend.
            <br />
            I also have basic knowledge of Docker and understand containerization
            concepts for application deployment.
            <br />
            Currently, I am seeking an entry-level Java Developer role where I can
            apply my skills, learn industry best practices, and grow as a software engineer.
            <br /><br />
            Apart from coding, I enjoy solving logical problems, exploring new technologies,
            and staying active through outdoor sports.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & DSA Practice
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Java & Spring Boot Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Aniket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
