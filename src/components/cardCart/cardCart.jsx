import React from 'react';
import style from './cardCart.module.css';
import { Card } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

function Cards() {
  return (
    <Card className={style.container}>
      <Card.Body className={style.container}>
        <FormCheckInput className={style.checkbox} inline type="checkbox" />
        <Card.Img
          className={style.img}
          variant="top"
          src="https://res.cloudinary.com/dsifbeghc/image/upload/v1657347504/lectronic/avatar/f6d39e797038419b-Samsung.jpg.jpg"
        />
        <div className={style.title}>
          <Card.Title className={style.title2}>Iphone Terbaru</Card.Title>
          <Card
            bg={'primary'}
            style={{ width: '8rem', height: '2rem' }}
            className={style.cardChild}
          >
            <Card.Title className={style.title3}>Air Conditioner</Card.Title>
          </Card>
          <Card.Title className={style.title4}>$3000</Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
