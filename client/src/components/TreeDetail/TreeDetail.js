import React from 'react';
import { connect } from "react-redux";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './TreeDetail.css';

// action creators
import { getTreeDetail } from "../../actions/treeDetail";

// components
import TreeNameInfo from "../TreeNameInfo/TreeNameInfo";
import TreeDetailGallery from "../TreeDetailGallery/TreeDetailGallery";
import TreeInfo from "../TreeInfo/TreeInfo";
import SearchByName from "../SearchByName/SearchByName";

class TreeDetail extends React.Component {
    constructor(props) {
        super();

    }
    componentDidMount() {
        if (this.props.match.params.treeName) {
            let treeName = this.props.match.params.treeName;
            this.props.getTreeDetail(treeName);
        } else {
            console.log(`components.TreeDetail: no match`);
        }

    }

    render() {
        return (
            this.props.treeDetail ?
                <Container fluid>
                    <Row>
                        <Col xs={{ span: 10, offset: 1 }} >
                            <TreeNameInfo />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }} >
                            <TreeDetailGallery />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <TreeInfo />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col lg={{ span: 5, offset: 4 }}>
                            <SearchByName />
                        </Col>
                    </Row>
                </Container> : <Container xs={{ span: 4, offset: 4 }} className="text-center"><Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner></Container>)
    }
}

const mapStateToProps = (state) => {
    return { treeDetail: state.treeDetail.data }
}

export default connect(mapStateToProps, { getTreeDetail })(TreeDetail);