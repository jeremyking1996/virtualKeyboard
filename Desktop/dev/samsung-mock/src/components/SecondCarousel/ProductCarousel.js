import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import secondSlide from '../../images/twoPhone.png'
import samsungBundle from '../../images/samsungBundle.png'
import grassTag from '../../images/smarttagGrass.jpg'
import phoneCircle from '../../images/phoneCircle.png'
import tabletBundle from '../../images/tabletBundle.png'

class ProductCarousel extends Component {
    render() {
        return (
            <div>
              <h1 style={{marginTop: "15%"}}>Mobile</h1> 
              <Carousel>
                  {/* First item */}
                <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src={secondSlide}
                    alt="Galaxy Plus"
                    style={{display:"block", margin:"auto"}}
                    />
                    <h1>Introducing Galaxy S21 5G</h1>
                    <p>Get up to $700 trade-in credit, starting at $99.99 or $2.79/mo for 36 months. Plus, get up to 75 dollars instant credit and a free Galaxy SmartTag.</p>
                <button style={{backgroundColor:"black", color:"white"}}>Buy Now</button>
                </Carousel.Item>
                {/* Second item */}
                <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src={samsungBundle}
                    alt="Samsung Bundle"
                    style={{display:"block", margin:"auto"}}
                    />

                    <h1>Bundle your way to better health.</h1>
                    <p>Bundle Galaxy Watch3 and Galaxy Buds Pro for $350 when you purchase the Galaxy S21 5G</p>
                    <button style={{backgroundColor:"black", color:"white"}}>Buy Now</button>
                </Carousel.Item>
                {/* Third item */}
                <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src={grassTag}
                    alt="grass tag"
                    style={{display:"block", margin:"auto"}}
                    />

                  <h1>Introducing Galaxy SmartTag</h1>
                  <p>Keep track of the most important things in your life for only $29.99.</p>  
                  <button style={{backgroundColor:"black", color:"white"}}>Buy Now</button>
                </Carousel.Item>
                {/* Forth item */}
                <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src={phoneCircle}
                    alt="phone circle"
                    style={{display:"block", margin:"auto"}}
                    />

                    <h1>All you want, to do all you love.</h1>
                    <p>Get the Galaxy S20 FE 5G starting from $9.73/mo for 36 months or $349.99 with eligible trade-in.</p>
                    <button style={{backgroundColor:"black", color:"white"}}>Buy Now</button>
                </Carousel.Item>
                {/* Fifth item */}
                <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src={tabletBundle}
                    alt="Third slide"
                    style={{display:"block", margin:"auto"}}
                    />

                    <h1>Make your Galaxy Ecosytem epic.</h1>
                    <p>Get Tab S7 for an additional $284.99 when you purchase a Galaxy S21 Ultra 5g. Seamlessly work, create and play at 5g speeds.</p>
                    <button style={{backgroundColor:"black", color:"white"}}>Buy Now</button>
                </Carousel.Item>
                    </Carousel> 
            </div>
        );
    }
}

export default ProductCarousel;