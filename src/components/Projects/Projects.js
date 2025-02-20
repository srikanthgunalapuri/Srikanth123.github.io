import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">MY PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are My projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vedarushi"
              description="Vedarushi is a spiritual service platform that allows users to book Poojas, Vratams, and send personalized birthday wishes. It provides a seamless and interactive UI for users to explore and schedule religious services conveniently."
              // ghLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Arsha Tuitions"
              description=" Arsha Tuitions is an online platform designed to provide educational services and resources for students, teachers, and administrators. The web application features a user-friendly interface for managing educational content, schedules, and communication tools efficiently..
              "
              // ghLink="https://github.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-commerce"
              description='I developed e-commerce website built with React, when a user clicks the "Add to Cart" button, the selected product gets added to their cart list. Simultaneously, the count of items in the cart increases, reflecting the addition. Additionally, the total price of the cart dynamically updates to include the newly added product.'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
