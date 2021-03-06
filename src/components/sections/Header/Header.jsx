import React from "react";

import { headerVideoMp4 } from "../../../assets/img";

import "./Header.scss";

const Header = () => (
  <div className="Header">
    <video className="Header_video" autoPlay loop muted>
      <source src={headerVideoMp4} type="video/mp4" />
    </video>
  </div>
);

export default Header;
