import React from 'react'

import Card from 'react-bootstrap/Card';

import img4 from '../assets/img4.webp'

function Cardes() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardes;