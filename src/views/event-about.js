import db from '../firebase/firebase';
import { useEffect, useState } from 'react';

import { Col, Container, Row, Card } from 'react-bootstrap';
import Footer from './footer';
function Home() {
  const [datas, setData] = useState([]);
  let url = '';

  useEffect(() => {
    fetchBlogs();
  });

  const fetchBlogs = async () => {
    const response = db.collection('data');
    const data = await response.get();
    data.docs.forEach(item => {
      setData([...datas, item.data()]);
    });
  };

  return (
    <div className="App">
      {datas.map(data => {
        return (
          <div className="blog-container">
            <Container
              fluid
              style={{
                backgroundColor: '#101825',
                color: 'white',
              }}
            >
              <Row
                className="justify-content-center align-items-center"
                style={{
                  height: '300px',
                }}
              >
                <Col sm={10}>
                  <h1 style={{ fontSize: '1.6rem' }}>{data.title}</h1>
                  <p>{data.card}</p>
                </Col>
              </Row>
            </Container>

            <Container
              fluid
              style={{
                backgroundColor: '#1b2029',
                color: 'white',
              }}
            >
              <Row
                className="justify-content-center"
                style={{
                  padding: '80px 0px',
                }}
              >
                <Col md={8}>
                  <h1 style={{ fontSize: '1.2rem' }}>{data.desc1}</h1>
                  <h2 style={{ fontSize: '1rem', marginTop: '40px' }}>
                    {data.desc2}
                  </h2>
                </Col>
                <Col md={2}>
                  <h1 style={{ fontSize: '1.2rem' }}>Relevant Links</h1>
                  <a href={url}>Meeting overview</a>
                </Col>
              </Row>
            </Container>
            <Container
              fluid
              style={{
                color: 'white',
                padding: '9vw',
                backgroundColor: '#222833',
                marginTop: '0px',
                paddingTop: '5vw',
              }}
            >
              <h1>Co-chairs</h1>
              <Row className="justify-content-md-auto">
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/oiD2PxWLWLkDLhdjGLttWPjt9pape8hotzEqaoyq0vU.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{data.cardt1}</Card.Title>
                    <Card.Text>
                      Chief Executive Officer, Majid Al Futtaim Holding
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/FTivm1Dt1yS7OvwDxWQUpfwUJm2p4MDzHjWPVZz_0eI.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{data.cardt2}</Card.Title>
                    <Card.Text>
                      President of Colombia, Office of the President of Colombia
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/MSiIsGL_-pWBdM_mDCErZwunlx4jGXv20eT8TWrbtf4.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{data.cardt3}</Card.Title>
                    <Card.Text>Founding Director, Walk Free</Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/kKZdj7Ixm24GyqH_Jo4O7tBNJU9neKVa53oUnG-5RkM.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{data.cardt4}</Card.Title>
                    <Card.Text>
                      President and Chief Executive Officer, Conrad N. Hilton
                      Foundation
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                    paddingBottom: '10px',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/bq0aaIlFUAeHix8W3pNh7kVBcZYixsGC6BBgW_jwctI.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Rebecca Masisak</Card.Title>
                    <Card.Text>
                      Chief Executive Officer, TechSoup Global
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                    paddingBottom: '10px',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/eSn8lSu6lLdIbdFVoOAKRRZUIXoRu-qawgcDM5jdzt0.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Hindou Oumarou Ibrahim )</Card.Title>
                    <Card.Text>
                      President, Association for Indigenous Women and Peoples of
                      Chad (AFPAT
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                    paddingBottom: '10px',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/nvqlh_fkprMfTfp58npm5ycOvLdmSk-AvCysEGG73gc.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Anushka Ratnayake</Card.Title>
                    <Card.Text>
                      Founder and Chief Executive Officer, myAgro
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: '18rem',
                    backgroundColor: '#222833',
                    color: 'white',
                    paddingBottom: '10px',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://assets.weforum.org/sf_account/image/m1o6qwfsuJOY6BrENDsxLlhymOiXdGI_5iR2uHpG6RM.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Tiffany Yu</Card.Title>
                    <Card.Text>Global Shaper, San Francisco Hub</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Container>
            <Footer />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
