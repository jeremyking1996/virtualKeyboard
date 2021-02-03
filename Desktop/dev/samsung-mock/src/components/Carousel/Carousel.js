import React, { Component } from 'react'; 
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import firstImg from '../../images/FirstSlideGalaxy.jpg';
import secondImg from '../../images/secondSlide.jpeg';
import thirdImg from '../../images/GalaxyBuds.jpeg';
import forthImg from '../../images/ThirdSilde.webp';
import fifthImg from '../../images/FifthSlide.jpg';


class MainCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    {/* First Carousel Item */}
                <Carousel.Item>
                <img
                    src={firstImg}
                    alt="First slide"
                    className="carousel-image"
                />
                <Carousel.Caption>
                    <h3>Meet the new, epic Galaxy S21 5G</h3>
                    <p className="carousel-text">Get <strong>$100 instant credit,</strong> a free Galaxy SmartTag, and up to 700$ instant credit.<br/>Now 499.99 for a limited time.</p>
                </Carousel.Caption>
                </Carousel.Item>
                {/* Second Carousel Item */}
                <Carousel.Item>
                <img
                    className="carousel-image"
                    src={secondImg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Meet the new, epic Galaxy S21 5G</h3>
                    <p className="carousel-text">Get <strong>$75 instant credit,</strong> a free Galaxy SmartTag, and up to 700$ instant credit.<br/>Now 499.99 for a limited time.</p>
                </Carousel.Caption>
                </Carousel.Item>
                {/* Third Carousel Item */}
                <Carousel.Item>
                <img
                    className="carousel-image"
                    src={thirdImg}
                    alt="Third slide"
                />
                 <Carousel.Caption>
                    <h3>Introducing Galaxy Buds Pro </h3>
                    <p className="carousel-text">Elevate everyday moments with studio quality sound and Active Noise Cancellation </p>
                </Carousel.Caption>
                </Carousel.Item>
                {/* Forth Carousel Item */}
                
                <Carousel.Item>
                <img
                    className="carousel-image"
                    src={forthImg}
                    alt="Forth Slide"
                />

                <Carousel.Caption>
                    <h3>Go Big for the Big Game</h3>
                    <p className="carousel-text">Save up to $3000 on select TVs and up to $400 for the big game. <br/> For a limited time only.</p>
                </Carousel.Caption>
                </Carousel.Item>
                {/* Fifth Carousel Item */}
                <Carousel.Item>
                <img
                    className="carousel-image"
                    src={fifthImg}
                    alt="Last slide"
                />

                <Carousel.Caption>
                    <h3>Designed for you, by you.</h3>
                    <p className="carousel-text">BESPOKE refridgerators, available in eight colors and two finishes, can be mixed and matched to fit your style needs.</p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default MainCarousel;