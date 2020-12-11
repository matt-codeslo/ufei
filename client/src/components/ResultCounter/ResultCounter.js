import React from 'react';
import { Col } from 'react-bootstrap';
import './ResultCounter.css';

class ResultCounter extends React.Component {
    render() {
        return (
            <Col>
                <h3 className="result-counter-counter"><span className="count">42</span> TREES</h3>
            </Col>
        )
    }
}

export default ResultCounter;