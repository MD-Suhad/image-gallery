import React from 'react';
import { Container, Row,Col,Button } from 'react-bootstrap';
import './ImgGallery.css';
import {Gallery} from 'require("../images/image-1.png")'; 




const ImgGallery = () => {
  
   const imagesGallery = [

     






      {
         id:1,
         img:require('./images/images-1.png')
      },
      {
         id:2,
         img:require('./images/images-1.png')
      },
      {
         id:3,
         img:'./images/image-3.webp'
      },
      {
         id:4,
         img:'./images/image-4.webp'
      },
      {
         id:5,
         img:'./images/image-5.webp'
      },
      {
         id:6,
         img:'./images/image-6.webp'
      },
      {
         id:7,
         img:'./images/image-7.webp'
      },
      {
         id:8,
         img:'./images/image-8.webp'
      },
      {
         id:9,
         img:'./images/image-9.webp'
      },
      {
         id:10,
         img:'./images/image-10.webp'
      }
   ];

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
                 <div className='image-gallery'>
                   {
                     imagesGallery.map((image) => {
                        <li key ={ image.id}>
                           <img src ={require(image.img)} alt="Not  supported" />
                        </li>
                        
                     })
                   }
                 </div>
                 <div>

                 </div>
               </Col>
            </Row>
         </Row>
      </Container>
   );
};

export default ImgGallery;