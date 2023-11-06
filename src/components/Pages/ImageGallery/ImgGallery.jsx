import React from 'react';
import { Container, Row,Col,Button } from 'react-bootstrap';
import './ImgGallery.css';


const ImgGallery = () => {

   return (
      <Container>
         <Row className="container-body">
            <Row className="header-part">
               <Col xs={12} md={6}>
                  <h3>Gallery</h3>
               </Col>
               <Col xs={12} md = {6}>
               <Button variant="secondary" size="sm">
          Delete Files
        </Button>
               </Col>
            </Row>
            <Row>
               <Col xs={12} md={12}>
                  
               </Col>
            </Row>
         </Row>
      </Container>
   );
};

export default ImgGallery;