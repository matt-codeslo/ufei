import React from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TreeInfoCard.css';

class TreeInfoCard extends React.Component {
    render() {
        return (
            <Card className="tree-info-card bg-secondary">
                <Card.Body>
                    <Card.Title className="label-bold text-lg">Tree Info Category</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ea.
                        
                        Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Omnis tempore inventore dolorum.
                         
                        Lorem ipsum dolor sit amet consectetur.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return{treeDetail:state.treeDetail.data}
}
export default connect(mapStateToProps,{})(TreeInfoCard);