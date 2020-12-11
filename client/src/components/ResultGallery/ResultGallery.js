import React from 'react';
import { Row, Col, Container, Pagination } from 'react-bootstrap';
import './ResultGallery.css'
// components
import ResultCard from "../ResultCard/ResultCard";

class ResultGallery extends React.Component {
    constructor(props) {
        super();
        this.cards = [1, 2, 3, 4, 5, 6];
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                        {this.cards.map(card => {
                            return (
                                <Col lg={{ span: 4, offset: 0 }} key={`card-${card}`} className="result-gallery-card-container" >
                                    <ResultCard />
                                </Col>
                            )
                        })}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Container className="text-center">
                            <Pagination className="result-gallery-pagination">
                                <Pagination.First />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item active>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Last />
                            </Pagination>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default ResultGallery;