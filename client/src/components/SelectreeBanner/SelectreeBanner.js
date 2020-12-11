import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./SelectreeBanner.css";
// subcomponents
import SearchByName from "../SearchByName/SearchByName";

class SelectreeBanner extends React.Component {
  render() {
    return (
      <Container fluid style={{ position: 'relative', zIndex: '1000' }}>
        <Jumbotron className="Jumbotron-fluid bg-white p-0 selectree-banner-jumbotron">
          <Row className="selectree-banner-container">
            <Col lg={{ span: 5, offset: 1 }} className="selectree-banner-search-container">
              <h1 className="selectree-banner-jumbo-h1">SelecTree</h1>
              <SearchByName />
            </Col>
            <Col xs={{ span: 5, offset: 1 }} className="d-none d-lg-inline-block px-0 selectree-banner-image-container">

            </Col>
          </Row>
        </Jumbotron>
      </Container>


    );
  }
}

export default SelectreeBanner;
