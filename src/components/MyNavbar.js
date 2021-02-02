import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { IoMdCart } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import style from "../css/navbar.module.css";

function MyNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src="/logo.jpg"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className=" m-auto text-md-center justify-content-center">
        <Nav.Link className={style.navlink} href="/">
          Shop
        </Nav.Link>
        <Nav.Link className={style.navlink} href="#about">
          About Us
        </Nav.Link>
        <Nav.Link className={style.navlink} href="#stores">
          Our Stores
        </Nav.Link>
        <Nav.Link className={style.navlink} href="#contact">
          Contact Us
        </Nav.Link>
      </Nav>

      <Nav
        style={{ display: "contents" }}
        className="navbar-nav ml-auto justify-content-end "
      >
        <Nav.Link href="#search">
          <IoIosSearch style={{ paddingRight: "6px" }} size="30" />
        </Nav.Link>
        <Nav.Link href="#account">
          <IoMdPerson size="25"></IoMdPerson>
        </Nav.Link>
        <Nav.Link href="/cart">
          <IoMdCart size="25"></IoMdCart>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
