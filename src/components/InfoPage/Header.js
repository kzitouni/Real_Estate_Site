import React from "react";
import { Headertext } from "./Text";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const Header = props => {
  return ( 
    <div>
      <div
        className="Info_Page_Header_Cont"
        style={{ backgroundImage: `url(${props.menu[0]})` }}
      > 
        <div className="Info_Page_Header_Dark"></div>
        <div className="Info_Page_Header_Text_Cont">
        <ScrollAnimation animateIn='slideInLeft' animateOnce='true'>
          <h1 className="Info_Page_Header_Title">{Headertext[0]}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInRight' animateOnce='true'>
          <p className="Info_Page_Header_Subtext">{Headertext[1]}</p>
        </ScrollAnimation>
        </div>
      </div>
      <div className="Info_Page_Header_Sub">
      <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
        <p className="Info_Page_Line">|</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
        <p className="Info_Page_Header_Sub_Text">{Headertext[2]}</p>
        </ScrollAnimation>
      </div>
    </div>
  );
};
export default Header;
