import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2" variant="outline-primary"> <FaGoogle></FaGoogle>  Sign in With Google</Button>
      <Button variant="outline-secondary"> <FaGithub></FaGithub>  Sign in With GitHub</Button>

      <div>
        <h4 className="mt-2">Find Us On</h4>
      </div>



    </div>
  );
};

export default RightNav;
