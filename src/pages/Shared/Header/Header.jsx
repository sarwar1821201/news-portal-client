import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  
     const {user} =useContext(AuthContext)
     
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without fear and favour</small>
        </p>
        <p>{moment().format("dddd, MMMM Do, YYYY, h:mm:ss a")}</p>
      </div>

      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50} >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt a animi ullam possimus nulla numquam! Voluptate quidem sint illum voluptatem. Natus est eum nulla aperiam veritatis magni perspiciatis adipisci libero sequi, assumenda amet omnis facilis suscipit impedit ex inventore. Perferendis suscipit, magnam placeat reiciendis quas quam ut optio aut.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to='/' >Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#features">Career</Nav.Link>
           
          </Nav>
          <Nav>

          {
            user &&   <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2rem'}}  ></FaUserCircle></Nav.Link>
          }

            <Nav.Link eventKey={2} href="#memes">
            {
              user ?  <Button variant="secondary">Logout</Button> :
             <Link to='/login' >  <Button variant="secondary">Login</Button> </Link>

            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </Container>
  );
};

export default Header;
