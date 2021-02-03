import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class ProductButtonGroup extends Component {
    render() {
        return (
            <div>
                <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" style={{backgroundColor: "white", margin: "5%", color: "black"}}>For you</Button>
            <Button variant="secondary" style={{backgroundColor: "white", margin: "5%", color: "black"}}>Smartphones, Computing & Wearables</Button>
            <Button variant="secondary" style={{backgroundColor: "white", margin: "5%", color: "black"}}>TV</Button>
            <Button variant="secondary" style={{backgroundColor: "white", margin: "5%", color: "black"}}>Home Appliances</Button>
            </ButtonGroup>
            
            </div>
        );
    }
}

export default ProductButtonGroup;