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

  navRef.current = navBackground;
  navRef.current = text;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
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
        transition: "500ms ease",
        backgroundColor: navBackground ? "white" : "transparent",
      }}
    >
      <NavbarBrand>
        <img className="blog-logo" alt="blog-logo" src={logo} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink className="navbar-menu-item">HOW DOES IT WORK?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-menu-item">WHY US?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-menu-item">CONTACT US?</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <NavLink className="navbar-menu-item">BLOG</NavLink>
        </NavbarText>
        <NavbarText>
          <NavLink className="navbar-menu-item">DEALERS</NavLink>
        </NavbarText>
        <NavbarText>
          <Button className="signin-register">SIGN IN / REGISTER</Button>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
