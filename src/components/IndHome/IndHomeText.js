import React, { useContext } from "react";
import { IoIosBed } from "react-icons/io";
import { FaBath, FaVectorSquare } from "react-icons/fa";
import { Context } from "../../Functions/SearchFetch";
const IndHomeText = () => {
  const { house } = useContext(Context);
  console.log(house, "housey");
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
        <h1 className="IndHome_Text_Title_Price">
          {house.zestimate != undefined
            ? "$" +
              house.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : "$" +
              house.rentzestimate
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " /Month"}
        </h1>
      </div>
      <hr className="IndHome_Line" />
      <div style={{ display: "flex" }}>
        <div className="IndHome_Text_Sub_Info">
          <div className="IndHome_Text_Sub_1stRow">
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Bedrooms</p>
              <p className="IndHome_Text_Sub_Flex">
                {house.result.editedFacts != undefined
                  ? house.result.editedFacts.bedrooms != undefined
                    ? house.result.editedFacts.bedrooms._text
                    : "?"
                  : "?"}{" "}
                <IoIosBed className="IndHome_Text_Sub_Icon" />
              </p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Bathrooms</p>
              <p className="IndHome_Text_Sub_Flex">
                {house.result.editedFacts != undefined
                  ? house.result.editedFacts.bathrooms != undefined
                    ? house.result.editedFacts.bathrooms._text
                    : "?"
                  : "?"}{" "}
                <FaBath className="IndHome_Text_Sub_Icon" />
              </p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Area</p>
              <p className="IndHome_Text_Sub_Flex">
                {house.result.editedFacts != undefined
                  ? house.result.editedFacts.finishedSqFt != undefined
                    ? house.result.editedFacts.finishedSqFt._text
                    : "?"
                  : "?"}{" "}
                ft
                <FaVectorSquare className="IndHome_Text_Sub_Icon" />
              </p>
            </div>
          </div>
          <div className="IndHome_Text_Sub_1stRow">
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Built</p>
              <p className="IndHome_Text_Sub_Flex">
                {house.result.editedFacts != undefined
                  ? house.result.editedFacts.yearBuilt != undefined
                    ? house.result.editedFacts.yearBuilt._text
                    : "?"
                  : "?"}{" "}
              </p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Parking</p>
              <p className="IndHome_Text_Sub_Flex">
                {house.result.editedFacts != undefined
                  ? house.result.editedFacts.parkingType != undefined
                    ? house.result.editedFacts.parkingType._text
                    : "?"
                  : "?"}
              </p>
            </div>
            <div className="IndHome_Text_Sub_Bed">
              <p style={{ color: "#837a75" }}>Area Safety</p>
              <p className="IndHome_Text_Sub_Flex">safe</p>
            </div>
          </div>
          <div className="IndHome_Text_Sub_Description">
            <h1 className="IndHome_Text_Sub_Description_Title">Description</h1>
            <p className="IndHome_Text_Sub_Description_Text">
              {house.result.homeDescription != undefined
                ? house.result.homeDescription._text
                : "Description not provided."}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default IndHomeText;
