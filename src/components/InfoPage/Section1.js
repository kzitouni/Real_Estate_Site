import React from "react";
import { Section1text } from "./Text";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const Section1 = props => {
  return (
    <div className="Info_Page_Middle_Cont">
      <div className="Info_Page_Graybox">
      <ScrollAnimation animateIn='fadeInUp' animateOnce='true'  className="Info_Page_Middle_Image"
          >
<img src={props.menu[1]} className="Info_Page_Middle_Image" alt="Buildings Image"/>
        </ScrollAnimation>

        <div className="Info_Page_Middle_Text_Cont">
        <ScrollAnimation  animateIn='fadeInUp' animateOnce='true'>
          <h1 className="Info_Page_Middle_Text" style={{ fontSize: "50px" }}>
            {Section1text[0]}
          </h1>
          <p className="Info_Page_Middle_Ptext" style={{ fontSize: "20px" }}>
            {Section1text[1]}
          </p>
          </ScrollAnimation>

        </div>
      </div>
    </div>
  );
};

export default Section1;
