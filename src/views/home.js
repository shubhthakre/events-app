import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getEvents } from '../service/api';

function Home() {
  const events = getEvents();

  return (
    <div>
      <Row style={{ padding: '9vw', background: '#1b2029', color: 'white' }}>
        <Col sm={8}>
          <h1>Event</h1>
        </Col>
        <Col sm={10}>
          {events.map(event => (
            <Link to={`/event/${event.slug}`}>{event.title}</Link>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Home;
