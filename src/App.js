import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Event from './views/event';
import Events from './views/events';
import Home from './views/home';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/">
                  Agenda
                </Nav.Link>
                <Nav.Link as={Link} to="/events">
                  Events
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Reports
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Platforms
                </Nav.Link>
              </Nav>

              <Nav className="mx-auto">
                <Navbar.Brand as={Link} to="/">
                  World Events Forum
                </Navbar.Brand>
              </Nav>

              <Nav>
                <Nav.Link as={Link} to="/">
                  <Button variant="outline-primary">Sign Up</Button>
                </Nav.Link>

                <Nav.Link as={Link} to="/">
                  <Button variant="outline-dark"> Log In</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/event/:slug">
            <Event />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
