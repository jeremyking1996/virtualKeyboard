import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap/';
import samsungLogo from "../../images/samsungLogo.png";

class MainNav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src= {samsungLogo} alt="Samsung-logo" style={{width: "200px", height: "100px"}}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Galaxy 5G</Nav.Link>
      <NavDropdown title="Mobile" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Featured</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Smartphones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Watches</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Audio</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Accessories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Apps & Services</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.8">Other</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="TV & Audio" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Featured</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">TV & Home Theaters</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Home Audio</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">TV Accessories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Offers</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Home Appliances" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Smart Home" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Featured</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kitchen</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Laundry</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Vacuums & Floor Care</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Air Solutions</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Offers</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Computing" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Offers" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Offers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Discount Programs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Trade-In & Upgrade </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Smart Ways to Shop</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Redeem Retail Offers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Gift Ideas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Small Business Offers</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Gift Ideas</Nav.Link>
    </Nav>
    <Form inline>
    <NavDropdown title="Explore" id="basic-nav-dropdown explore">
        <NavDropdown.Item href="#action/3.1">Explore All</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Stories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">How-To</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Brand</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Experiences</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Community</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Support" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Product Help</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Manuals & Software</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Request a service</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Register a product</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Warranty Information</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Order Support</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Support Care+ for Mobile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Support Care+ for TV & Home Appliances</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Business</Nav.Link>
      <FormControl type="dropdown"/>
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </div>
        );
    }
}

export default MainNav;