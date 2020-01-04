import React from "react";
import { Section3text } from "./Text";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const Section3 = props => {
  return (
    <div className="Info_Page_Middle_Cont">
      <div
        className="Info_Page_Graybox"
        style={{ width: "80%", alignItems: "unset", marginTop: "0" }}
      >
        <ScrollAnimation animateIn='fadeInUp' animateOnce='true'
         className="Info_Page_Middle_Image_3rd"
          style={{ backgroundImage: `url(${props.menu[3]})` }} >
          </ScrollAnimation>
        <div className="Info_Page_Middle_Text_Cont_3rd">
        <ScrollAnimation  animateIn='fadeInUp' animateOnce='true'>
          <h1 className="Info_Page_Middle_Text" style={{ fontSize: "50px" }}>
            {Section3text[0]}
          </h1>
          <p className="Info_Page_Middle_Ptext" style={{ fontSize: "20px" }}>
            {Section3text[1]}
          </p>
          </ScrollAnimation> 
        </div>
      </div>
    </div>
  );
};

export default Section3;
