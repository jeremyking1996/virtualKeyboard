import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import phoneImage from '../../images/firstProduct.jpeg'
import secondPhone from '../../images/secondPhone.jpeg'
import airBuds from '../../images/firstAirbuds.jpeg'
import smartTag from '../../images/smartTag.webp'
import phonePlus from '../../images/galaxyPlus.png'


class ProductGrid extends Component {
    render() {
        return (
            <div>
                <Container style={{display:"flex-inline"}}>
                <Row md={4}>
                    <Col><img src={phoneImage} alt="phone"></img></Col>
                    <Col xs={6}><img src={secondPhone} alt="secondPhone"></img><img src={airBuds} alt="airbuds pro"></img></Col>
                    <Col><img src={smartTag} alt="haha"></img><img src={phonePlus} alt="haha"></img></Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default ProductGrid;