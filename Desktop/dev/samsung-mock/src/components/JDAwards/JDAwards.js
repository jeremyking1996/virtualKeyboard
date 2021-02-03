import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import homeApp from '../../images/homeApp.png'
import couchHA from '../../images/couchHA.png'
import JDPower from '../../images/JDPower.png'
import "./JDAwards.css"

class JDAwards extends Component {
    render() {
        return (
            <div className="JDPower">
                <Carousel>
                    <h1 className="homeAppliance"><strong>Home Appliances</strong></h1>
                    <button className="homeButt">Connected Appliances</button>
                    <button className="homeButt">Floor Care</button>
                    <button className="homeButt">J.D Power Awards</button><br/>
                    {/* First Item */}
                <Carousel.Item>
                    <img
                    className="homePic"
                    src={homeApp}
                    alt="First slide"
                    />
                    
                    <h2 className="appCap">Connect like never before</h2>
                    <p className="appWords">Samsung appliances let you run your home your terms so you never miss a beat</p> 
                    <button className="learn">Learn More</button>
                </Carousel.Item>
                {/* Second Item */}
                <Carousel.Item>
                    <img
                    className="homePic"
                    src={couchHA}
                    alt="Third slide"
                    />

                <h2 className="appCap">Welcome to a cleaner home.</h2>
                <p className="appWords">The Jet Stick Vacuum and Samsung Clean Station are this season's answer for the ultimate dust-free clean.</p> 
                <button className="shop">Shop Now</button>
                </Carousel.Item>
                {/* Third Item */}
                <Carousel.Item>
                    <img
                    className="homePic"
                    src={JDPower}
                    alt="Third slide"
                    />

                <h2 className="appCap">More awards. More reasons to smile.</h2>   
                <p className="appWords">We've received more J.D. Power Awards for Kitchen and Laundry Appliances than any other manufacturer this year. </p> 
                <button className="learn">Learn More</button>
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default JDAwards;