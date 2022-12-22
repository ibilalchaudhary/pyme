import React from "react";

import { Col, Row } from "antd";

import Immutabke from "../../assets/Immutabke.jpg";
import OKX from "../../assets/OKX.png";
import Earnifi from "../../assets/Earnifi.png";
import Unifarm from "../../assets/Unifarm.png";
import forbes from "../../assets/slack.png";

export default function Brands() {
  return (
    <section className="hp-landing-companies hp-overflow-hidden hp-pt-64 hp-pb-sm-64 hp-pb-120">
      <div className="hp-landing-container brand_container">
        <Row gutter={[50, 24]} align="middle" justify="center">
          <Col>
            <img src={Immutabke} alt="GeekWire" />
          </Col>

          <Col>
            <img src={OKX} alt="Slack" />
          </Col>

          <Col>
            <img src={Earnifi} alt="Envato" />
          </Col>

          <Col>
            <img src={Unifarm} alt="USA Today" />
          </Col>

          <Col>
            <img src={Unifarm} alt="Forbes" />
          </Col>
        </Row>
      </div>
    </section>
  );
}
