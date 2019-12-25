import React, { useContext, useState } from "react";
import States from "../States";
import { IoIosSearch } from "react-icons/io";
import { Context } from "../Functions/SearchFetch";
import { Link } from "react-router-dom";
const Searchbar = () => {
  const { onSearch } = useContext(Context);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [bordercity, setBordercity] = useState("none");
  const [borderaddress, setBorderaddress] = useState("none");

  const states = States.map(item => (
    <option value={item.abbreviation}>{item.abbreviation}</option>
  ));

  const handleChange = event => {
    setState(event.target.value);
  };

  const handleSubmit = event => {
    if (city == "" && address == "") {
      setBordercity("1px solid #fc6e64");
      setBorderaddress("1px solid #fc6e64");
    } else if (city == "") {
      setBordercity("1px solid #fc6e64");
      setBorderaddress("none");
    } else if (address == "") {
      setBorderaddress("1px solid #fc6e64");
      setBordercity("none");
    } else {
      onSearch(address, city, state);
      setBordercity("none");
      setBorderaddress("none");
    }
  };

  return (
    <div className="Searchbar_Cont">
      <div className="State_Input_Cont">
        <select className="State_Input" onChange={handleChange}>
          {states}
        </select>
        <input
          className="City_Input"
          style={{ border: bordercity }}
          onChange={e => setCity(e.target.value)}
          placeholder="City"
        ></input>
        <input
          className="City_Input"
          style={{ border: borderaddress }}
          onChange={e => setAddress(e.target.value)}
          placeholder="Address"
        ></input>
        <div className="Search_Cont">
          <Link to="/">
            <button
              className="Search_Button"
              onClick={() => {
                handleSubmit();
              }}
            >
              <p className="Search_Text">
                {" "}
                <IoIosSearch className="Search_Icon" />
                Search
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
