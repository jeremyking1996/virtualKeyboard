import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import phoneImage from '../../images/firstProduct.jpeg'
import secondPhone from '../../images/secondPhone.jpeg'
import airBuds from '../../images/firstAirbuds.jpeg'
import smartTag from '../../images/smartTag.webp'
import phonePlus from '../../images/galaxyPlus.png'
import './ProductGrid.css'

class ProductGrid extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row md={3}>
                    <Col><img src={phoneImage} alt="phone" className="imageOne"></img></Col>
                    <Col xs={6}><img src={secondPhone} alt="secondPhone" className="secondCol"></img><img src={airBuds} alt="airbuds pro" className="secondCol"></img></Col>
                    <Col><img src={smartTag} alt="haha" className="secondCol"></img><img src={phonePlus} alt="haha" className="secondCol"></img></Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default ProductGrid;