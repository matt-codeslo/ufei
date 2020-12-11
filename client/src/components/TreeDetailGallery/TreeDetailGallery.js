import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './TreeDetailGallery.css';
import uuid from 'react-uuid';

class TreeDetailGallery extends React.Component {

    constructor(props) {
        super();

    }

    renderTreeDetailGallery = () => {
        try {
            if (this.props.treeDetail && this.props.treeDetail.images) {
                let gallery = this.props.treeDetail.images.map((image) => (
                    <li className="tree-detail-gallery-image" key={uuid()}><Image src={image.link} fluid /></li>
                ));

                return gallery;
            } else {
                throw new Error('no gallery');
            }
        } catch (err) {
            console.log(`components.TreeDetailGallery.renderTreeDetailGallery: ${err}`);
            return null;
        }
    }

    render() {
        return (
            <Container>
                <Row className="">
                    <Col>
                        <ul className="ul-grid-centered">
                            {this.renderTreeDetailGallery()}
                        </ul>
                    </Col>
                </Row>
            </Container >
        )
    }

}
const mapStateToProps = (state) => {
    return { treeDetail: state.treeDetail.data }
}

export default connect(mapStateToProps, {})(TreeDetailGallery);