import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "./Result.css";
import { GoSearch } from 'react-icons/go';
// components
import ResultOps from "../ResultOps/ResultOps";
import ResultGallery from "../ResultGallery/ResultGallery";
import SearchByName from "../SearchByName/SearchByName";
import SearchByChar from "../SearchByChar/SearchByChar";

class Result extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        // hack to get region select button in right place with the dimensions it is displayed in on this page
        const regionButton = document.getElementsByClassName("region-selector-button")[0];
        regionButton.style.marginTop = "-20%";
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className>
                        <ResultOps />
                        <br />
                        <ResultGallery />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={{ span: 12, offset: 0 }} className="text-center mt-5 mb-3">
                        <GoSearch style={{ width: "3rem", height: "3rem", color: "#457537" }} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }} className="text-center">
                        <h3 className="label-demibold">SEARCH TREES BY NAME</h3>
                        <p>Trees can be searched by their common or scientific name</p>
                        <p>_______</p>
                        <br />
                        <Row>
                            <Col lg={{ span: 7, offset: 3 }}>
                                <SearchByName className="text-center" />
                            </Col>

                        </Row>
                        <br />
                        <br />
                        <br />
                        <SearchByChar />

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Result;