import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { ImCheckboxChecked } from 'react-icons/im';
import Select from "react-select";
import "./SiteConditions.css";
import reactSelectStyles from "../../customUI/react-select-options";


class SiteConditions extends React.Component {

    constructor(props) {
        super();
        // will need to convert all this to redux
        this.state = {
            selecTreeWaterVeryLow: false,
            selecTreeWaterLow: false,
            selecTreeWaterMedium: false,
            selecTreeWaterHigh: false,

        }
    }


    sunsetZoneSelect = (selected) => {
        console.log(`you selected: ${selected.label} with a value of: ${selected.value}`);
    }

    usdaZoneSelect = (selected) => {
        console.log(`you selected: ${selected.label} with a value of: ${selected.value}`);
    }

    availablePlantingAreaSelect = (selected) => {
        console.log(`you selected: ${selected.label} with a value of: ${selected.value}`);
    }

    selectreeWaterUseChange = (e) => {
        switch (e.currentTarget.id) {
            case "site-conditions-selectree-water-use-vl":
                this.setState({ selecTreeWaterVeryLow: this.state.selecTreeWaterVeryLow ? false : true })

                break;
            case "site-conditions-selectree-water-use-low":
                this.setState({ selecTreeWaterLow: this.state.selecTreeWaterLow ? false : true })

                break;
            case "site-conditions-selectree-water-use-med":
                this.setState({ selecTreeWaterMedium: this.state.selecTreeWaterMedium ? false : true })

                break;
            case "site-conditions-selectree-water-use-high":
                this.setState({ selecTreeWaterHigh: this.state.selecTreeWaterHigh ? false : true })

                break;
            default:
                return;

        }
    }


    render() {
        return (
            <Container className="bg-secondary p-4">
                <Row>
                    <Col>
                        <h3 className="category-label">SITE CONDITIONS</h3>
                    </Col>
                </Row>
                <Form>
                    <Col>
                        <Form.Group controlId="sunset-western-zones">
                            <Form.Label id="sunset-western-zones">SUNSET WESTERN ZONE</Form.Label>
                            <Select options={[{ label: "Zone 1", value: 1 }, { label: "Zone 2", value: 2 }]} styles={reactSelectStyles} onChange={this.sunsetZoneSelect} />
                        </Form.Group>
                        <Form.Group controlId="usda-hardiness-zones">
                            <Form.Label id="sunset-western-zones">USDA HARDINESS ZONE</Form.Label>
                            <Select options={[{ label: "Zone 1", value: 1 }, { label: "Zone 2", value: 2 }]} styles={reactSelectStyles} onChange={this.usdaZoneSelect} />

                        </Form.Group>
                        <Form.Group controlId="available-planting-area">
                            <Form.Label id="available-planting-area">AVAILABLE PLANTING AREA</Form.Label>
                            <Select options={[{ label: "Area 1", value: 1 }, { label: "Area 2", value: 2 }]} styles={reactSelectStyles} onChange={this.availablePlantingAreaSelect} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="d-block" id="selectree-water-use">SELECTREE WATER USE</Form.Label>
                            <ul className="site-conditions-check-list">
                                <li><div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="site-conditions-selectree-water-use-vl" checked={this.state.selecTreeWaterVeryLow} onChange={this.selectreeWaterUseChange} />
                                    <span className="overlay">
                                        <ImCheckboxChecked className="icon" />
                                    </span>
                                    <label className="form-check-label" htmlFor="site-conditions-selectree-water-use-vl">VERY LOW</label>
                                </div></li>
                                <li><div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="site-conditions-selectree-water-use-low" checked={this.state.selecTreeWaterLow} onChange={this.selectreeWaterUseChange} />
                                    <span className="overlay">
                                        <ImCheckboxChecked className="icon" />
                                    </span>
                                    <label className="form-check-label" htmlFor="site-conditions-selectree-water-use-low">LOW</label>
                                </div></li>
                                <li><div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="site-conditions-selectree-water-use-med" checked={this.state.selecTreeWaterMedium} onChange={this.selectreeWaterUseChange} />
                                    <span className="overlay">
                                        <ImCheckboxChecked className="icon" />
                                    </span>
                                    <label className="form-check-label" htmlFor="site-conditions-selectree-water-use-med">MEDIUM</label>
                                </div></li>
                                <li><div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="site-conditions-selectree-water-use-high" checked={this.state.selecTreeWaterHigh} onChange={this.selectreeWaterUseChange} />
                                    <span className="overlay">
                                        <ImCheckboxChecked className="icon" />
                                    </span>
                                    <label className="form-check-label" htmlFor="site-conditions-selectree-water-use-high">HIGH</label>
                                </div></li>
                            </ul>
                        </Form.Group>
                    </Col>
                </Form>
            </Container >
        )
    }
}

export default SiteConditions;