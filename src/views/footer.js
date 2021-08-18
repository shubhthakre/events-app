import { ArrowRight } from 'react-bootstrap-icons';

import { Col, Container, Row, Form } from 'react-bootstrap';

const Footer = () => {
  let url = '';
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: '#32363E',
          color: 'white',
        }}
      >
        <Row>
          <Col sm={4} style={{ padding: '9vw', paddingTop: '4vw' }}>
            <h4>World Events Forum</h4>
          </Col>
          <Col
            sm={4}
            style={{
              padding: '9vw',
              paddingTop: '4vw',
              paddingLeft: '1vw',
              paddingBottom: '1vw',
            }}
          >
            <h1 style={{ fontSize: '1.6rem' }}>Subscribe for updates</h1>
            <p>A weekly update of what’s on the Global Agenda</p>
          </Col>
          <Col
            sm={3}
            style={{
              padding: '9vw',
              paddingTop: '4vw',
              paddingLeft: '2vw',
              paddingBottom: '1vw',
            }}
          >
            <Form.Control placeholder="Email address" />
            <button
              style={{ background: 'blue', color: 'white', width: '3vw' }}
            >
              <ArrowRight />
            </button>
          </Col>
        </Row>
        <Row style={{ padding: '9vw', paddingTop: '1.5px' }}>
          <Col sm={3}>
            <h6>About</h6>
            <a href={url}>Contact us</a>
            <br></br>
            <a href={url}>History</a>
            <br></br>
            <a href={url}>Pictures</a>
            <br></br>
            <a href={url}>History</a>
            <br></br>
            <a href={url}>Contact us</a>
          </Col>
          <Col sm={3}>
            <h6>Media</h6>
            <a href={url}>Accreditation</a>
            <br></br>
            <a href={url}>news</a>
            <br></br>
            <a href={url}>Subscribe to our news</a>
            <br></br>
          </Col>
          <Col sm={3}>
            <h6>Members & partners</h6>
            <a href={url}>Accreditation</a>
            <br></br>
            <a href={url}>news</a>
            <br></br>
            <a href={url}>Subscribe to our news</a>
            <br></br>
          </Col>
          <Col sm={3}>
            <h6>Follow the World Economic Forum</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
