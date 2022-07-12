import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import style from "./checkout.module.css";
import Header from "../../components/header/navbar";
import CardCart from "../../components/cardCart/cardCart";

function Cart() {
  return (
    <>
      <Header />
      <div className={style.title}>
        <div className={style.text}>Checkout</div>
      </div>
      <div className={style.cardCart}>
        <div>
          <Card className={style.change}>
            <Card.Title className={style.title_deliv}>
              Delivery address
            </Card.Title>
            <div className={style.change_add}>
              <Form.Control
                className={style.form}
                as="textarea"
                placeholder="Enter Your Address"
              />
              <Button
                className={style.but_change}
                variant="outline-primary"
                style={{ width: "40%", height: "40%" }}
              >
                Change Address
              </Button>
            </div>
          </Card>
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
                Pay Bills
              </Button>
              <Form.Select
                className={style.but_payment}
                style={{ width: "97%" }}
              >
                <option value="" selected disabled hidden>
                  Choose Payment Method
                </option>
                <option value="Gopay">Gopay</option>
                <option value="Paypal">Paypal</option>
                <option value="Ovo">Ovo</option>
                <option value="BCA">BCA</option>
                <option value="Credit Card">Credit Card</option>
              </Form.Select>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cart;
