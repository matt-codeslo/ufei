import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import uuid from 'react-uuid';
import '../TreeInfoCard/TreeInfoCard.css';

class PestAndDiseaseInfo extends React.Component {

    renderDiseaseResistant = () => {
        try {
            const pd = this.props.treeDetail.pestAndDiseaseInfo;
            if (pd.diseaseResistant && pd.diseaseResistant.length) {
                return (
                    <span className="tree-info-card-text">Resistant to {pd.diseaseResistant.map((dr, i) => {
                        return (
                            <span key={uuid()}>{dr}{i < pd.diseaseResistant.length - 1 ? ', ' : null}</span>
                        )
                    })}</span>
                )
            } else {

                return null;
            }
        } catch (err) {
            console.log(`components.TreeInfoCard.PestAndDiseaseInfo.renderDiseaseResistant: ${err}`);
            return null;
        }
    }

    renderDiseaseSusceptibility = () => {
        try {
            const pd = this.props.treeDetail.pestAndDiseaseInfo;
            if (pd.diseaseSusceptibility && pd.diseaseSusceptibility.length) {
                return (
                    <span className="tree-info-card-text">Susceptibile to {pd.diseaseSusceptibility.map((ds, i) => {
                        return (
                            <span key={uuid()}>{ds}{i < pd.diseaseSusceptibility.length - 1 ? ', ' : null}</span>
                        )
                    })}</span>
                )
            } else {

                return null;
            }
        } catch (err) {
            console.log(`components.TreeInfoCard.PestAndDiseaseInfo.renderDiseaseSusceptibility: ${err}`);
            return null;
        }
    }

    render() {
        const pd = this.props.treeDetail.pestAndDiseaseInfo;
        return (
            <Card className="tree-info-card bg-secondary">
                <Card.Body>
                    <Card.Title className="label-bold text-lg">Pest and Disease Information</Card.Title>
                    <Card.Text>
                        {this.renderDiseaseResistant()}
                        {this.renderDiseaseSusceptibility()}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


const mapStateToProps = (state) => {
    return { treeDetail: state.treeDetail.data }
}

export default connect(mapStateToProps, {})(PestAndDiseaseInfo);