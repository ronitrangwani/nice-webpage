import React from "react";
import "./NavBar.css";
import ICO from "../../images/profile.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const style = {
    color: "white",
  };

  return (
    <section className="header">
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-9 mx-auto">
            <Navbar
              style={style}
              collapseOnSelect
              expand="lg"
              bg="#161e3c"
              variant="dark"
            >
              <Container>
                <Navbar.Brand style={style} href="#">
                  <img className="profile-img" src={ICO} alt="profile" />
                  Annette Black
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link style={style} href="#">
                      Retreat
                    </Nav.Link>
                    <Nav.Link style={style} href="#">
                      Programs
                    </Nav.Link>
                    <Nav.Link style={style} href="#">
                      Blogs
                    </Nav.Link>
                    <Nav.Link style={style} href="#">
                      Contact Us
                    </Nav.Link>
                    <button style={style} className="round-outlined-button">
                      Login
                    </button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
