import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Image,
  Container
} from "react-bootstrap";
import "./selectreeNavbar.css";

class SelectreeNavbar extends React.Component {
  render() {
    return (
      <Container fluid>
        <Navbar expand="xl" className="selectree-navbar bg-white">
          <Navbar.Brand href="/" className="col-2">
            <Image
              src={`${process.env.PUBLIC_URL}/images/logos/ufei_palms.png`}
              className="selectree-navbar-logo"
              fluid
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col-10 mr-auto d-flex justify-content-between">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/selectree">SELECTREE</Nav.Link>
              <Nav.Link href="#link">URBAN TREE KEY</Nav.Link>
              <Nav.Link href="#link">FORESTREE</Nav.Link>
              <Nav.Link href="#link">BIG TREES</Nav.Link>
              <Nav.Link href="#link">URBAN WOOD</Nav.Link>
            </Nav>
            <Button className="btn btn-success">LOG IN</Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default SelectreeNavbar;
