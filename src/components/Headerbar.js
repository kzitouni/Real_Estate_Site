import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Headerbar = () => {
  return (
    <div className="Upper_Nav_Bar_Cont" >
      <div className="Header_Cont">
        <div>
          <FaHome className="Home_Logo" />
        </div>
          <div className="Header_Button">
          <NavLink
          exact
          to="/"
          className="Header_Link_Text"
          activeClassName="Header_Active"
        >
            <p className="Header_left_text">Homes</p>
            </NavLink>
          </div>

          <div className="Header_Button">
          <NavLink
          to="/Buy"
          className="Header_Link_Text"
          activeClassName="Header_Active"
        >
            <p className="Header_left_text">Buy</p>
            </NavLink>
          </div>
          <div className="Header_Button">
          <NavLink
          to="/Sell"
          className="Header_Link_Text"
          activeClassName="Header_Active"
        >
            <p className="Header_left_text">Sell</p>
          </NavLink>
          </div>
          <div className="Header_Button">
          <NavLink
          to="/Info"
          className="Header_Link_Text"
          activeClassName="Header_Active"
        >
            <p className="Header_left_text">Rent</p>
          </NavLink>
          </div>
      </div>
      <div className="Header_Right_Cont"></div>
    </div>
  );
};

export default Headerbar;