import React from 'react';
import {Card} from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
    <Card className="text-center footer-content">
    <Card.Body>
      <Card.Title className='footer-text'>© 2023 Matthew A. Nguyen. All Rights Reserved.</Card.Title>
    </Card.Body>
  </Card>
    </div>
  );
}
