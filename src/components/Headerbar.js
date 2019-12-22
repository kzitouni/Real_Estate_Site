import React, {useState} from 'react'
import {FaHome } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
const Headerbar = () => {
const [selected, setSelected] = useState({color: '#fc6e64', borderBottom: '2px solid #fc6e64'})
const [unselected, setUnselected] = useState()
    return (
        <div style={{display:'flex'}}>
        <div className="Header_Cont"> 
            <NavLink to="/" className="Header_Link_Text" activeClassName="Header_Active" >
                <FaHome className="Home_Logo" />
            </NavLink>
            <NavLink to="/" className="Header_Link_Text" activeClassName="Header_Active">
                <div className="Header_Button" >
            <p className="Header_left_text">Apartments</p>
                </div>
            </NavLink>
            <NavLink to="/Buy" className="Header_Link_Text" activeClassName="Header_Active" >
                <div className="Header_Button" >
            <p className="Header_left_text">Buy</p>
                </div>
            </NavLink>
            <NavLink to="/Sell" className="Header_Link_Text" activeClassName="Header_Active">
                <div className="Header_Button">
            <p className="Header_left_text">Sell</p>
                </div>
            </NavLink>
            <NavLink to="/Info" className="Header_Link_Text" activeClassName="Header_Active">
                <div className="Header_Button" >
            <p className="Header_left_text">More Info</p>
                </div>
            </NavLink>
       
        </div>
        <div className="Header_Right_Cont">

</div>
        </div>
    )
 
}

export default Headerbar