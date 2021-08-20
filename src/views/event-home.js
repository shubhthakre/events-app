import React from "react";

import { Col, Row, Container, Card, Button } from "react-bootstrap";

import Image from "react-bootstrap/Image";

import Footer from "./footer";

const Home = (props) => {
  const datas = props.datas;
  return (
    <div>
      {datas.map((data) => {
        return (
          <div>
            <Container
              fluid
              style={{
                backgroundColor: "#1b2029",
                color: "white",
              }}
            >
              {" "}
              <Row
                style={{
                  height: "300px",
                }}
              >
                <Col
                  sm={5}
                  style={{
                    padding: "8vw",
                    paddingTop: "3vw",
                    paddingRight: "0vw",
                  }}
                >
                  <p>DIGITAL MEETING</p>
                  <p>{data.date}</p>
                  <h1 style={{ fontSize: "2.5rem" }}>{data.title}</h1>
                </Col>
                <Col sm={5}>
                  <h2
                    style={{
                      fontSize: "1.2rem",
                      padding: "10vw",
                      paddingLeft: "2vw",
                      marginLeft: "0vw",
                    }}
                  >
                    Realizing a 'Great Reset' for Sustainable Development
                  </h2>
                </Col>
              </Row>
            </Container>
            <Container
              fluid
              style={{
                backgroundColor: "#101825",
                color: "white",
                height: "100vw",
              }}
            >
              <Row style={{ padding: "8vw", paddingTop: "2vw" }}>
                <Col xs={6} md={4}>
                  <Image
                    src="https://assets.weforum.org/tout/image/responsive_medium_yMLpolXHBKE84jMlg1o86IYFgQY3b8AGmPyfXpDLeUc.jpg"
                    thumbnail
                  />
                </Col>
                <Col sm={5}>
                  <p
                    style={{
                      fontSize: "1rem",
                      paddingLeft: "2vw",
                      paddingTop: "2vw",
                    }}
                  >
                    The COVID-19 crisis wreaked havoc on societies and economies
                    and dealt a major setback to achieving the 2030 Agenda and
                    the Paris Climate Agreement. Putting the world back on a
                    path of sustainable, equitable, and inclusive growth will
                    require more than a global recovery; it will require a Great
                    Reset of social and economic systems.
                  </p>
                  <Button variant="primary" style={{ margin: "2vw" }}>
                    Learn More
                  </Button>{" "}
                </Col>
                <Col sm={4}>
                  <p
                    style={{
                      fontSize: "1rem",
                      paddingTop: "2vw",
                    }}
                  >
                    Taking place in the context of the United Nations General
                    Assembly, the World Economic Forum’s fourth and, for the
                    first time, fully virtual Sustainable Development Impact
                    Summit will convene leaders from government, business,
                    international organizations and civil society along with a
                    diverse group of experts and innovators to initiate,
                    accelerate and scale-up entrepreneurial solutions to tackle
                    climate change and advance sustainable development.
                  </p>
                </Col>
                <Col
                  sm={4}
                  md={4}
                  style={{ marginRight: "2vw", paddingLeft: "2vw" }}
                >
                  <Image
                    src="https://assets.weforum.org/tout/image/responsive_medium_yMLpolXHBKE84jMlg1o86IYFgQY3b8AGmPyfXpDLeUc.jpg"
                    thumbnail
                  />
                </Col>
              </Row>
              <Container
                style={{
                  background: "#1b2029",
                  marginLeft: "8vw",
                  paddingBottom: "3vw",
                }}
              >
                <Row>
                  <Col sm={10} style={{ marginBottom: "0px" }}>
                    <h2 style={{ padding: "3vw", paddingBottom: "1vw" }}>
                      Join the Sustainable Development Impact Summit
                    </h2>
                    <h4
                      style={{
                        padding: "3vw",
                        paddingTop: "0px",
                        fontSize: "1.5rem",
                      }}
                    >
                      Become a World Economic Forum Digital Member to
                      participate in the summit
                    </h4>
                    <h4
                      style={{
                        padding: "3vw",
                        paddingTop: "0px",
                        fontSize: "1.2rem",
                      }}
                    >
                      Already a Partner of the World Economic Forum? Register
                      for the Summit directly on TopLink
                    </h4>
                    <Button variant="primary" style={{ marginLeft: "3vw" }}>
                      Learn More & Free Trial
                    </Button>{" "}
                    <Button variant="primary" style={{ marginLeft: "3vw" }}>
                      Register on TopLink
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row style={{ padding: "1.9vw" }}>
                  <Col sm={4}>
                    <Card
                      style={{
                        width: "23rem",
                        height: "25vw",
                        background: "#1b2029",
                      }}
                    >
                      <Card.Body>
                        <Card.Title>Our Partners</Card.Title>
                        <Card.Text>
                          World Economic Forum Partners are world-class
                          companies with a strong interest in developing
                          systemic solutions to key challenges Our Partners
                        </Card.Text>
                        <Button
                          variant="primary"
                          style={{ marginLeft: "6vw", marginTop: "9vw" }}
                        >
                          Our Partners
                        </Button>{" "}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={4}>
                    <Card
                      style={{
                        width: "23rem",
                        height: "25vw",
                        background: "#1b2029",
                      }}
                    >
                      <Card.Body>
                        <Card.Img
                          variant="top"
                          src="https://assets.weforum.org/tout/image/responsive_t…y_LM2OUR7Tr5Yw9OuSDCXx1etiBfs6wUP_SWZTuJSt-LU.jpg"
                        />
                        <Card.Title>UpLink</Card.Title>
                        <Card.Text>
                          UpLink is a digital platform that crowdsources
                          innovative solutions for the UN Sustainable
                          Development Goals (SDGs). Through its Challenges and
                          Action groups, UpLink seeks to connect the best
                          solutions to networks of industry leaders, experts,
                          and partners, to scale their initiative and accelerate
                          their impact.
                        </Card.Text>
                        <Button
                          variant="primary"
                          style={{ marginLeft: "6vw", marginTop: "2vw" }}
                        >
                          Visit UpLink
                        </Button>{" "}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={4}>
                    <Card
                      style={{
                        width: "23rem",
                        height: "25vw",
                        background: "#1b2029",
                      }}
                    >
                      <Card.Body>
                        <Card.Title>SDGs</Card.Title>
                        <Card.Text>
                          We've built a 3D virtual environment about the
                          Sustainable Development Goals and the champions
                          working to achieve them by 2030
                        </Card.Text>
                        <Button
                          variant="primary"
                          style={{ marginLeft: "6vw", marginTop: "10vw" }}
                        >
                          Learn More
                        </Button>{" "}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Container>
            <Container fluid>
              <Row
                style={{
                  padding: "8vw",
                  paddingTop: "2vw",
                  background: "#101825",
                  color: "white",
                }}
              >
                <Col sm={12}>
                  <h1>Event Highlights</h1>
                </Col>
                <Col sm={6} style={{ paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "43rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/7NlNESWOEqFlh5j_dJu5yoEJxgwG2o6nKM6eMvW-StQ.JPG"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "10vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col
                  sm={3}
                  style={{
                    paddingLeft: "1vw",
                    paddingTop: "2vw",
                  }}
                >
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_R4mS5OB_EJYRslY4Y2-wgJE1x9wtNAmQkQFuhZ1InEY.JPG"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={7} style={{ paddingLeft: "8vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "43rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_P5nlYH9cvGhuojRkC1UyDzJWYwY7k78sEPkTEBsXnRE.JPG"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={3} style={{ paddingLeft: "1vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>

                <Col sm={6} style={{ paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "43rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_lqwRrdaOE4z-PMq61Ihb12Ehax1eoBHUixwBqjEpM0I.JPG"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "10vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_j_zEL7KiZefgga-s8GjeXLG7Q_nAXhbOkiFSVA0LsSI.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={3} style={{ paddingLeft: "1vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={3} style={{ paddingLeft: "1vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={3} style={{ paddingLeft: "1vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
                <Col sm={4} style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
                  <Card>
                    <Card.Img
                      style={{ width: "21rem", height: "25rem" }}
                      variant="top"
                      src="https://assets.weforum.org/article/image/responsive_medium_upKIkztl__bfj5pwcxBxYyhEabQPyfUea-PnrI2VhEE.jpg"
                    ></Card.Img>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Container
              fluid
              style={{
                padding: "9vw",
                paddingTop: "1vw",
                background: "#101825",
                color: "white",
              }}
            >
              <Row>
                <Col sm={10}>
                  <h3>Updates from our partners</h3>
                </Col>
                <Col sm={10} style={{ paddingTop: "1vw", fontSize: "1.3rem" }}>
                  <p>
                    ConsenSys: Revolutionizing clinical trial based research
                  </p>
                </Col>
                <Col sm={2} style={{ paddingTop: "1vw", fontSize: "1rem" }}>
                  <p>Today</p>
                </Col>
                <Col sm={10} style={{ fontSize: "1.3rem" }}>
                  <p>
                    today Islamic Development Bank's call for innovation to save
                    women's lives from cancer
                  </p>
                </Col>
                <Col sm={2} style={{ fontSize: "1rem" }}>
                  <p>Today</p>
                </Col>
                <Col sm={10} style={{ fontSize: "1.3rem" }}>
                  <p>Biogen's Alzheimer's drug gets FDA approval</p>
                </Col>
                <Col sm={2} style={{ fontSize: "1rem" }}>
                  <p>Today</p>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Home;
