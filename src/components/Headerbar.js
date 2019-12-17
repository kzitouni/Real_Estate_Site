import React from 'react'
import {FaHome } from "react-icons/fa";

const Headerbar = () => {

    return (
        <div style={{display:'flex'}}>
        <div className="Header_Cont">
            <FaHome className="Home_Logo" />
            <p className="Header_left_text">Apartments</p>
            <p className="Header_left_text">Houses</p>
            <p className="Header_left_text">Favorites</p>
            <p className="Header_left_text">Alerts</p>
       
        </div>
        <div className="Header_Right_Cont">

</div>
        </div>
    )
 
}

export default Headerbar