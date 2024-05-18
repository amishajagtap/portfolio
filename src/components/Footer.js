import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          <Col size={12} sm={6} className="text-center text-sm-end">
        
            <div className="social-icon">
            <p>Contact Us :- +919860382387</p>
            <p>Gmail :- jagtapamisha9@@gmail.com</p>
            <p>Pune, Maharashtra, India 411058</p>
              <a className="in" href="https://www.linkedin.com/in/amisha-jagtap-7691b1219/"><img src={navIcon1} alt="Icon" /></a>
              
              
            </div>  
          </Col>
        </Row>
      </Container>
  
    </footer>
  )
}
