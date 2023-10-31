import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2" variant="outline-primary"> <FaGoogle></FaGoogle>  Sign in With Google</Button>
      <Button variant="outline-secondary"> <FaGithub></FaGithub>  Sign in With GitHub</Button>

      <div >
        <h4 className="mt-2">Find Us On</h4>
        {/* <ListGroup >
      <ListGroup.Item > <FaFacebook></FaFacebook> Facebook  </ListGroup.Item>
      <ListGroup.Item > <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram> Instagram </ListGroup.Item>
     
    </ListGroup> */}
      <Button variant="outline-secondary"> <FaFacebook></FaFacebook>  Facebook</Button>
      <Button variant="outline-secondary"> <FaTwitter></FaTwitter> Twitter</Button>
      <Button variant="outline-secondary"> <FaInstagram></FaInstagram>  Instagram </Button>

      </div>



    </div>
  );
};

export default RightNav;
