import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
{
  /* <span className="purple">Srikanth Gunalapuri </span> */
}
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Srikanth Gunalapuri </span> from Hyderabad,{" "}
            India. <br />I am currently working as a Front-End Developer at
            <span className="purple"> Metrolabs Services Pvt. Ltd.</span>,
            Hyderabad, since March 2022.
            <br />
            <br />I have 3 years of experience in designing and developing
            responsive, user-friendly web applications using React.js, Redux,
            JavaScript, HTML5, CSS3, and modern UI frameworks.
            <br />
            <br />I have completed Bachelor of Commerce,
            <span className="purple"> Nagarjuna.Govt Degree College, </span>
            Nalgonda 2020
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              🎮 Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight />
              🌍 Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Srikanth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
