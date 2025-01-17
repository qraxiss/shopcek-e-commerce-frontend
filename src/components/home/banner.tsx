import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import img3 from "assets/images/home/1.png";
import img5 from "assets/images/home/2.png";

export const Banner = () => {
  return (
    <React.Fragment>
      <section className="trend-fashion-home">
        <div className="container-fluid container-custom">
          <Row className="g-0">
            <Col lg={4}>
              <Card
                className="home-widgets card-height-100 border-0 rounded-end-0"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundSize: "cover",
                }}
              >
                <Card.Body></Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="card-height-100 border-0 rounded-0 card-bg-gradient">
                <Card.Body className="px-4 px-lg-5 text-center d-flex align-items-center">
                  <div>
                    <h3 className="text-capitalize lh-base mb-2">
                      Welcome from the beyond.{" "}
                      <span className="ff-secondary">Fashion</span> Collection
                    </h3>
                    <p className="fs-16 mb-4">
                      {" "}
                      Future generations will prefer SHOPCEK for its unique
                      shopping experience.{" "}
                    </p>
                    <Button
                      variant="info"
                      type="button"
                      className="button-secondary rounded-3"
                    >
                      {" "}
                      See How <i className="bi bi-bag align-baseline ms-1"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card
                className="home-widgets card-height-100 border-0 rounded-start-0"
                style={{
                  backgroundImage: `url(${img5})`,
                  backgroundSize: "cover",
                }}
              >
                <Card.Body></Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};
