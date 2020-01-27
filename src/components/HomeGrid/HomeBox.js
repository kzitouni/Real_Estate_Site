import React, { useContext } from "react";
import { FaMapMarkerAlt, FaBath, FaVectorSquare } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { Context } from "../../Functions/SearchFetch";
import { Link } from "react-router-dom";

const HomeBox = item => {
  const { onClicked, setHouse } = useContext(
    Context
  );
  const price = item.zestimate != ""
  ? item.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  : 
    item.rentzestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " /Month";
  return (
    <div className="Home_Box_Cont">
      <div className="Home_Box_Image_Cont" onMouseEnter={() => setHouse()}>
        <Link to="/Home" onClick={() => onClicked(item.zpid)}>
          <div
            className="Home_Box_Image"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        </Link>
      </div>
      <div className="Home_Sub_Cont">
        <p className="Home_Sub_Address">
          <FaMapMarkerAlt />
          {item.address}
        </p>
        <div className="Home_Sub_IconInfo">
          <p className="Home_Sub_Bath_Text">
            <FaBath style={{ marginRight: ".2rem" }} /> {item.bathrooms} Bath
          </p>
          <p className="Home_Sub_Bed_Text">
            <IoIosBed style={{ marginRight: ".2rem" }} />{" "}
            {item.bed == 0 ? "?" : item.bed} Bed
          </p>
          <p className="Home_Sub_Bed_Text">
            <FaVectorSquare style={{ marginRight: ".2rem" }} /> {item.sqft == "" ? "?" : item.sqft} sq
            ft
          </p>
        </div>
        <div className="Home_Sub_Price_Cont">
          <p className="Home_Sub_Price_Price">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBox;
