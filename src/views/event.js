import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import Home from './event-home';
import About from './event-about';

function Event() {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to={`${url}/home`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={`${url}/about`}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path={`${path}/about`}>
          <About />
        </Route>

        {/* Home */}
        <Route path={`${path}/home`}>
          <Home />{' '}
        </Route>
        <Route exact path={`${path}`}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default Event;
