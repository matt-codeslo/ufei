import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import "./FeaturedTree.css";

class FeaturedTree extends React.Component {
  render() {
    const image_prefix = process.env.REACT_APP_BASE_IMAGE_URL;
    return (
      <Container className="mt-5">
        <Row>
          <Col lg={{ span: 4, offset: 2 }}>
            <Image
              fluid
              src={`${image_prefix}/images/1600/39/original/barringtonia-asiatica-tree.jpg`}
            />
          </Col>
          <Col lg={{ span: 5 }}>
            <h3 className="category-label">FEATURED TREE</h3>
            <hr />
            <h4 className='featured-tree-label'>BARRINGTONIA</h4>
            <p className="font-italic text-muted featured-tree-scientific-name">Barringtonia asiatica</p>
            <p>
              There are 39 species of Barringtonia, mostly from tropical Africa, the most famous of which is B. asiatica, from tropical Asia. It’s a tree with broad, shiny leaves, square woody fruits, and white flowers that bloom at night and resemble shaving brushes. Barringtonia thrives around brackish water, near lagoons, and along the coast, and is occasionally planted in Hawai'i. In some areas of the Pacific, the seed is crushed, mixed with water and added to tidal pools to stupefy fish for easier catching.
            </p>
            <Button variant="outline-dark" size="lg" className="mt-4">
              Tree Details
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FeaturedTree;
