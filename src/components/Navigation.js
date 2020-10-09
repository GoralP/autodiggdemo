import React, { useState, useEffect, useRef } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from "reactstrap";
import logo from "../images/logo_autodigg.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [navBackground, setNavBackground] = useState(false);
  const [text, setText] = useState(false);
  const navRef = useRef();
  const navRefe = useRef();

  navRef.current = navBackground;
  navRefe.current = text;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
        // setText(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRefe.current !== show) {
        setText(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      className="nav-text header-master"
      fixed="top"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "white" : "transparent",
      }}
      // style={{
      //   backgroundColor: window.scrollY > 100 ? "white" : "transparent",
      // }}
    >
      <NavbarBrand>
        <img className="blog-logo" alt="blog-logo" src={logo} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto">
          <NavItem
            className="navbar-menu-item"
            style={{
              transition: "1s ease",
              color: text ? "black" : "",
            }}
          >
            <NavbarText>HOW DOES IT WORK?</NavbarText>
          </NavItem>

          <NavItem
            className="navbar-menu-item"
            style={{
              transition: "1s ease",
              color: text ? "black" : "",
            }}
          >
            <NavbarText className="pl-4">WHY US?</NavbarText>
          </NavItem>
          <NavItem
            className="navbar-menu-item"
            style={{
              transition: "1s ease",
              color: text ? "black" : "",
            }}
          >
            <NavbarText className="pl-4">CONTACT US?</NavbarText>
          </NavItem>
        </Nav>
        <NavbarText
          className="navbar-menu-item"
          style={{
            transition: "1s ease",
            color: text ? "black" : "",
          }}
        >
          BLOG
        </NavbarText>
        <NavbarText
          className="navbar-menu-item px-3"
          style={{
            transition: "1s ease",
            color: text ? "black" : "",
          }}
        >
          DEALERS
        </NavbarText>
        <NavbarText>
          <Button
            className="signin-register"
            style={{
              transition: "1s ease",
              color: text ? "orangered" : "",
            }}
          >
            SIGN IN / REGISTER
          </Button>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
