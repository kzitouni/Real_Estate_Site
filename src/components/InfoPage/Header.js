import React from "react";
import { Headertext, Images } from "./Text";
const Header = props => {
  return (
    <div>
      <div
        className="Info_Page_Header_Cont"
        style={{ backgroundImage: `url(${props.menu[0]})` }}
      >
        <div className="Info_Page_Header_Dark"></div>
        <div className="Info_Page_Header_Text_Cont">
          <h1 className="Info_Page_Header_Title">{Headertext[0]}</h1>
          <p className="Info_Page_Header_Subtext">{Headertext[1]}</p>
        </div>
      </div>
      <div className="Info_Page_Header_Sub">
        <p className="Info_Page_Line">|</p>
        <p className="Info_Page_Header_Sub_Text">{Headertext[2]}</p>
      </div>
    </div>
  );
};
export default Header;
