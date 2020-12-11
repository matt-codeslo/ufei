import React from 'react';
import { connect } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import './TreeInfo.css';
// components
import GeneralInfo from '../TreeInfoCard/GeneralInfo';
import SiteConditions from "../TreeInfoCard/SiteConditions";
import PestAndDiseaseInfo from "../TreeInfoCard/PestAndDiseaseInfo";

class TreeInfo extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="d-flex align-items-stretch info-card-col" lg={{ span: 6, offset: 0 }}>
                        <GeneralInfo />
                    </Col>
                    <Col className="d-flex align-items-stretch info-card-col" lg={{ span: 6, offset: 0 }}>
                        <SiteConditions />
                    </Col>
                    <Col className="d-flex align-items-stretch info-card-col" lg={{ span: 6, offset: 0 }}>
                        <PestAndDiseaseInfo />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { treeDetail: state.treeDetail.data }
}
export default connect(mapStateToProps, {})(TreeInfo);