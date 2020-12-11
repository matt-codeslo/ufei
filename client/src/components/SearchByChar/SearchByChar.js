import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./SearchByChar.css";
// sub-components
import RegionSelector from "../RegionSelector/RegionSelector";
import TreeChar from "../TreeChar/TreeChar";
import FlowersAndFruit from "../FlowersAndFruit/FlowersAndFruit";
import SiteConditions from "../SiteConditions/SiteConditions";

class SearchByChar extends React.Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <h2 className="search-by-char-header text-center category-label">SEARCH BY CHARACTERISTICS</h2>
                <div className="text-center search-by-char-sm-underline">
                    <p>__________</p>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <RegionSelector />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TreeChar />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6} className="equal-height-columns-2 mb-4">
                            <FlowersAndFruit />
                        </Col>
                        <Col lg={6} className="equal-height-columns-2 mb-4">
                            <SiteConditions />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mb-5">
                            <Button variant="primary" size="lg">SEARCH</Button>
                        </Col>
                    </Row>

                </Container>

            </Container >
        )
    }
}

export default SearchByChar;