import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import cta from "assets/images/fashion/cta1.png";
import { choosedata } from "common/data/top-picks-data";

export const WhyChoose = () => {
  return (
    <React.Fragment>
      <section className="section py-0">
        <Container fluid className="container-custom">
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="section-content text-center mb-5 pb-3">
                <h2 className="title fw-normal">
                  <span>Why </span> <span className="fw-semibold"> Shop</span>{" "}
                  with us?
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            {(choosedata || [])?.map((item: any, key: any) => (
              <Col lg={3} key={key}>
                <Card className="border-0 text-center">
                  <Card.Body>
                    <div className="avatar-md mx-auto mb-4">
                      <div className="avatar-title bg-light text-reset fs-2 rounded">
                        <i className={item.icon}></i>
                      </div>
                    </div>
                    <h5>{item.header}</h5>
                    <p className="text-muted mb-0">{item.info}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container fluid className="container-custom">
          <Card className="border-0 overflow-hidden">
            <Row className=" g-0">
              <Col
                className="d-flex align-items-center"
                style={{ backgroundColor: "#D3D0C1" }}
                lg={5}
              >
                <img src={cta} alt="" className="img-fluid" />
              </Col>
              <Col lg={7}>
                <Card.Body className="bg-dark h-100 p-xxl-5">
                  <div className="p-4">
                    <p className="text-white opacity-75 text-uppercase fs-15">
                      PARTNERSHIP
                    </p>
                    <h1 className="lh-base text-capitalize text-white mb-3">
                      Your Ambition, Our Digital Execution
                    </h1>
                    <p className="text-white-50 mb-4 fs-15 pb-2">
                      Our mission is to transform your online presence into a
                      dynamic e-commerce store, enriched with tools and services
                      tailored to enhance your brand.
                    </p>
                    <p className="text-white-50 mb-0 fs-18 pb-2">Apply Now</p>
                    <Row>
                      <Col lg={7}>
                        <Form action="#">
                          <div className="subscribe-input position-relative">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Enter your email"
                            />
                            <Button
                              className="button-secondary"
                              type="submit"
                              variant="primary"
                            >
                              Apply Now
                            </Button>
                          </div>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
    </React.Fragment>
  );
};
