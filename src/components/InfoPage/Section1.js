import React from "react";
import { Section1text } from "./Text";
const Section1 = props => {
  return (
    <div className="Info_Page_Middle_Cont">
      <div className="Info_Page_Graybox">
        <div
          className="Info_Page_Middle_Image"
          style={{ backgroundImage: `url(${props.menu[1]})` }}
        ></div>
        <div className="Info_Page_Middle_Text_Cont">
          <h1 className="Info_Page_Middle_Text" style={{ fontSize: "50px" }}>
            {Section1text[0]}
          </h1>
          <p className="Info_Page_Middle_Ptext" style={{ fontSize: "20px" }}>
            {Section1text[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
