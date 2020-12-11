import React from "react";
import { Container, Row } from "react-bootstrap";
import "./QuickLinks.css";
import { FaHome, FaSearch, FaQuestion } from "react-icons/fa";
class QuickLinks extends React.Component {
  render() {
    return (
      <Container className="mb-0 quicklinks-container" fluid style={{ position: 'relative', zIndex: '0' }}>
        <Row className="bg-secondary">
          <Row className="col-10 offset-1 d-flex justify-content-around
         quicklinks-row">
            <a href="#" className="btn-circle-md bg-success quicklinks-link">
              <span>
                <FaSearch className="btn-icon" />
                <p className="text-dark quicklink-text-1 d-lg-block d-none">
                  SEARCH BY CHARACTERISTICS
                </p>
              </span>
            </a>

            <a href="#" className="btn-circle-md bg-success quicklinks-link">
              <span>
                <FaHome className="btn-icon" />
                <p className="text-dark quicklink-text-2 d-lg-block d-none">
                  SELECTREE HOME
                </p>
              </span>
            </a>
            <a href="#" className="btn-circle-md bg-success quicklinks-link">
              <span>
                <FaQuestion className="btn-icon" />
                <p className="text-dark quicklink-text-2 d-lg-block d-none">
                  SEARCH HELP
                </p>
              </span>
            </a>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default QuickLinks;
