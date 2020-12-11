import React from 'react';
import htmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import './TreeInfoCard.css';

class GeneralInfo extends React.Component {

    renderMemo = () => {
        try {
            if (this.props.treeDetail && this.props.treeDetail.generalInfo && this.props.treeDetail.generalInfo.memo) {
                return (
                    <span className="tree-info-card-text" dangerouslySetInnerHTML={{ __html: htmlParser(this.props.treeDetail.generalInfo.memo) }} />
                )
            } else {
                throw new Error(`generalInfo missing`)

            }
        } catch (err) {
            console.log(`components.GeneralInfo.renderMemo: ${err}`);
            return null;
        }
        // return htmlParser(this.props.treeDetail.generalInfo.memo);
    }

    renderNativeRange = () => {
        try {
            if (this.props.treeDetail && this.props.treeDetail.generalInfo && this.props.treeDetail.generalInfo.native_range) {
                return (
                    <span className="tree-info-card-text">Native to  <span>{this.props.treeDetail.generalInfo.native_range}</span></span>
                )
            } else {
                throw new Error('native_range empty');
            }
        } catch (err) {
            console.log(`componetns.GeneralInfo.renderNativeRange: ${err}`)
            return null;
        }
    }




    render() {
        const gen = this.props.treeDetail.generalInfo;
        return (
            <Card className="tree-info-card bg-secondary">
                <Card.Body>
                    <Card.Title className="label-bold text-lg">General Info</Card.Title>
                    <Card.Text>
                        {this.renderMemo()}
                        {this.renderNativeRange()}
                        {this.props.treeDetail.familyName ? <span className="tree-info-card-text"><span className="font-weight-bold">Family</span>: <span className="font-italic">{this.props.treeDetail.familyName}</span></span> : null}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return { treeDetail: state.treeDetail.data }
}
export default connect(mapStateToProps, {})(GeneralInfo);