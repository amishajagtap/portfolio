import { useState, useEffect } from "react";
import { Col,  } from "react-bootstrap";

 export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <h1 id="thanks"> THANK YOU..</h1>
        </div>
      </Col>
  )
}
