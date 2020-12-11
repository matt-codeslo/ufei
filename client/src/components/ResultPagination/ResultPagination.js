import React from 'react';
import { Col, Button } from 'react-bootstrap'
import './ResultPagination.css'

class ResultPagination extends React.Component {
    render() {
        return (
            <Col >
                <Button variant="primary" className="border border-dark  mr-1 result-pagination-btn px-2">10</Button>
                <Button variant="primary" className="border border-dark  mr-1 result-pagination-btn px-2">20</Button>
                <Button variant="primary" className="border border-dark  mr-1 result-pagination-btn px-2">30</Button>
                <p className="d-inline">per page</p>
            </Col>
        )
    }
}

export default ResultPagination;