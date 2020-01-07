import React, { useContext } from "react";
import { IoIosBed } from "react-icons/io";
import { FaBath, FaVectorSquare } from "react-icons/fa";
import { Context } from "../../Functions/SearchFetch";
const IndHomeText = () => {
  const { house } = useContext(Context);
  console.log(house, "housey");
  const price =
    house.zestimate != undefined
      ? "$" + house.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "$" +
        house.rentzestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " /Month";
  const beds =
    house.result.editedFacts != undefined
      ? house.result.editedFacts.bedrooms != undefined
        ? house.result.editedFacts.bedrooms._text
        : "?"
      : "?";
  const bath =
    house.result.editedFacts != undefined
      ? house.result.editedFacts.bathrooms != undefined
        ? house.result.editedFacts.bathrooms._text
        : "?"
      : "?";
  const sqft =
    house.result.editedFacts != undefined
      ? house.result.editedFacts.finishedSqFt != undefined
        ? house.result.editedFacts.finishedSqFt._text
        : "?"
      : "?";
  const year =
    house.result.editedFacts != undefined
      ? house.result.editedFacts.yearBuilt != undefined
        ? house.result.editedFacts.yearBuilt._text
        : "?"
      : "?";
  const parking =
    house.result.editedFacts != undefined
      ? house.result.editedFacts.parkingType != undefined
        ? house.result.editedFacts.parkingType._text
        : "?"
      : "?";
  const type =
    house.result.editedFacts != undefined
      ? house.result.editedFacts.useCode != undefined
        ? house.result.editedFacts.useCode._text
            .replace(/([A-Z]|[0-9])/g, " $1")
            .trim()
        : "?"
      : "?";
  const description =
    house.result.homeDescription != undefined
      ? house.result.homeDescription._text
      : "Description not provided.";
  return (
    <div className="IndHome_Text">
      <div className="IndHome_Text_Title_Cont">
        <div>
          <h1 className="IndHome_Text_Title_Add">
            {house.result.address.street._text},{" "}
            {house.result.address.state._text}
          </h1>
          <p className="IndHome_Text_Title_City">
            {house.result.address.city._text}
          </p>
        </div>
        <h1 className="IndHome_Text_Title_Price">{price}</h1>
      </div>
      <hr className="IndHome_Line" />
      <div style={{ display: "flex" }}>
        <div className="IndHome_Text_Sub_Info">
          <div className="IndHome_Text_Sub_1stRow">
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Bedrooms</p>
              <p className="IndHome_Text_Sub_Flex">
                {beds} <IoIosBed className="IndHome_Text_Sub_Icon" />
              </p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Bathrooms</p>
              <p className="IndHome_Text_Sub_Flex">
                {bath} <FaBath className="IndHome_Text_Sub_Icon" />
              </p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Area</p>
              <p className="IndHome_Text_Sub_Flex">
                {sqft} ft
                <FaVectorSquare className="IndHome_Text_Sub_Icon" />
              </p>
            </div>
          </div>
          <div className="IndHome_Text_Sub_1stRow">
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Built</p>
              <p className="IndHome_Text_Sub_Flex">{year} </p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Parking</p>
              <p className="IndHome_Text_Sub_Flex">{parking}</p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Type</p>
              <p className="IndHome_Text_Sub_Flex">{type}</p>
            </div>
          </div>
          <div className="IndHome_Text_Sub_Description">
            <h1 className="IndHome_Text_Sub_Description_Title">Description</h1>
            <p className="IndHome_Text_Sub_Description_Text">{description}</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default IndHomeText;
