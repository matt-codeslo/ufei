import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Select from "react-select";
import "./ResultFilter.css";
import reactSelectStyles from "../../customUI/react-select-options";

class ResultFilter extends React.Component {

    filterResults = () => {
        console.log('filtering results...');
    }

    render() {
        return (
            <Col>
                <Form.Group controlId="result-filter">
                    <Select isMulti closeMenuOnSelect={false} name="result-filter" className="basic-multi-select" classNamePrefix="select" options={[{ label: "result-1", value: "id-1" }, { label: "result 2", value: "id-2" }]} styles={reactSelectStyles} placeholder="Filter Results" onChange={this.filterResults} />
                </Form.Group>
            </Col>
        )
    }
}

export default ResultFilter;