import React from "react";
import logo from "../assets/Logo.png";
import user from "../assets/Profile.png";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div>
        <img src={logo} alt="" className="logo_img"/>
      </div>
      <div>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default SideNav;
