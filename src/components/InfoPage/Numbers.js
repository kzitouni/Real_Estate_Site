import React from "react";
import { Numberstext } from "./Text";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const Numbers = () => {
  return (
    <div className="Info_Page_Numbers_Cont">
      <div className="Info_Page_Header_Dark"></div>
      <div className="Info_Page_Header_Text_Cont" style={{ marginTop: "5rem" }}>
      <ScrollAnimation  animateIn='fadeInUp' animateOnce='true'>
        <h1
          className="Info_Page_Header_Title"
          style={{
            textAlign: "left",
            marginLeft: "6%",
            textShadow: "-2px 0px rgba(0,0,0,0.4)"
          }}
        >
          {Numberstext[0]}
        </h1>
        </ScrollAnimation>
        <div className="Info_Page_Stats_Cont" style={{ marginLeft: "3%" }}>
          <div className="Info_Page_Stats_Section">
          <ScrollAnimation  animateIn='fadeInUp' animateOnce='true'>
            <p className="Info_Page_Header_Subtext">{Numberstext[1]}</p>
            <p>{Numberstext[2]}</p>
            </ScrollAnimation>
          </div>

          <div className="Info_Page_Stats_Section">
          <ScrollAnimation  animateIn='fadeInUp' animateOnce='true'>
            <p className="Info_Page_Header_Subtext">{Numberstext[3]}</p>
            <p>{Numberstext[4]}</p>
            </ScrollAnimation>
          </div>

          <div className="Info_Page_Stats_Section">
          <ScrollAnimation  animateIn='fadeInUp' animateOnce='true'>
            <p className="Info_Page_Header_Subtext">{Numberstext[5]}</p>
            <p>{Numberstext[6]}</p>
            </ScrollAnimation>
          </div>
          <div
            className="Info_Page_Stats_Section"
            style={{ marginRight: "10%" }}
          >
                    <ScrollAnimation  animateIn='fadeInUp' animateOnce='true'>
            <p
              className="Info_Page_Header_Subtext"
              style={{ marginRight: "10%" }}
            >
              {Numberstext[7]}
            </p>
            <p>{Numberstext[8]}</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
