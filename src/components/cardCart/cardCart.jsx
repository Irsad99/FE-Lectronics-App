import React from 'react';
import style from './cardCart.module.css';
import logo from './trash.png';
import min from './min.png';
import plus from './plus.png';
import { Card } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

function Cards() {
  return (
      <Card className={style.parent}>
        <Card.Body className={style.container}>
          <FormCheckInput className={style.checkbox} inline type="checkbox" group="1" />
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
          <Card.Img className={style.img2} variant="top" src={logo} />
          <div className={style.add}>
            <Card.Img className={style.min} variant="top" src={min} />
            <div className={style.angka}>1</div>
            <Card.Img className={style.plus} variant="top" src={plus} />
          </div>
        </Card.Body>
      </Card>
  );
}

export default Cards;
