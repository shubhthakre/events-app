import React from "react";
import db from "../firebase/firebase";
import { useEffect, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import Home from "./event-home";
import About from "./event-about";

function Event() {
  const { path, url } = useRouteMatch();

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetchBlogs();
  });

  const fetchBlogs = async () => {
    const response = db.collection("data");
    const data = await response.get();
    data.docs.forEach((item) => {
      setData([...datas, item.data()]);
    });
  };

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
          <About datas={datas} />
        </Route>

        {/* Home */}
        <Route path={`${path}/home`}>
          <Home datas={datas} />{" "}
        </Route>
        <Route exact path={`${path}`}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default Event;
