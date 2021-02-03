import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './ButtonGroup.css'

class ProductButtonGroup extends Component {
    render() {
        return (
            <div>
                <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" className="buttons">For you</Button>
            <Button variant="secondary" className="buttons">Smartphones, Computing & Wearables</Button>
            <Button variant="secondary" className="buttons">TV</Button>
            <Button variant="secondary" className="buttons">Home Appliances</Button>
            </ButtonGroup>
            
            </div>
        );
    }
}

export default ProductButtonGroup;