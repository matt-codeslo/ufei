import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./PacificIslandsBanner.css";
// subcomponents
import SearchByName from "../SearchByName/SearchByName";

class PacificIslandsBanner extends React.Component {
    render() {
        return (
            <Container fluid style={{ position: 'relative', zIndex: '1000' }}>
                <Jumbotron className="Jumbotron-fluid bg-white p-0 pacific-islands-banner-jumbotron" style={{ position: 'relative', zIndex: '1000' }} >
                    <Row className="pacific-islands-banner-container">
                        <Col lg={{ span: 5, offset: 1 }} className="pacific-islands-banner-search-container" style={{ position: 'relative', zIndex: '1000' }}>
                            <h1 className="pacific-islands-banner-jumbo-h1"><span className="pacific-islands-banner-title">Pacific Islands</span>SelecTree</h1>
                            <SearchByName />
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} className="d-none d-lg-inline-block px-0 pacific-islands-banner-image-container">

                        </Col>
                    </Row>
                </Jumbotron>
            </Container>


        );
    }
}

export default PacificIslandsBanner;