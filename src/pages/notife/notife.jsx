import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import style from './notife.module.css';
import logo from './logo.png';
import Header from '../../components/header/navbar';
import Cards from '../../components/cardRec/cardRec';

function Cart() {
  return (
    <>
      <Header />
      <div className={style.cardCart}>
        <div>
          <Card className={style.change}>
            <div className={style.position}>
              <Card.Img className={style.img} variant="top" src={logo} />
              <div className={style.text}>Transaction Success</div>
              <div className={style.text2}>
                Transaction was successful, do you want to shop again?
              </div>
              <Button className={style.but_checkout} style={{ width: '18%' }}>
                Shop Again
              </Button>
            </div>
          </Card>
          <div className={style.text3}>Recommendation for You</div>
          <Container>
            <Cards />
          </Container>
        </div>
      </div>
    </>
  );
}

export default Cart;
