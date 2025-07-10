import React from 'react';
//  npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  // 부트스트랩 CSS를 적용하는 코드
import {Card, Button} from 'react-bootstrap'

import './Ex05Map.css';

const Ex05Map = ({ item }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="shadow-sm h-100 card-hover">
      <Card.Img variant="top" src={item.imgSrc} style={{width: '286px', height: '350px', objectFit: 'cover'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center">{item.title} ({item.birthYear}년생)</Card.Title>
        <Card.Text className="text-center flex-grow-1">
          {item.content}
        </Card.Text>
        <Button href={item.SNS} variant="outline-primary" target='_blank' className="mt-auto">SNS</Button>
      </Card.Body>
    </Card>
  );
};

export default Ex05Map;