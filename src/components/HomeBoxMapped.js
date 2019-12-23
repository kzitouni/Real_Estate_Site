import React, { useState, useEffect, useContext } from "react";
import HomeBox from "./HomeBox";
import { Context } from "../Functions/SearchFetch";
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
  let Element;
  useEffect(() => {
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
    );
    setTimeout(() => {
      setLoad(
        <div className="Loader_Cont">
          <h1 className="Loader_Text">
            We could not find that search. Please try again
          </h1>
        </div>
      );
    }, [10000]);
  }, [final]);

  if (final != ([] || undefined) && final.length > 3 && isLoading == "true") {
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
  } else if (isLoading == "true" && result == []) {
    console.log(isLoading, "the 2nd if");
    console.log(result, "if 2nd res");
    return fetchData();
  } else {
    return load;
  }

  // console.log(isLoading,"loadin")

  //     console.log(result,"resy")
  //     return (
  //         <div className="Home_Box_Grid">
  //             {Element}
  //         </div>
  //     )
};

export default HomeBoxMapped;

