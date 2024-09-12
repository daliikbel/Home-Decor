import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getMe } from "../redux/slices/auth.slice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const user = useSelector((state) => state.AuthReducer.user);

  useEffect(() => {
    if (isAuth) {
      dispatch(getMe());
    }
  }, [dispatch, isAuth]);

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#fdf0e0",
        padding: "0.5rem 1rem",
      }}
    >
      <Navbar.Brand>
        <img
          src="/images/logo.webp"
          alt="Site Logo"
          style={{
            height: "130px",
            borderRadius: "10px",
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" style={{ flexGrow: 1 }}>
        <Nav
          className="me-auto"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            padding: "0",
            margin: "0",
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="text-dark">
            Services
          </Nav.Link>
          {isAuth && (
            <>
              {user?.userType === "customer" ? (
                <Nav.Link as={Link} to="/CustomerProfile" className="text-dark">
                  Profile
                </Nav.Link>
              ) : user?.userType === "company" ? (
                <Nav.Link as={Link} to="/CompanyProfile" className="text-dark">
                  Profile
                </Nav.Link>
              ) : null}
            </>
          )}
          <NavDropdown
            title={<span className="text-dark">Contact</span>}
            id="navbarScrollingDropdown"
            className="dropdown-menu-dark"
          >
            <NavDropdown.Item as={Link} to="/contact" className="text-dark">
              Contact
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/AboutUs" className="text-dark">
              About Us
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div
          className="d-flex align-items-center"
          style={{ marginLeft: "auto" }}
        >
          <Form className="d-flex" style={{ margin: "0", padding: "0" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{
                maxWidth: "250px",
                fontSize: "16px",
                padding: "0.5rem",
              }}
            />
            <Button
              variant="outline-dark"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
              }}
            >
              Search
            </Button>
          </Form>
          <div className="d-flex align-items-center ms-3">
            {isAuth ? (
              <>
                <h5
                  className="mb-0 me-2 text-dark"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {user?.firstName}
                </h5>
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch(logout())}
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-dark me-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline-dark"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
