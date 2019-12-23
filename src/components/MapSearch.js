import React, { useContext, useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { mapStyles } from "./mapStyles";
import { Context } from "../Functions/SearchFetch";
import { AiOutlineHome, AiOutlineDoubleLeft } from "react-icons/ai";
import { FaMapMarkerAlt, FaBath, FaVectorSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
const Mapp = () => {
  const { final, house, setHouse, back } = useContext(Context);

  const [selectedHouse, setSelectedHouse] = useState(null);

  let iconMarker = new window.google.maps.MarkerImage(
    (<AiOutlineHome />),
    null,
    null,
    null,
    new window.google.maps.Size(32, 32)
  );
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat:
          final[0] != undefined
            ? Number(final[0].result.address.latitude._text)
            : 40.654936,
        lng:
          final[0] != undefined
            ? Number(final[0].result.address.longitude._text)
            : -74.120344
      }}
      defaultOptions={{ styles: mapStyles }}
    >
      {final.map(item => (
        <Marker
          key={item.zpid}
          position={{
            lat: Number(item.result.address.latitude._text),
            lng: Number(item.result.address.longitude._text)
          }}
          onClick={() => setSelectedHouse(item)}
          icon={{
            url: "/MapMarker.svg",
            scaledSize: new window.google.maps.Size(40, 40)
          }}
        />
      ))}

      {selectedHouse && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedHouse(null);
          }}
          position={{
            lat: Number(selectedHouse.result.address.latitude._text),
            lng: Number(selectedHouse.result.address.longitude._text)
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              className="Map_Label_Cont"
              style={{
                backgroundImage: `url(${
                  selectedHouse.result.images != undefined
                    ? selectedHouse.result.images.count._text == 1
                      ? selectedHouse.result.images.image.url._text
                      : selectedHouse.result.images.image.url[0]._text
                    : selectedHouse.image
                })`
              }}
            ></div>
            <div style={{ marginLeft: ".5rem" }}>
              <h2 className="Map_Label_Street">
                {selectedHouse.result.address.street._text}
              </h2>
              <p className="Map_Label_Price">
                $
                {selectedHouse.zestimate != undefined
                  ? selectedHouse.zestimate
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : selectedHouse.rentzestimate
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/M"}
              </p>
              <div style={{ display: "flex", marginTop: ".2rem" }}>
                <p className="Map_Label_Bed">
                  <IoIosBed className="Map_Label_Bed_Icon" />
                  {selectedHouse.result.editedFacts.bedrooms != undefined
                    ? selectedHouse.result.editedFacts.bedrooms._text
                    : "?"}{" "}
                </p>
                <p className="Map_Label_Bath">
                  <FaBath className="Map_Label_Bath_Icon" />
                  {selectedHouse.result.editedFacts.bathrooms != undefined
                    ? selectedHouse.result.editedFacts.bathrooms._text
                    : "?"}{" "}
                </p>
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const MapSearch = () => {
  const { back } = useContext(Context);

  const MapWrapped = withScriptjs(withGoogleMap(Mapp));
  return (
    <div className="Map_Cont">
      <MapWrapped
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCqvWsKxtH09vAJ4N6WmCQ6GGLYF0ZT3JY"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      {back == true ? (
        <Link className="Back_Button" to="/">
          <AiOutlineDoubleLeft className="Back_Arrow" />
        </Link>
      ) : null}
    </div>
  );
};

export default MapSearch;
