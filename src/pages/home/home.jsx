import React from 'react';
import Navbar from '../../components/navbar/navbar_new';
import Navcard from '../../components/navcard/navcard';
import style from './home.module.css';
import background from './bg1.jpg';
import logo from './Logo.png';
import coin from './coin.png';
import box from './box.png';
import img from './img.png';
import Cards from '../../components/cardland/cardland';
import { Card, Container, Button, Form } from 'react-bootstrap';
import Footer from '../../components/footer/footer'
import {Link, useNavigate} from 'react-router-dom'

function Home() {

  const navigasi = useNavigate()
  const navigasi1 = useNavigate()

    const goto = () => {
        navigasi('/register')
    }
    const gotoLogin = () => {
        navigasi1('/login')
    }

  return (
    <>
      <Navbar />
      <div className={style.background}>
        <div className={style.content}>
          <div className="row">
            <div className="col">
              <div className={style.text1}>Take Your Time</div>
              <div className={style.text1}>And Shop</div>
              <div className={style.text1}>Anywhere</div>
              <div className={style.text2}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit..
              </div>
              <br />
              <div className={style.button}>
                <button type="button" onClick={gotoLogin} className="btn btn-primary me-md-2">
                  Shop Now
                </button>
                <button type="button" onClick={goto} className="btn btn-outline-primary">
                  Be a Seller
                </button>
              </div>
            </div>
            <div className="col">
              <img
                width="684px"
                height="456px"
                className={style.logo}
                src={background}
                alt="background"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <Card
            bg={'light'}
            style={{ width: '147px', height: '52px' }}
            className={style.cardChild}
          >
            <Card.Title className={style.title3}>How it Works</Card.Title>
          </Card>
        </div>
        <div className={style.text3}>Make An</div>
        <div className={style.text3}>Order Easily</div>
        <div className={style.cardParent}>
          <Card className={style.card}>
            <div className={style.imgParent}>
              <Card.Img className={style.img} variant="top" src={logo} />
            </div>
            <Card.Body className={style.cardBody}>
              <Card.Title className={style.title}>Select Product</Card.Title>
              <Card.Text className={style.isi}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card2}>
            <div className={style.imgParent}>
              <Card.Img className={style.img} variant="top" src={coin} />
            </div>
            <Card.Body className={style.cardBody}>
              <Card.Title className={style.title2}>Make Payment</Card.Title>
              <Card.Text className={style.isi2}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card2}>
            <div className={style.imgParent}>
              <Card.Img className={style.img} variant="top" src={box} />
            </div>
            <Card.Body className={style.cardBody}>
              <Card.Title className={style.title2}>Receive Product</Card.Title>
              <Card.Text className={style.isi2}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container">
        <div>
          <Card
            bg={'light'}
            style={{ width: '147px', height: '52px' }}
            className={style.cardChild}
          >
            <Card.Title className={style.title3}>Our Product</Card.Title>
          </Card>
        </div>
        <div className={style.text3}>The Best Product By</div>
        <div className={style.text3}>Lectronic</div>
        <Navcard />
      </div>
      <Container>
        <Cards />
      </Container>
      <div>
        <Button href="login" className={style.button2} variant="primary">
          View All
        </Button>
      </div>

      <Card.Img className={style.img2} variant="top" src={img} />
      <div className={style.promo}>
        <div className={style.textpromo}>Get 30% off of</div>
        <div className={style.textpromo}>Your First</div>
        <div className={style.textpromo}>Purchases</div>
        <p className={style.textemail}>
          Enter your Email Below To Receive The Discount Code
        </p>
        <div className={style.email_sub}>
          <Form.Control
            className={style.form}
            type="email"
            placeholder="Enter Your Email"
          />
          <Button href="login" className={style.btnemail} variant="primary">
            Submit
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
