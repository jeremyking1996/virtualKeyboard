import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'
import './Table.css'

class Table extends Component {
    render() {
        return (
            <div className="column">
                <p className="column"><strong>Privacy. It’s always personal.</strong> Easily control what you share or don’t share with us. <strong>Learn More</strong></p>
                <container>
                <Row>
                    <Col className="column">
                    <strong>SHOP</strong>
                    <ul>
                        <li>Phones</li>
                        <li>Tablets</li>
                        <li>Watches</li>
                        <li>Mobile Accessories</li>
                        <li>Mobile Audio</li>
                        <li>TV & Home Theater</li>
                        <li>Computing</li>
                        <li>Monitors</li>
                        <li>Memory & Storage</li>
                        <li>Home appliances</li>
                        <li>Smart Home</li>
                        <li>Samsung Experience Store</li>
                        <li>Apps & Services</li>
                        <li>Shop Refurbished</li>
                        </ul></Col>
                    <Col className="column"><ul>
                    <strong>Support</strong>
                    <li>Contact Us</li>
                    <li>Product Support</li>
                    <li>Order Support</li>
                    <li>Your Account</li>
                    <li>Register Your Product</li>
                    <li>Samsung Community</li>
                    <li>Accessibility</li>
                    <li>Note7 Recall</li></ul>
                    </Col>
                    <Col className="column">
                    <ul>
                    <strong>Offers</strong>
                    <li>Offers</li>
                    <li>Samsung Rewards</li>
                    <li>Student & Educator Discounts</li>
                    <li>Government Discounts</li>
                    <li>Military Discounts</li>
                    <li>Employee Discounts</li>
                    <li>First Responder Discounts</li>
                    </ul>
                    </Col>
                    <Col class="column"><strong>Company</strong>
                    <ul>
                    <li>About Us</li>
                    <li>Explore</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Corporate Citizenship</li>
                    <li>Investor Relations</li>
                    <li>Responsible Recycling</li>
                    </ul>
                    </Col>
                </Row>
                </container>
            </div>
        );
    }
}

export default Table;