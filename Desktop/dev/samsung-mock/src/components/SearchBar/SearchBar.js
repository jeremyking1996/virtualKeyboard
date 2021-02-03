import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <h1 style={{alignContent: "center", marginTop: "5%"}}>Looking for something else?</h1>
                <input type="text" className="search"></input>
            </div>
        );
    }
}

export default SearchBar;