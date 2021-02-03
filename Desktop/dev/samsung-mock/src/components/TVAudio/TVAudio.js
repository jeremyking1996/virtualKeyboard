import React, { Component } from 'react';
import CesPic from "../../images/CES2021.png";
import Virtual from "../../images/Virtual.png";
import QLED from "../../images/QLEDTv.png";
import Carousel from 'react-bootstrap/Carousel'

import './TVAudio.css'


class TVAudio extends Component {
    render() {
        return (
            <div className="TVAudio">
                <h1 className="TVTitle"><strong>TV & Audio</strong></h1>
                <button className="tvButton"><strong>CES 2021</strong></button>
                <button className="tvButton"><strong>Virtual TV Store</strong></button>
                <button className="tvButton"><strong>QLED TVs</strong></button>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="slideImg"
                    src={CesPic}
                    alt="First slide"
                    />
                    <h2>Find your next TV in the Virtual TV Store</h2>
                    <p>Interact with our latest collections through 360 virtual tours, educational demos, guided buying assistance, and more.</p>
                    <button className="shopnow">Shop Now</button>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="slideImg"
                    src={Virtual}
                    alt="Second slide"
                    />
                <h2>Get more from your TV.</h2>
                <p>Discover the QLED difference and enter a world saturated with color and enhanced with next-level intelligence.</p>
                <button className="shopnow">Shop now</button>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="slideImg"
                    src={QLED}
                    alt="Third slide"
                    />
                <h2>World-Class galleries in your living room.</h2>
                <p>Elegant design blends flawlessly to elevate your home decor and transforms into a work of art when you're not watching TV</p>
                <button className="shopnow">Shop Now</button>
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default TVAudio;