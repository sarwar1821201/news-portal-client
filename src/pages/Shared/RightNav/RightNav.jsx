import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from "../QZone/Qzone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2" variant="outline-primary"> <FaGoogle></FaGoogle>  Sign in With Google</Button>
      <Button variant="outline-secondary"> <FaGithub></FaGithub>  Sign in With GitHub</Button>

      <div >
        <h4 className="mt-2">Find Us On</h4>
        <ListGroup >
      <ListGroup.Item > <FaFacebook></FaFacebook> Facebook  </ListGroup.Item>
      <ListGroup.Item > <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram> Instagram </ListGroup.Item>
     
    </ListGroup>
      {/* <Button variant="outline-secondary"> <FaFacebook></FaFacebook>  Facebook</Button>
      <Button variant="outline-secondary"> <FaTwitter></FaTwitter> Twitter</Button>
      <Button variant="outline-secondary"> <FaInstagram></FaInstagram>  Instagram </Button> */}

      </div>

      <Qzone></Qzone>

      {/* <div>
       <div className="position-relative" >
       <img src={bg} alt="" />
      
        <div className="position-absolute">
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quaerat debitis cum optio tenetur ab facilis eligendi aspernatur illo vero.</p>
        </div>
        </div>
      </div> */}

<Container>
      <div className="position-relative">
        <img src={bg} alt="Your Image" className="img-fluid" />
        <div className="position-absolute top-50 start-50 translate-middle text-start text-white">
         <h4 className="text-white">Create An Amazing NewsPaper</h4>
         <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt?</p>
         <Button variant="outline-primary"> <span className="text-white"> Facebook</span></Button>
        </div>
      </div>
    </Container>

    </div>
  );
};

export default RightNav;
