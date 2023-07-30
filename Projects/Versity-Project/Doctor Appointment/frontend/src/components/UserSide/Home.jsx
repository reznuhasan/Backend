import React from 'react';
//connect 
import '../../styles/home.css';
import doctorImg from '../../images/doctorBanner.png';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='banner'>
        <Container>
          <Row>
            <Col md={6} className='content-part'>
              <div className='title'>
                <h3>We Provide All Type Doctor Appointment</h3>
              </div>
              <h1>Protect Your Health And Take Care Of Your Health</h1>
              <Button className='btn'>
                <Link to="/doctors" className='btn-text'>Get A Appointment</Link>
              </Button>
            </Col>
            <Col md={1}/>
            <Col md={5} className='banner-img'>
              <img src={doctorImg} alt='Doctor' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
