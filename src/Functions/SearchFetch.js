import React, { useState, useEffect } from "react";
import DefaultHome from "../Default/DefaultHome";
import axios from 'axios'
const Context = React.createContext();

const SearchFetch = ({ children }) => {
  const [final, setFinal] = useState([]);
  const [house, setHouse] = useState(DefaultHome);
  const [addy, setAddy] = useState({
    add: "140 Sunset ave",
    cit: "North Arlington",
    sta: "nj",
    first: true
  });
  const [back, setBack] = useState(false);

  const GetData = async() => {
    try {
      let Data = await axios.get(`https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/HData?addr=${addy.add}&city=${addy.cit}&sta=${addy.sta}`)
      setFinal(Data.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetData();
  }, [addy]);
  useEffect(() => {
    GetData();
  }, []);
  const onClicked = zp => {
    const res = final.find(item => zp == item.zpid);
    setHouse(res);
    setBack(true);
  };

  const onSearch = (add, cit, sta) => {
    setAddy({ add: add, cit: cit, sta: sta, first: true });
    setFinal([]);
  };

  return (
    <Context.Provider
      value={{
        // fetchData,
        final,
        onClicked,
        house,
        setHouse,
        onSearch,
        setFinal,
        addy,
        back,
        setBack
      }}
    >
      {" "}
      {children}{" "}
    </Context.Provider>
  );
};

export { Context, SearchFetch };
