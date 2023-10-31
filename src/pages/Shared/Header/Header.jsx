import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without fear and favour</small>
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      </div>

      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50} >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt a animi ullam possimus nulla numquam! Voluptate quidem sint illum voluptatem. Natus est eum nulla aperiam veritatis magni perspiciatis adipisci libero sequi, assumenda amet omnis facilis suscipit impedit ex inventore. Perferendis suscipit, magnam placeat reiciendis quas quam ut optio aut.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
