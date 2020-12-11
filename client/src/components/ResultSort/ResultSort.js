import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Select from "react-select";
import "./ResultSort.css";
import reactSelectStyles from "../../customUI/react-select-options"

class ResultSort extends React.Component {
    render() {
        return (
            <Col>
                <Form.Group controlId="result-sort">
                    <Select options={[{ label: "Scientific Name A-Z", value: 1 }, { label: "Scientific Name Z-A", value: 2 }, { label: "Common Name A-Z", val: 3 }, { label: "Common Name Z-A", val: 4 }]} styles={reactSelectStyles} placeholder="Sort Results By..." onChange={this.selectChange} />
                </Form.Group>
            </Col>
        )
    }
}

export default ResultSort;