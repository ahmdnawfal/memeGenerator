import { Navbar, Container, Nav, } from "react-bootstrap";
import memeImage from "../image/navbar-logo.png";
import "./Navbar.css";

export default function Navigation() {
  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={memeImage}
              height="30"
              className="logo d-inline-block align-top"
            />
            <span className="text-logo">Meme Generator</span>
          </Navbar.Brand>
            <Nav>React Course - Project 3</Nav>
        </Container>
      </Navbar>
    </div>
  );
}
