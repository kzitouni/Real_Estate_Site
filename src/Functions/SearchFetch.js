import React, { useState, useEffect } from "react";
import DefaultHome from "../Default/DefaultHome";
import axios from 'axios'
import {DefaultHomes} from '../Default/DefaultHomes'
const Context = React.createContext();

const SearchFetch = ({ children }) => {
  const [final, setFinal] = useState(DefaultHomes);
  const [house, setHouse] = useState(DefaultHome);
  const [addy, setAddy] = useState({
    add: "340 Sunset ave",
    cit: "Kearny",
    sta: "nj",
    first: true 
  });
  const [back, setBack] = useState(false);

  const GetData = async(add, cit, sta) => {
    try {
      let Data = await axios.get(`https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/HData?addr=${add}&city=${cit}&sta=${sta}`)
      setFinal(Data.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const onClicked = zp => {
    const res = final.find(item => zp == item.zpid);
    setHouse(res);
    setBack(true);
  };

  const onSearch = (add, cit, sta) => {
    setAddy({ add: add, cit: cit, sta: sta, first: true })
    setFinal([]);
    GetData(add, cit, sta)
  };

  return (
    <Context.Provider
      value={{
        final,
        onClicked,
        house,
        setHouse,
        onSearch,
        setFinal,
        addy,
        back,
        setBack,
        GetData
      }}
    >
      {" "}
      {children}{" "}
    </Context.Provider>
  );
};

export { Context, SearchFetch };
