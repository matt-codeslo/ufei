import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import htmlParser from 'react-html-parser';
import './TreeNameInfo.css';
import uuid from 'react-uuid';

class TreeNameInfo extends React.Component {

    renderScientificName = () => {
        try {
            if (this.props.treeDetail.scientificName) {
                return (
                    <span>{htmlParser(this.props.treeDetail.scientificName)}</span>
                )
            } else {
                throw new Error(`missing scientific name`);
            }
        } catch (err) {
            console.log(`components.TreeNameInfo.renderScientificName: ${err}`);
            return null;
        }
    }


    render() {
        if (this.props.treeDetail) {
            return (
                <Container className="mt-4">
                    <Col xs={{ span: 12 }}>
                        <Row className="tree-name-info-row d-flex justify-content-center">
                            <Col xs={{ span: 4 }} className="border-right less-line-spacing">
                                <h3 className="label-demibold">{this.props.treeDetail.commonName ? this.props.treeDetail.commonName : null}</h3>
                                <p className="font-italic text-lg">{this.renderScientificName()}</p>
                                <p className="font-weight-bold">Family: <span className="font-italic font-weight-normal">{this.props.treeDetail.familyName ? this.props.treeDetail.familyName : null}</span></p>
                            </Col>
                            <Col xs={{ span: 4 }} className="less-line-spacing">
                                <h3 className="label-demibold">SYNONYMS</h3>
                                {this.props.treeDetail.synonyms.length ? this.props.treeDetail.synonyms.map(s => {
                                    return (<p className="font-italic" key={uuid()}>{htmlParser(s.name_concat)}</p>)
                                }) : <p>None</p>}
                            </Col>
                            <Col xs={{ span: 4 }} className="border-left less-line-spacing">
                                <h3 className="label-demibold">ADDITIONAL COMMON NAMES</h3>
                                {this.props.treeDetail.otherCommonNames.length ? this.props.treeDetail.otherCommonNames.map(s => {
                                    return (<p key={uuid()}>{s}</p>)
                                }) : <p>None</p>}
                            </Col>
                        </Row>
                    </Col>
                    <Row>
                        <Col xs={{ span: 12 }}>
                            <p className="tree-name-info-family">See all <a href="#" className="font-italic primary">{this.props.treeDetail.genus}</a></p>
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            console.log(`components.TreeNameInfo: treeDetail empty`);
            return null;
        }

    }

}

const mapStateToProps = (state) => {
    return { treeDetail: state.treeDetail.data }
}

export default connect(mapStateToProps, {})(TreeNameInfo);