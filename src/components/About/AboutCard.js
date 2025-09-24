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
            I am a passionate **Java Developer** with a strong foundation in full-stack web development using React and Spring Boot.
            <br />
            I completed my BE in Computer Science and Engineering from Hirasugar Institute of Technology, Nidasoshi.
            <br />
            As a fresher, I have built several projects, including a food delivery system using JDBC, Servlets, and MySQL
            <br />
            Currently, I’m exploring opportunities to contribute to innovative Java/Spring Boot applications and grow my expertise in cloud-native architectures.
            <br /><br />
            Apart from coding, I love solving logical puzzles, exploring AI productivity tools, and staying active with outdoor sports!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aniket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
