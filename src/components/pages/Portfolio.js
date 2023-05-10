import React from 'react';
import thingamabobs from '../../utils/thingamabobs-live-screenshot.png';
import cultureCruncher from '../../utils/cultureCruncher-live-app.png';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Portfolio() {
	return (
		<>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={cultureCruncher} />
            <Card.Img variant="top" src={thingamabobs} />
            <Card.Img variant="top" src={thingamabobs} />
            <Card.Body>
              <Card.Title>Culture Cruncher</Card.Title>
              <Card.Text>
                *Describe project here...*
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
		</>
	);
}
