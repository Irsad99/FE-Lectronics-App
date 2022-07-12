import React from "react";
import {
  Card,
  Button,
} from "react-bootstrap";
import style from "./cardRec.module.css";
import "../../index.css";

function Cards() {
  return (
    <>
      <div
        className={style.cardCont}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Card className={style.card}>
          <Card.Body className={style.body_ut}>
            <div className={style.title}>
              <a href="#" className={style.card_name}>
                Sennheiser HD-25
              </a>
            </div>
            <div className={style.detail}>
              <div>
                <a className={style.card_price}>$3000</a>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/2YCQs1S/Vector.png"
                  alt=""
                  style={{ padding: "0 0 4px" }}
                />
                <a className={style.card_rate}>4.9</a>
              </div>
            </div>
          </Card.Body>
          <div style={{ padding: "27px", margin: "-140px 0px" }}>
            <Card.Img
              variant="top"
              src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1"
            />
            <Card.Body style={{ display: "flex" }}>
              <Button className={style.but_detail} style={{ width: "100%" }}>
                Detail
              </Button>
              <Button className={style.but_cart}>
                <img
                  src="https://i.ibb.co/CK2X9RQ/Vector.png"
                  alt=""
                  style={{ width: "20px" }}
                />
              </Button>
            </Card.Body>
          </div>
        </Card>
        <Card className={style.card}>
          <Card.Body className={style.body_ut}>
            <div className={style.title}>
              <a href="#" className={style.card_name}>
                Sennheiser HD-25
              </a>
            </div>
            <div className={style.detail}>
              <div>
                <a className={style.card_price}>$3000</a>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/2YCQs1S/Vector.png"
                  alt=""
                  style={{ padding: "0 0 4px" }}
                />
                <a className={style.card_rate}>4.9</a>
              </div>
            </div>
          </Card.Body>
          <div style={{ padding: "27px", margin: "-140px 0px" }}>
            <Card.Img
              variant="top"
              src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1"
            />
            <Card.Body style={{ display: "flex" }}>
              <Button className={style.but_detail} style={{ width: "100%" }}>
                Detail
              </Button>
              <Button className={style.but_cart}>
                <img
                  src="https://i.ibb.co/CK2X9RQ/Vector.png"
                  alt=""
                  style={{ width: "20px" }}
                />
              </Button>
            </Card.Body>
          </div>
        </Card>
        <Card className={style.card}>
          <Card.Body className={style.body_ut}>
            <div className={style.title}>
              <a href="#" className={style.card_name}>
                Sennheiser HD-25
              </a>
            </div>
            <div className={style.detail}>
              <div>
                <a className={style.card_price}>$3000</a>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/2YCQs1S/Vector.png"
                  alt=""
                  style={{ padding: "0 0 4px" }}
                />
                <a className={style.card_rate}>4.9</a>
              </div>
            </div>
          </Card.Body>
          <div style={{ padding: "27px", margin: "-140px 0px" }}>
            <Card.Img
              variant="top"
              src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1"
            />
            <Card.Body style={{ display: "flex" }}>
              <Button className={style.but_detail} style={{ width: "100%" }}>
                Detail
              </Button>
              <Button className={style.but_cart}>
                <img
                  src="https://i.ibb.co/CK2X9RQ/Vector.png"
                  alt=""
                  style={{ width: "20px" }}
                />
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Cards;
