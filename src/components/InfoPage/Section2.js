import React from "react";
import { Section2text } from "./Text";
const Section2 = props => {
  return (
    <div>
      <div
        className="Info_Page_Middle_Cont"
        style={{ justifyContent: "start" }}
      >
        <div className="Info_Page_Bluebox">
          <div className="Info_Page_Middle_Text_Cont2">
            <h1
              className="Info_Page_Middle_Text"
              style={{ color: "white", fontSize: "50px" }}
            >
              {" "}
              {Section2text[0]}
            </h1>
            <p className="Info_Page_Middle_Ptext_grey">{Section2text[1]}</p>
          </div>
          <div
            className="Info_Page_Middle_Image2"
            style={{ backgroundImage: `url(${props.menu[2]})` }}
          ></div>
        </div>
      </div>
      <div className="Info_Page_Bottom_Blue">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Section2;
