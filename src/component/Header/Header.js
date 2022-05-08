import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const LogOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="../home">
            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
            {"  "} 
            UniMart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="btn btn-primary" to="home">Home</Link>
              <Link className="btn btn-primary" to="Blogs">Blogs</Link>
              { user? (<><Link className="btn btn-primary" to="addItem">Add Item</Link>
              <Link className="btn btn-primary" to="myItem">My Item</Link>
              <Link className="btn btn-primary" to="manageinventory">Manage Inventory</Link>
              <button className="btn btn-primary" onClick={LogOut} > LogOut</button></>):(
              <Link className="btn btn-primary" to="Login">Login</Link>)

              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
