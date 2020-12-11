import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import uuid from 'react-uuid';
import '../TreeInfoCard/TreeInfoCard.css';

class SiteConditions extends React.Component {

    renderSunsetZones = () => {
        try {
            const sc = this.props.treeDetail.siteConditions;
            if (sc.sunsetZones && sc.sunsetZones.length) {
                return (
                    <span>Sunset Zones: {sc.sunsetZones.map((sz, i) => {
                        return (
                            <span key={uuid()}>{sz}{i < sc.sunsetZones.length - 1 ? ', ' : null}</span>
                        )
                    })}</span>
                )
            } else {
                return null;
            }
        } catch (err) {
            console.log(`components.TreeInfoCard.SiteConditions.renderSunsetZones: ${err}`);
            return null;
        }


    }

    renderExposureRange = () => {
        try {
            const sc = this.props.treeDetail.siteConditions;
            if (sc.exposure_low) {
                return (<span>Exposure: {sc.exposure_high ? `${sc.exposure_low} to ${sc.exposure_high}` : `${sc.exposure_low}`}</span>)
            } else {
                return null;
            }
        } catch (err) {
            console.log(`components.TreeInfoCards.SiteConditions.renderExposureRange: ${err}`);
            return null;
        }
    }

    renderSoilTexture = () => {
        try {
            const sc = this.props.treeDetail.siteConditions;
            if (sc.soilTextures.length) {
                return (
                    <span>Soil Texture: {sc.soilTextures.map((st, i) => {
                        return (
                            <span key={uuid()}>{st}{i < sc.soilTextures.length - 1 ? ' or ' : null}</span>
                        )
                    })}</span>
                )
            } else {
                return null;
            }
        } catch (err) {
            console.log(`components.TreeInfoCard.SiteConditions.renderSoilTextures: ${err}`);
            return null;
        }
    }

    renderSoilPh = () => {
        try {
            const sc = this.props.treeDetail.siteConditions;
            if (sc.soil_ph_low && sc.soil_ph_high) {
                return (
                    <span>Soil pH: {sc.soil_ph_low} to {sc.soil_ph_high}</span>
                )
            } else {
                return null;
            }
        } catch (err) {
            console.log(`components.TreeInfoCard.SiteConditions.renderSoilPh: ${err}`);
            return null;
        }
    }

    renderSalinityTolerance = () => {
        try {
            const sc = this.props.treeDetail.siteConditions;
            if (sc.salinityTolerance.length) {
                return (
                    <span>Salinity Tolerance: {sc.salinityTolerance.map((s, i) => {
                        return (
                            <span key={uuid()}>{s}{i < sc.salinityTolerance.length - 1 ? ', ' : null}</span>
                        )
                    })}</span>
                )
            } else {
                return null;
            }
        } catch (err) {
            console.log(`components.TreeInfoCard.SiteConditions.renderSalinityTolerance: ${err}`);
            return null;
        }
    }


    render() {
        const sc = this.props.treeDetail.siteConditions;
        return (
            <Card className="tree-info-card bg-secondary">
                <Card.Body>
                    <Card.Title className="label-bold text-lg">Site Conditions and Constraints</Card.Title>
                    <Card.Text>
                        <span className="tree-info-card-text">{this.renderSunsetZones()}</span>
                        <span className="tree-info-card-text">{this.renderExposureRange()}</span>
                        <span className="tree-info-card-text">{this.renderSoilTexture()}</span>
                        <span className="tree-info-card-text">{this.renderSoilPh()}</span>
                        <span className="tree-info-card-text">{this.renderSalinityTolerance()}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return { treeDetail: state.treeDetail.data }
}

export default connect(mapStateToProps, {})(SiteConditions);