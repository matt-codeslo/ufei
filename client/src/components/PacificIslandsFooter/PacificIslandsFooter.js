import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../Footer/Footer.css';
import './PacificIslandsFooter.css';

class PacificIslandsFooter extends React.Component {
    render() {
        return (
            <Container className="footer pb-0">
                <Row>
                    <Col>
                        <p>No warranties or guarantees as to the accuracy of the data and information derived from this web site are expressed or implied. The California Polytechnic State University and the Cal Poly Corporation shall not be responsible for any loss of profit, indirect, incidental, special, or consequential damages arising out of the use of the data and information derived from this web site.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image className="footer-img mr-3" src="/images/logos/CAL-FIRE-Logo.png" />
                        <Image className="footer-img" src="/images/logos/US_Forest_Service.png" />
                        <Image className="footer-img" src="/images/logos/DLNR_color.jpg" />
                        <Image className="footer-img" src="/images/logos/DOFAW_logo.png" />
                        <Image className="footer-img float-right" src="/images/logos/calpoly-logo.png" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PacificIslandsFooter;