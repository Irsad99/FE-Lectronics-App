import React from "react";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";
import style from "./cart.module.css";
import logo from "./logo.png";
import person from "./person.png";
import Header from "../../components/header/navbar";
import CardCart from "../../components/cardCart/cardCart";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

function Cart() {
  return (
    <>
      <Header />
      <div className="head">
        <InputGroup className={style.parent}>
          <FormControl
            className={style.input_search}
            placeholder="Tap To Search For Something"
            aria-label="Tap To Search For Something"
            aria-describedby="basic-addon2"
          />
          <Button className={style.btn_search} id="button-addon2">
            <img src="https://i.ibb.co/PWtqWHZ/Vector.png" alt="" />
          </Button>
          <div className={style.but_alt}>
            <Button className={style.btn_w}>
              <img src={person} alt="" />
            </Button>
            <Button className={style.btn_w}>
              <img src={logo} alt="" />
            </Button>
          </div>
        </InputGroup>
      </div>
      <div className={style.title}>
        <div className={style.text}>Cart</div>
        <div className={style.sel}>
          <FormCheckInput className={style.select} inline type="checkbox" />
          <div className={style.text2}>Select All</div>
        </div>
      </div>
      <div className={style.cardCart}>
        <div>
          <CardCart />
        </div>
        <div>
          <Card className={style.card_total}>
            <Card.Body className={style.cardBody}>
              <Card.Title className={style.total}>Total</Card.Title>
              <div className={style.price}>
                <Card.Text className={style.title_price}> Item Price</Card.Text>
                <Card.Text className={style.cost_price}> $0</Card.Text>
              </div>
              <div className={style.dsc}>
                <Card.Text className={style.title_dsc}> Discount</Card.Text>
                <Card.Text className={style.cost_dsc}> $6000</Card.Text>
              </div>
              <div>
                <hr className={style.line} />
              </div>
              <div className={style.bill}>
                <Card.Text className={style.title_bill}> Bill</Card.Text>
                <Card.Text className={style.cost_bill}> $6000</Card.Text>
              </div>
              <Button className={style.but_checkout} style={{ width: "97%" }}>
                Check Out
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cart;
