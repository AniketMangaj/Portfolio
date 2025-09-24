import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar"; // Bootstrap Navbar component
import Nav from "react-bootstrap/Nav";       // Bootstrap Nav component
import Container from "react-bootstrap/Container"; // Bootstrap Container for layout
import Button from "react-bootstrap/Button"; // Bootstrap Button component
import { Link } from "react-router-dom";     // Link component for routing
import { CgGitFork } from "react-icons/cg";  // Git fork icon

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";                     // Various icons for navbar items
import { CgFileDocument } from "react-icons/cg"; // Resume icon

function NavBar() {
  // State to handle navbar expansion in mobile view
  const [expand, updateExpanded] = useState(false);
  // State to handle navbar color change on scroll
  const [navColour, updateNavbar] = useState(false);

  // Function to update navbar color on scroll
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);  // If scrolled down 20px or more, make navbar sticky/dark
    } else {
      updateNavbar(false); // Else, keep navbar default
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand} // Control expansion state
      fixed="top"       // Fix navbar at top
      expand="md"       // Expand at medium screen size
      className={navColour ? "sticky" : "navbar"} // Conditional class based on scroll
    >
      <Container>
        

        {/* Hamburger menu toggle for mobile */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded"); // Toggle navbar
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Navbar links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            {/* Home link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* GitHub fork & star button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/AniketMangaj/"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
