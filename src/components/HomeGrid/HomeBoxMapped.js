import React, { useState, useEffect, useContext } from "react";
import HomeBox from "./HomeBox";
import { Context } from "../../Functions/SearchFetch";
import ReactLoading from "react-loading";

const HomeBoxMapped = () => {
  const { result, isLoading, fetchData, total, final } = useContext(Context);
  const [load, setLoad] = useState(
    <div className="Loader_Cont">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#fc6e64"}
        height={"100%"}
        width={"20%"}
        className="Loader_Icon"
      />
      <h1 className="Loader_Text">Searching</h1>
    </div>
  );
  useEffect(() => {
    if(final === false){
      setLoad(
        <div className="Loader_Cont">
          <h1 className="Loader_Text">
            We could not find that search. Please try again
          </h1>
        </div>
      )
}
else if (final == []){ 
    setLoad(
    <div className="Loader_Cont"> 
      <ReactLoading
        type={"spinningBubbles"}
        color={"#fc6e64"}
        height={"100%"}
        width={"20%"}
        className="Loader_Icon"
      />
      <h1 className="Loader_Text">Searching</h1>
    </div>
  )
}
  }, [final]);

  if (final != false) {
    return (
      <div className="Home_Box_Grid">
        {
          (Element = final.map(item => (
            <HomeBox
              zpid={item.zpid != undefined ? item.zpid : null}
              zestimate={
                item.zestimate != undefined
                  ? item.zestimate
                  : item.rentzestimate
              }
              address={
                item.result.address.street != undefined
                  ? item.result.address.street._text
                  : ""
              }
              bed={
                item.result.editedFacts != undefined
                  ? item.result.editedFacts.bedrooms != undefined
                    ? item.result.editedFacts.bedrooms._text
                    : "?"
                  : "?"
              }
              sqft={
                item.result.editedFacts != undefined
                  ? item.result.editedFacts.finishedSqFt != undefined
                    ? item.result.editedFacts.finishedSqFt._text
                    : "?"
                  : "?"
              }
              rentzestimate={item.zestimate != undefined ? "" : "/Month"}
              bathrooms={
                item.result.editedFacts != undefined
                  ? item.result.editedFacts.bathrooms != undefined
                    ? item.result.editedFacts.bathrooms._text
                    : "?"
                  : "?"
              }
              type={
                item.result.editedFacts != undefined
                  ? item.result.editedFacts.useCode != undefined
                    ? item.result.editedFacts.useCode._text
                    : "?"
                  : "?"
              }
              image={
                item.result.images != undefined
                  ? item.result.images.count._text == 1
                    ? item.result.images.image.url._text
                    : item.result.images.image.url[0]._text
                  : item.image
              }
            />
          )))
        }
      </div>
    );
  }  
// 
  else {
    return load
  }

};

export default HomeBoxMapped;

