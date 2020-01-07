import React, { useContext } from "react";
import { FaMapMarkerAlt, FaBath, FaVectorSquare } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { Context } from "../../Functions/SearchFetch";
import { Link } from "react-router-dom";

const HomeBox = item => {
  const { onClicked, setHouse } = useContext(
    Context
  );
  let price =
    item.zestimate != undefined
      ? "$" + item.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "N/A";
  let type =
    item.type != undefined
      ? item.type
          .toString()
          .replace(/([A-Z 0-9])/g, " $1")
          .trim()
      : item.type;

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
            <FaVectorSquare style={{ marginRight: ".2rem" }} /> {item.sqft} sq
            ft
          </p>
        </div>
        <div className="Home_Sub_Price_Cont">
          <p className="Home_Sub_Price_Price">
            {price}
            {item.rentzestimate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBox;
