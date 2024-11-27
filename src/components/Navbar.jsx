import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartCount = useSelector((state) => state.product.cartCount);

  return (
    <Navbar bg="light" expand="lg" className="border-bottom" style={{ fontFamily: "Roboto, sans-serif" }}>
      <Container>
        <Navbar.Brand href="#" style={{ fontFamily: "Playfair Display, serif", fontWeight: "700", fontSize: "1.5rem" }}>
          JEWELBOX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <div className="icon position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-bag-fill text-secondary"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
          </svg>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {cartCount}
          </span>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;