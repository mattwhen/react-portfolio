import React from 'react';
import thingamabobs from '../../utils/thingamabobs-live-screenshot.png';
import cultureCruncher from '../../utils/cultureCruncher-live-app.png';
import { Card, Button, CardGroup } from 'react-bootstrap';

export default function Portfolio() {
	return (
    <>
 <CardGroup>
      <Card>
        <Card.Img variant="top" src={cultureCruncher} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">See Live Application</Button>
          <Button variant="primary">See Github Repository</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={thingamabobs} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button variant="primary">See Live Application</Button>
          <Button variant="primary">See Github Repository</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src='filler' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button variant="primary">See Live Application</Button>
          <Button variant="primary">See Github Repository</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  </>
	);
}
