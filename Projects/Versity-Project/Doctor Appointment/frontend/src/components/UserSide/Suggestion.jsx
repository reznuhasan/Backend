import React from 'react'
import '../../styles/suggestion.css'
import {Container, Row, Col,Image,Button } from 'react-bootstrap'

const Suggestion = () => {
  return (
    <Container>
        <div className="suggestionBox">
              <Row>
                <Col xs={6} md={4}>
                  <Image className='suggimg' src="./assets/image/yoga.jpg" rounded />
                </Col>
                <Col xs={12} md={8}>
                 <p>Yoga's positive impact extends beyond the physical realm. Regular practice can enhance mental clarity, focus, and cognitive function. Meditation techniques incorporated in yoga cultivate mindfulness, which can improve emotional regulation and overall mental resilience. The practice encourages self-awareness and self-acceptance, fostering a sense of inner contentment and reducing negative thought patterns.</p>
                 <Button variant="outline-success">Learn More . . .</Button>
                 <hr></hr>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={4}>
                  <Image className='suggimg' src="./assets/image/care.jpg" rounded />
                </Col>
                <Col xs={12} md={8}>
                 <p style={{marginTop:'13px'}} >It's recommended that individuals with diabetes work closely with their healthcare providers to develop a personalized treatment plan that addresses their specific needs and goals. Additionally, staying informed about the latest developments in diabetes care can help individuals make informed decisions about their health. For the most up-to-date information on diabetes treatment and research, it's best to consult with a medical professional or refer to reputable medical sources.</p>
                 <Button variant="outline-success">Learn More . . .</Button>
                 <hr></hr>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={4}>
                  <Image className='suggimg' src="./assets/image/fruits.jpeg" rounded />
                </Col>
                <Col xs={12} md={8}>
                 <p style={{marginTop:'13px'}} >A balanced diet is key, so aim for variety and moderation. While these foods offer numerous health benefits, individual dietary needs and preferences can vary. Consulting with a registered dietitian or healthcare professional can help you create a personalized and sustainable healthy eating plan.developments individuals make informed decisions about their health. For the most up-to-date information on diabetes treatment and research, it's best to consult with a medical professional</p>
                 <Button variant="outline-success">Learn More . . .</Button>
                 <hr></hr>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Suggestion