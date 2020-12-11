import React from 'react';
import { Container } from 'react-bootstrap';
import './SelectreeHeader.css';
// components
import SelectreeBanner from "../SelectreeBanner/SelectreeBanner";
import PacifcIslandsBanner from "../PacificIslandsBanner/PacificIslandsBanner"
import QuickLinks from "../QuickLinks/QuickLinks";
import SelectreeNavbar from '../SelectreeNavbar/SelectreeNavbar';

class SelectreeHeader extends React.Component {
    render() {
        return (
            <Container style={{ position: 'relative', zIndex: '10' }} fluid>
                <SelectreeNavbar />
                <PacifcIslandsBanner />
                <QuickLinks />
            </Container>

        )
    }
}

export default SelectreeHeader;

