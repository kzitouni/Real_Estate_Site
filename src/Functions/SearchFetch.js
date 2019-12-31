import React, { useState, useEffect } from "react";
import { FetchError } from "node-fetch";
import DefaultHome from "../DefaultHome";

var convert = require("xml-js");
const Context = React.createContext();

const SearchFetch = ({ children }) => {
  const [result, setResult] = useState([]);
  const [final, setFinal] = useState([]);
  const [house, setHouse] = useState(DefaultHome);
  const [total, setTotal] = useState();
  const [isLoading, setIsLoading] = useState("false");
  const [addy, setAddy] = useState({
    add: "140 Sunset ave",
    cit: "North Arlington",
    sta: "nj",
    first: true
  });
  const [back, setBack] = useState(false);
  let Url = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=${addy.add}&citystatezip=${addy.cit}%2C+${addy.sta}&rentzestimate=true`;
  let AreaUrl = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=St&citystatezip=${addy.cit}%2C+${addy.sta}&rentzestimate=true`;
  const fetchData = async () => {
    setResult([]);
    setFinal([]);
    const res = await fetch(Url);
    res.text().then(data => {
      if(
        JSON.parse(
          convert.xml2json(data, {
            compact: true,
            spaces: 4
          })
        )["SearchResults:searchresults"].message.code._text != "0"
      && addy.first == false) {return null}
      else if (
        JSON.parse(
          convert.xml2json(data, {
            compact: true,
            spaces: 4
          })
        )["SearchResults:searchresults"].message.code._text != "0" && addy.first == true
      ) {
        setAddy({add: "st", cit: addy.cit, sta: addy.sta, first: false}) && fetchData();
      } else {
        if (
          JSON.parse(
            convert.xml2json(data, {
              compact: true,
              spaces: 4
            })
          )["SearchResults:searchresults"].response.results.result.length ==
          undefined
        ) {
          result.push({
            zpid: JSON.parse(
              convert.xml2json(data, {
                compact: true,
                spaces: 4
              })
            )["SearchResults:searchresults"].response.results.result.zpid._text,
            rentzestimate:
              JSON.parse(
                convert.xml2json(data, {
                  compact: true,
                  spaces: 4
                })
              )["SearchResults:searchresults"].response.results.result
                .rentzestimate.amount != undefined
                ? JSON.parse(
                    convert.xml2json(data, {
                      compact: true,
                      spaces: 4
                    })
                  )["SearchResults:searchresults"].response.results.result
                    .rentzestimate.amount._text
                : null,
            zestimate:
              JSON.parse(
                convert.xml2json(data, {
                  compact: true,
                  spaces: 4
                })
              )["SearchResults:searchresults"].response.results.result.zestimate
                .amount._text != undefined
                ? JSON.parse(
                    convert.xml2json(data, {
                      compact: true,
                      spaces: 4
                    })
                  )["SearchResults:searchresults"].response.results.result
                    .zestimate.amount._text
                : null
          }) && fetchArea();
        } else {
          result.push({
            zpid: JSON.parse(
              convert.xml2json(data, {
                compact: true,
                spaces: 4
              })
            )["SearchResults:searchresults"].response.results.result[0].zpid
              ._text,
            rentzestimate:
              JSON.parse(
                convert.xml2json(data, {
                  compact: true,
                  spaces: 4
                })
              )["SearchResults:searchresults"].response.results.result[0]
                .rentzestimate != undefined
                ? JSON.parse(
                    convert.xml2json(data, {
                      compact: true,
                      spaces: 4
                    })
                  )["SearchResults:searchresults"].response.results.result[0]
                    .rentzestimate.amount._text
                : null,
            zestimate:
              JSON.parse(
                convert.xml2json(data, {
                  compact: true,
                  spaces: 4
                })
              )["SearchResults:searchresults"].response.results.result[0]
                .zestimate != undefined
                ? JSON.parse(
                    convert.xml2json(data, {
                      compact: true,
                      spaces: 4
                    })
                  )["SearchResults:searchresults"].response.results.result[0]
                    .zestimate.amount._text
                : null
          }) && fetchArea();
        }
      }
    });
  };

  async function fetchArea() {
    const res = await fetch(AreaUrl);
    res
      .text()
      .then(data => {
        JSON.parse(
          convert.xml2json(data, {
            compact: true,
            spaces: 4
          })
        )["SearchResults:searchresults"].response.results.result.map(
          (item, index) => {
            result.push({
              zpid: item.zpid._text,
              rentzestimate:
                item.rentzestimate != undefined
                  ? item.rentzestimate.amount._text
                  : null,
              zestimate:
                item.zestimate.amount._text != undefined
                  ? item.zestimate.amount._text
                  : null
            });
          }
        );
      })
      .then(dat => fetchFinal());
  }

  function fetchFinal() {
    console.log(result, "zpid ");
    setFinal([]);
    console.log(final, "final final");
    Promise.all(
      result.map(async (item, index) => {
        setFinal([]);
        let UpdateUrl = `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&zpid=${item.zpid}`;
        const res = await fetch(UpdateUrl);
        res
          .text()
          .then(data =>
            JSON.parse(
              convert.xml2json(data, {
                compact: true,
                spaces: 4
              })
            )["UpdatedPropertyDetails:updatedPropertyDetails"].response !=
            undefined
              ? final.push({
                  result: JSON.parse(
                    convert.xml2json(data, {
                      compact: true,
                      spaces: 4
                    })
                  )["UpdatedPropertyDetails:updatedPropertyDetails"].response,
                  zpid: item.zpid,
                  zestimate: item.zestimate,
                  rentzestimate: item.rentzestimate,
                  image:
                    JSON.parse(
                      convert.xml2json(data, {
                        compact: true,
                        spaces: 4
                      })
                    )["UpdatedPropertyDetails:updatedPropertyDetails"].response
                      .images == undefined
                      ? `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${
                          JSON.parse(
                            convert.xml2json(data, { compact: true, spaces: 4 })
                          )["UpdatedPropertyDetails:updatedPropertyDetails"]
                            .response.address.latitude._text
                        },${
                          JSON.parse(
                            convert.xml2json(data, { compact: true, spaces: 4 })
                          )["UpdatedPropertyDetails:updatedPropertyDetails"]
                            .response.address.longitude._text
                        }&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`
                      : null
                })
              : null
          )
          .then(dat => setFinal(final));
      })
    ).then(dat => setIsLoading("true"));
  }

  useEffect(() => {
    fetchData();
  }, [addy]);

  const onClicked = zp => {
    const res = final.find(item => zp == item.zpid);
    setHouse(res);
    setBack(true);
  };

  const onSearch = (add, cit, sta) => {
    setAddy({ add: add, cit: cit, sta: sta, first: true });
    setIsLoading("false");
    setFinal([]);
    setResult([]);
    console.log(result, "after res");
  };

  return (
    <Context.Provider
      value={{
        fetchData,
        result,
        isLoading,
        total,
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
