import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/fronted.jpg"
import projImg2 from "../assets/img/cloud.avif";
import projImg3 from "../assets/img/backend.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "UI/UX designer",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    
    {
      title: "Frontend Development",
      description: "Design & Development",
      imgUrl: projImg2,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                 <h2>Experience</h2>
                 
                    <h4 id="company"> Working in Tirukamal Innovative Solution Pvt Ltd </h4>
                    <h4 id="role">as a Front-end Developer. </h4>

                 <h2>Education</h2>
                    <p>I have Completed my Bachelor of Engineering from Sipna College of Engineering and Technology, Amravati in Computer Science and Engineering.</p>
                <h2>Projects</h2>
                <p> working on the HR Portal Projet. Designed all the moke screens my using draw.io and canva. Developing the screens by using Html, css, Bootstrap, JavaScript. 
                  Firstly Designed the Attendace page by using React js.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                   
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                     
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                  
                      <p>Full-stack developers have a high level of competency in both frontend and backend languages. They are skilled in HTML, CSS, JavaScript, NodeJS, ExpressJS Equally full-stack developers understand various database management systems (DBMS) like MySQL, PostgreSQL, MongoDB, and more</p>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third">
                    <h2>Education</h2>
                      <p>I have Completed my Bachelor of Engineering from Sipna College of Engineering and Technology, Amravati in Computer Science and Engineeging.</p>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
