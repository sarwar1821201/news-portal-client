import React from "react";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without fear and favour</small>
        </p>
      </div>
    </div>
  );
};

export default Header;
