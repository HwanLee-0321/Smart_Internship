import React from 'react';
// react-bootstrap과 bootstrap CSS를 임포트합니다.
// npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
// 커스텀 CSS 파일을 임포트합니다.
import './Ex05Map.css';

// 부모 컴포넌트로부터 item 객체를 props로 받습니다.
const Ex05Map = ({ item }) => {
  return (
    // react-bootstrap의 Card 컴포넌트를 사용하여 정보를 표시합니다.
    <Card style={{ width: '18rem', margin: '1rem' }} className="shadow-sm h-100 card-hover">
      {/* 카드 이미지 */}
      <Card.Img variant="top" src={item.imgSrc} style={{width: '286px', height: '350px', objectFit: 'cover'}} />
      <Card.Body className="d-flex flex-column">
        {/* 카드 제목 (이름과 출생년도) */}
        <Card.Title className="text-center">{item.title} ({item.birthYear}년생)</Card.Title>
        {/* 카드 내용 (설명) */}
        <Card.Text className="text-center flex-grow-1">
          {item.content}
        </Card.Text>
        {/* SNS 링크로 이동하는 버튼 */}
        <Button href={item.SNS} variant="outline-primary" target='_blank' className="mt-auto">SNS</Button>
      </Card.Body>
    </Card>
  );
};

export default Ex05Map;