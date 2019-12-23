import React, { useContext } from "react";
import HomeBox from "./HomeBox";
import HomeBoxMapped from "./HomeBoxMapped";
import { Context } from "../Functions/SearchFetch";
const HomeResultsCont = () => {
  const { addy, setBack } = useContext(Context);
  setBack(false);
  return (
    <div className="Right_Side_Cont">
      <h1 className="Search_Title">
        {addy.cit}, {addy.sta.toUpperCase()}
      </h1>

      <HomeBoxMapped />
    </div>
  );
};

export default HomeResultsCont;