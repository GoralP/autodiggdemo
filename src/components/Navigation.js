import React, { useState, useEffect, useRef } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
  NavLink,
} from "reactstrap";
import logo from "../images/logo_autodigg.png";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [showHeader, setShowHeader] = useState(true);
  const [hideHeader, setHideHeader] = useState(false);

  const navRef = useRef();
  navRef.current = hideHeader;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      const hide = window.scrollY < 50;
      if (navRef.current !== show) {
        setHideHeader(show);
        setShowHeader(hide);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showHeader && (
        <Navbar
          expand="md"
          className="nav-text header-master bg-blue pad-large "
          fixed="top"
        >
          <NavbarBrand className="column-reverse">
            <img className="logo" alt="Autodigg-logo" src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <FaBars className="icon-bars" />
          </NavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto">
              <NavItem>
                <NavLink className="menu-padding">HOW DOES IT WORK?</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="menu-padding">WHY US?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="menu-padding">CONTACT US?</NavLink>
              </NavItem>
            </Nav>
            <NavLink className="menu-padding menu-element">BLOG</NavLink>
            <NavLink className="menu-padding  menu-element">DEALERS</NavLink>
            <NavbarText className="menu-element">
              <Button className="signin-register">SIGN IN / REGISTER</Button>
            </NavbarText>
          </Collapse>
        </Navbar>
      )}

      {hideHeader && (
        <Navbar
          expand="md"
          className="nav-text-hide header-master-hide"
          fixed="top"
        >
          <NavbarBrand className="column-reverse">
            <img className="logo" alt="Autodigg-logo" src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <FaBars className="icon-bars" />
          </NavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto">
              <NavItem>
                <NavLink className="menu-padding-hide">
                  HOW DOES IT WORK?
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="menu-padding-hide">WHY US?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="menu-padding-hide">CONTACT US?</NavLink>
              </NavItem>
            </Nav>
            <NavLink className="menu-padding-hide menu-element">BLOG</NavLink>
            <NavLink className=" menu-padding-hide menu-element">
              DEALERS
            </NavLink>
            <NavbarText className=" menu-element">
              <Button className="signin-register-hide">
                SIGN IN / REGISTER
              </Button>
            </NavbarText>
          </Collapse>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
