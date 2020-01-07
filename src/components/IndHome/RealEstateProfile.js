import React, { useContext, useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { Context } from "../../Functions/SearchFetch";
import Profiles from "../../Default/Profiles";

const RealEstateProfile = () => {
  const { house } = useContext(Context);
  let randomNumber = Number(house.zpid.charAt(house.zpid.length - 2));
  let person;

  switch (randomNumber) {
    case 0 || 1:
      person = Profiles[0];
      break;
    case 2:
      person = Profiles[1];
      break;
    case 3:
      person = Profiles[2];
      break;
    case 4 || 5:
      person = Profiles[3];
      break;
    case 6:
      person = Profiles[4];
      break;
    case 7:
      person = Profiles[5];
      break;
    case 8 || 9:
      person = Profiles[6];
      break;
    default:
      person = Profiles[3];
  }

  return (
    <div className="profile_cont">
      <div
        className="Profile_Pic"
        style={{ backgroundImage: `url(${person.image})` }}
      ></div>
      <h1 className="Profile_Name">{person.name}</h1>
      <div className="Profile_Star">
        <IoMdStar className="Profile_Star_Icon" />{" "}
        <p className="Profile_Star_Text">{person.rating}/5</p>
      </div>
      <div className="Profile_Bottom_Cont">
        <div className="Profile_Button_Cont">
          <button
            className="Profile_Button"
            onClick={() =>
              prompt(
                `Enter your email and ${person.name} will reach out to you soon!`
              )
            }
          >
            <p className="Contact_Text">
              <MdMailOutline className="Mail_Icon" />
              Contact Agent
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateProfile;
