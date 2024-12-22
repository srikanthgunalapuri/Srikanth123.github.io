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
              imgPath={chatify}
              isBlog={false}
              title="E-commerce"
              description='I developed e-commerce website built with React, when a user clicks the "Add to Cart" button, the selected product gets added to their cart list. Simultaneously, the count of items in the cart increases, reflecting the addition. Additionally, the total price of the cart dynamically updates to include the newly added product.'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vedarushi"
              description="Developed a web online platform enabling users to book poojas, birthday wishes,vrathalu, and homalu ceremonies online. Implemented user-friendly interfaces forseamless booking experiences, facilitating smoother communication between users andpriests."
              // ghLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quiz App"
              description=" Developed a web-based quiz application allowing users to take
              online exams and view their results and percentages.
              "
              // ghLink="https://github.com"
            />
          </Col>
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
