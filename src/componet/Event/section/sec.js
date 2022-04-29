import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './sec.css'
import { Container, Row, Col } from 'react-bootstrap' 
// import image1 from './image/p1.jpg'
// import image2 from './image/p2.jpg'


function App() {
    return (
        <div>
            <section className="sec">
            <Container>  
  <Row className="raw">  
    <Col className="photo"md={4}></Col>  
              <Col className="dateTime" md={3}>
                <p>Time <br /><br />
                  Date </p>
              </Col>  
    <Col className="venue">Discription</Col>  
            </Row> 
            
            <Row className="raw">  
    <Col className="photo"md={4}></Col>  
              <Col className="dateTime" md={3}>
                <p>Time <br /><br />
                  Date </p>
              </Col>  
    <Col className="venue">Discription</Col>  
            </Row> 
            <Row className="raw">  
    <Col className="photo"md={4}></Col>  
              <Col className="dateTime" md={3}>
                <p>Time <br /><br />
                  Date </p>
              </Col>  
    <Col className="venue">Discription</Col>  
            </Row> 
</Container>
        </section>
        </div>
    );
}
export default App