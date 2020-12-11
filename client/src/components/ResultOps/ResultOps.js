import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './ResultOps.css';
// components
import ResultCounter from "../ResultCounter/ResultCounter";
import ResultFilter from "../ResultFilter/ResultFilter";
import ResultSort from "../ResultSort/ResultSort";
import ResultPagination from '../ResultPagination/ResultPagination';

class ResultOps extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <ResultCounter />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 4, offset: 1 }} className="d-inline equal-height-columns-2">
                        <ResultFilter />
                    </Col>
                    <Col lg={{ span: 3 }} className="d-inline equal-height-columns-2">
                        <ResultSort />
                    </Col>
                    <Col lg={{ span: 4 }} className="d-inline equal-height-columns-2">
                        <ResultPagination />
                    </Col>
                </Row>

            </Container >
        )
    }
}

export default ResultOps;