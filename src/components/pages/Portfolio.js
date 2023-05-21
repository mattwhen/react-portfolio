import React from 'react';
import thingamabobs from '../../utils/thingamabobs-live-screenshot.png';
import cultureCruncher from '../../utils/cultureCruncher-live-app.png';
import blurryImg from '../../utils/blurryimg.jpeg';
import { Card, Button, CardGroup } from 'react-bootstrap';


export default function Portfolio() {

	return (
    <>
 <CardGroup>
      <Card>
        <Card.Img variant="top" src={cultureCruncher} className='project-img'/>
        <Card.Body>
          <Card.Title>Culture Cruncher</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">See Live Application</Button>
          <Button variant="primary">See Github Repository</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={thingamabobs} className='project-img'/>
        <Card.Body>
          <Card.Title>Thingamabobs</Card.Title>
          <Card.Text>
          Collaborated in developing a dynamic application that enables users to browse and 
          buy items from a catalog and add them to their cart. Implemented user authentication to allow users to 
          create profiles or sign in to existing ones. Customized the interface to display certain features only when users 
          are signed in, such as showing the full catalog, while limiting display to 10 items for users who are not signed in.
          </Card.Text>
          <Button variant="primary">See Live Application</Button>
          <Button variant="primary">See Github Repository</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={blurryImg} />
        <Card.Body>
          <Card.Title>Project coming soon...</Card.Title>
          <Card.Text>
           This project is currently in progress! Stay tuned for the finished product!
          </Card.Text>
          <Button variant="primary">See Live Application</Button>
          <Button variant="primary">See Github Repository</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  </>
	);
}
