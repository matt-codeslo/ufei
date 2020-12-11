import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import { ImCheckboxChecked } from 'react-icons/im';
import "./FlowersAndFruit.css";
import reactSelectStyles from "../../customUI/react-select-options";

class FlowersAndFruit extends React.Component {
    constructor(props) {
        super();
        this.state = {
            flowerColor: null
        }
    }

    selectFlowerColor = (items) => {
        // items is an array of {label: x, value: y}
        try {
            if (items) {
                items.map(i => console.log(i));
            } else {
                throw new Error('items is invalid');
            }
        } catch (err) {
            console.log(`components.FlowersAndFruit.selectFlowerColor: ${err}`)
        }
    }

    fruitSelect = (selected) => {
        console.log(`you selected: ${selected.label} with a value of: ${selected.value}`);
    }


    render() {
        return (
            <Container className="bg-secondary p-4 h">
                <Row>
                    <Col>
                        <h3 className="category-label">FLOWERS AND FRUIT</h3>
                    </Col>
                </Row>
                <Form>
                    <Col>
                        <Form.Group controlId="flowers-and-fruit">
                            <Form.Label id="flower-color">FLOWER COLOR</Form.Label>
                            <Select isMulti closeMenuOnSelect={false} name="flower-colors" className="basic-multi-select" classNamePrefix="select" options={[{ label: "Red", value: 1 }, { label: "Yellow", value: 2 }]} styles={reactSelectStyles} onChange={this.selectFlowerColor} />
                        </Form.Group>

                        <Form.Group control-id="fruit-type">
                            <Form.Label>FRUIT TYPE</Form.Label>
                            <Select options={[{ label: "Fruit One", value: 1 }, { label: "Fruit Two", value: 2 }]} styles={reactSelectStyles} onChange={this.fruitSelect} />
                        </Form.Group>

                        <Form.Group controlId="fragrance">
                            <Form.Label id="ca-native">Fragrance?</Form.Label>
                            <div className="form-check form-check">
                                <input className="form-check-input" type="checkbox" id="flowers-and-fruit-fragrance" checked={this.state.caNativeChecked} onChange={this.caNativeCheckChange} />
                                <span className="overlay">
                                    <ImCheckboxChecked className="icon" />
                                </span>
                                <label className="form-check-label ml-1" htmlFor="flowers-and-fruits-fragrance">Yes</label>
                            </div>
                        </Form.Group>
                    </Col>

                </Form>
            </Container>
        )
    }
}

export default FlowersAndFruit;