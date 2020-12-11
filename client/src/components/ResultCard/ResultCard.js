import React from 'react';
import { Card } from 'react-bootstrap';
import './ResultCard.css';

class ResultCard extends React.Component {
    render() {
        const image_prefix = process.env.REACT_APP_BASE_IMAGE_URL;
        return (
            <Card style={{ width: '16rem' }} className="result-card mb-4" >
                {/* <Card.Body> */}
                <div className="p-1">
                    <Card.Title className="label-demibold">VALLEY OAK</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted font-italic result-card-scientific-name">Quercus Lobata</Card.Subtitle>
                </div>
                <Card.Img variant="bottom" src={`${image_prefix}/images/1200/46/original/quercus-lobata-tree-3.jpg`} />
                {/* </Card.Body> */}
            </Card >
        )
    }
}

export default ResultCard;

