import { Button, Col, Row } from "antd";

export default function Footer() {
  return (
    <footer className="hp-position-relative hp-bg-black-20 hp-bg-dark-100 hp-pt-sm-64 hp-pt-120 hp-pb-24 hp-overflow-hidden">
      <div className="hp-landing-footer-circle hp-bg-color-black-60 hp-bg-color-dark-40"></div>

      <div className="hp-landing-container">
        <Row justify="space-between" className="hp-mb-sm-64 hp-mb-120">
          <Col lg={8} md={16} span={24}>
            <p className="h5 hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-32">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <Button className="hp-bg-black-100 hp-text-color-black-0">
              Ask Question
            </Button>
          </Col>

          <Col lg={14} span={24} className="hp-mt-md-64">
            <Row>
              <Col flex="1 0 0">
                <span className="hp-p1-body hp-font-weight-500 hp-mb-16">
                  COMMUNITY
                </span>

                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  For Talents
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  For Companies
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Facebook Group
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  FAQ
                </a>
              </Col>

              <Col flex="1 0 0">
                <span className="hp-p1-body hp-font-weight-500 hp-mb-16">
                  ABOUT US
                </span>

                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Meet the Team
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Career
                </a>
              </Col>

              <Col flex="0 0 260px" className="hp-mt-sm-32">
                <span className="hp-p1-body hp-font-weight-500 hp-mb-16">
                  CONTACTS
                </span>

                <p
                  style={{ marginTop: 10 }}
                  className="h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-my-16"
                >
                  Feel free to get in touch with us <br />
                  via phone or send us a message.
                </p>

                <a href="mailto:info@hypeople.studio">info@hypeople.studio</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
