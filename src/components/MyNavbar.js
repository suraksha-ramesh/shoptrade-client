import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { IoMdCart } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

function MyNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">ABC</Navbar.Brand>
      <Nav className="navbar-nav mx-auto text-md-center">
        <Nav.Link href="/">Shop</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#stores">Our Stores</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button>
          <IoIosSearch size="18" color="#fafafa" />
        </Button>
        <Nav className="navbar-nav mx-auto ">
          <Nav.Link href="#account">
            <IoMdPerson size="25"></IoMdPerson>
          </Nav.Link>
          <Nav.Link href="/cart">
            {/* <Link to="/cart"></Link> */}
            <IoMdCart size="25"></IoMdCart>
          </Nav.Link>
        </Nav>
      </Form>
    </Navbar>
  );
}

export default MyNavbar;
