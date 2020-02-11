import React, { useState, useEffect, useContext } from "react";
import HomeBox from "./HomeBox";
import { Context } from "../../Functions/SearchFetch";
import ReactLoading from "react-loading";

const HomeBoxMapped = () => {
  const { final } = useContext(Context);
  const loader = (<div className="Loader_Cont">
  <ReactLoading
    type={"spinningBubbles"}
    color={"#fc6e64"}
    height={"100%"}
    width={"20%"}
    className="Loader_Icon"
  />
  <h1 className="Loader_Text">Searching</h1>
</div>)
  const [load, setLoad] = useState(loader);

  useEffect(() => {
    setLoad(loader)
    if(final === false || final == []){
      setLoad(
        <div className="Loader_Cont">
          <h1 className="Loader_Text">
            We could not find that search. Please try again
          </h1>
        </div>
      )
}
  }, [final]);

  if (final != false) {
    return (
      <div className="Home_Box_Grid">
        {
          (Element = final.map((item, indexId) => (
            <HomeBox
              zpid={item.zpid != undefined ? item.zpid : null}
              zestimate={item.zestimate}
              address={item.street}
              bed={item.bedrooms}
              sqft={item.finishedSqFt}
              rentzestimate={item.rentzestimate}
              bathrooms={item.bedrooms}
              type={item.useCode}
              image={item.images[0]}
              key={indexId}
            />
          )))
        }
      </div>
    );
  }  
  else {
    return load
  }

};

export default HomeBoxMapped;

