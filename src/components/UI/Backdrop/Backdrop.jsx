import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ visible, toggleVisibility }) => (
  <div
    className='Backdrop'
    isvisible={`${visible}`}
    onClick={toggleVisibility}
  ></div>
);

export default Backdrop;
