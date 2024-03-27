import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Scalable Distributed System Project - Twinder Dating App",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Scalable Distributed System Project
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Full Stack Book Recommendation Engine
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Stay Rental Web Application
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          • Developed a dating service platform using Java,
                          Redis, and AWS, achieving 100% success in handling
                          500K requests
                          <br />
                          • Built a multithreaded client and RESTful APIs using
                          Java HttpClient, Java Servlet and Swagger API
                          <br />
                          • Utilized Producer-Consumer pattern and RabbitMQ as
                          message broker middleware, enhancing system decoupling
                          <br />
                          • Deployed backend microservices with Apache Tomcat on
                          AWS EC2 instances, integrated AWS Elastic Load
                          <br />
                          Balancer for auto-scaling, and applied the CQRS design
                          pattern for system’s scalability and fast read
                          performance
                          <br />
                          • Performed load testing with Apache JMeter to assess
                          system performance under heavy usage
                          <br />
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          • Developed a web application for personalized book
                          recommendations based on user preferences and search
                          history
                          <br />
                          • Established frontend using Node.js and React Hooks.
                          Implemented backend with Java, Spring, and MyBatis
                          <br />
                          • Designed and implemented relational database using
                          Lucidchart and stored 20k data in PostgreSQL
                          <br />
                          • Integrated the OpenAI API to enhance book
                          recommendations with intelligent suggestions
                          <br />
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          • Developed an Airbnb-like full-stack web application
                          for home stay booking with frontend UI designed in
                          React.
                          <br />
                          • Built backend RESTful services with NodeJS to
                          achieve stay search, booking, reviews, stay upload
                          functionalities.
                          <br />
                          • Implemented token-based authentication methods with
                          JWT for both host and guest login.
                          <br />
                          • Stored stay pictures and videos in Google Cloud
                          Storage, and user and reservation data in a MySQL
                          database.
                          <br />• Deployed app to Google App Engine and built
                          CI/CD workflows by GitHub Actions to deploy future
                          improvements.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
