import React, { Component } from 'react';
import "./Explore.css"
import explorePic from "../../images/explore.png" 
class Explore extends Component {
    render() {
        return (
            <div className="combo">
                <img src={explorePic} alt="fun pic" className="funPic"></img>
                <br/><br/><br/><br/>
                <p className="explore" id="first">01 <strong>2021 New Year's Resolution: Your Fine As Is</strong></p>
                <p className="explore" id="second">02 <strong>Get on Board with Samsung's New Brand Sound</strong></p>
                <p className="explore" id="last">03 <strong>We Asked, You Answered, We Delivered</strong></p>
            </div>
        );
    }
}

export default Explore;