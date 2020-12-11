import React from "react";
import { Button } from "react-bootstrap"
import "./RegionSelector.css"

class RegionSelector extends React.Component {
    render() {
        return (

            <div className="container p-3 bg-secondary">
                <div className="col-6 offset-1 d-inline-block">
                    <p className="region-selector-announcement">You are searching Pacific Islands UFEI. Click the button to return to the UFEI homepage</p>
                </div>
                <div className="col-5 d-inline-block">
                    <Button variant="dark" size="lg" className="region-selector-button">UFEI HOME PAGE</Button>
                </div>
            </div>

        )
    }
}

export default RegionSelector;