import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { ImCheckboxChecked } from 'react-icons/im';
import { Range } from 'rc-slider';
import Select from 'react-select';
import 'rc-slider/assets/index.css';
import "./TreeChar.css";
// react-select styling options
import reactSelectStyles from "../../customUI/react-select-options";

class TreeChar extends React.Component {
    constructor(props) {
        super();
        // local state to track DOM elements
        this.state = {
            minTreeHeight: 5,
            maxTreeHeight: 100,
            deciduousChecked: false,
            evergreenChecked: false,
            fallColorChecked: false,
            caNativeChecked: false

        }
    }

    rangeChange = (e) => {
        let minHeight = Math.ceil(e[0] < 5 ? 5 : 100 * (e[0] * .01));
        let maxHeight = Math.ceil(100 * (e[1] * .01));
        this.setState({ minTreeHeight: Math.floor(minHeight), maxTreeHeight: Math.floor(maxHeight) })
        console.log(`minTreeHeight: ${this.state.minTreeHeight}, maxTreeHeight: ${this.state.maxTreeHeight}`)
    }

    foliageCheckChange = (e) => {
        console.log(e.currentTarget.id);
        switch (e.currentTarget.id) {
            case "tree-char-foliage-deciduous":
                this.setState({ deciduousChecked: e.currentTarget.checked, evergreenChecked: this.state.evergreenChecked ? false : this.state.evergreenChecked })
                break;
            case "tree-char-foliage-evergreen":
                console.log('bing!');
                this.setState({ evergreenChecked: e.currentTarget.checked, deciduousChecked: this.state.deciduousChecked ? false : this.state.deciduousChecked })

                break;
            default:
                return;

        }
    }

    fallColorCheckChange = () => {
        this.setState({ fallColorChecked: this.state.fallColorChecked ? false : true });
    }

    caNativeCheckChange = () => {
        this.setState({ caNativeChecked: this.state.caNativeChecked ? false : true });
    }

    selectChange = (selected) => {
        console.log(`you selected: ${selected.label} with a value of: ${selected.value}`);

    }



    render() {
        return (
            <Container className="bg-secondary p-4">
                <Row>
                    <Col>
                        <h3 className="category-label">TREE CHARACTERISTICS</h3>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col lg={{ span: 6 }}>
                            <Form.Group controlId="tree-height">
                                <Form.Label id="tree-height">TREE HEIGHT</Form.Label>
                                <Range className="ml-2" allowCross={false} defaultValue={[0, 100]} min={0} max={100} onChange={this.rangeChange} marks={{
                                    0: "5",
                                    25: "25",
                                    50: "50",
                                    75: "75",
                                    100: "100+"
                                }}
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="tree-shape">
                                <Form.Label id="tree-shape">TREE SHAPE</Form.Label>

                                <Select options={[{ label: "Shape One", value: 1 }, { label: "Shape Two", value: 2 }]} styles={reactSelectStyles} onChange={this.selectChange} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label id="tree-height">FOLIAGE TYPE</Form.Label>
                                <Form.Group controlId="foliage-type">

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="tree-char-foliage-deciduous" checked={this.state.deciduousChecked} onChange={this.foliageCheckChange} />
                                        <span className="overlay">
                                            <ImCheckboxChecked className="icon" />
                                        </span>
                                        <label className="form-check-label" htmlFor="tree-char-foliage-deciduous">Deciduous</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="tree-char-foliage-evergreen" checked={this.state.evergreenChecked} onChange={this.foliageCheckChange} />
                                        <span className="overlay">
                                            <ImCheckboxChecked className="icon" />
                                        </span>
                                        <label className="form-check-label" htmlFor="tree-char-foliage-evergreen">Evergreen</label>
                                    </div>
                                </Form.Group>

                            </Form.Group>
                        </Col>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <Form.Group controlId="leaf-form">

                                <Form.Label id="leaf-form">LEAF FORM</Form.Label>


                                <Select options={[{ label: "Leaf Form One", value: 1 }, { label: "Leaf Form Two", value: 2 }]} styles={reactSelectStyles} onChange={this.selectChange} />

                            </Form.Group>

                            <Form.Group controlId="leaf-arrangement">

                                <Form.Label id="leaf-arrangement">LEAF ARRANGEMENT</Form.Label>


                                <Select options={[{ label: "Leaf Arrangement One", value: 1 }, { label: "Leaf Arrangement Two", value: 2 }]} styles={reactSelectStyles} onChange={this.selectChange} />

                            </Form.Group>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Form.Group controlId="fall-color">
                                        <Form.Label id="fall-color">FALL COLOR</Form.Label>
                                        <Form.Group>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="tree-char-fall-color" checked={this.state.fallColorChecked} onChange={this.fallColorCheckChange} />
                                                <span className="overlay">
                                                    <ImCheckboxChecked className="icon" />
                                                </span>
                                                <label className="form-check-label" htmlFor="tree-char-fall-color">Yes</label>
                                            </div>
                                        </Form.Group>

                                    </Form.Group>
                                </Col>
                                <Col lg={{ span: 6 }}>
                                    <Form.Group controlId="ca-native">
                                        <Form.Label id="ca-native">CA NATIVE</Form.Label>
                                        <Form.Group>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="tree-char-ca-native" checked={this.state.caNativeChecked} onChange={this.caNativeCheckChange} />
                                                <span className="overlay">
                                                    <ImCheckboxChecked className="icon" />
                                                </span>
                                                <label className="form-check-label" htmlFor="tree-char-ca-native">Yes</label>
                                            </div>
                                        </Form.Group>

                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Container >
        )
    }
}

export default TreeChar