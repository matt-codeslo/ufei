import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// components
import FeaturedTree from "../FeaturedTree/FeaturedTree";
import FeaturedQuote from "../FeaturedQuote/FeaturedQuote"
import SearchByChar from "../SearchByChar/SearchByChar";

class SelecTree extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <SearchByChar />
                        <FeaturedTree />
                        <FeaturedQuote />

                    </Col>
                </Row>
            </Container>
        );
    }
};

export default SelecTree;