import React, { useContext, useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { mapStyles } from "./mapStyles";
import { Context } from "../../Functions/SearchFetch";
import { AiOutlineHome, AiOutlineDoubleLeft } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
const Mapp = () => {
  const { final } = useContext(Context);

  const [selectedHouse, setSelectedHouse] = useState(null);
  let price;
if(selectedHouse != null){
  if(selectedHouse.zestimate != "?" && selectedHouse.rentzestimate == "?"){
    price = selectedHouse.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  else if (selectedHouse.zestimate == "?" && selectedHouse.rentzestimate != "?") {
    price = selectedHouse.rentzestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  else if (selectedHouse.zestimate == "?" && selectedHouse.rentzestimate == "?"){
    price = "N/A"
  }
  else if (selectedHouse.zestimate != "?" && selectedHouse.rentzestimate != "?"){
    price = selectedHouse.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
}
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
          final != false
            ? Number(final[0].latitude)
            : 40.654936,
        lng:
          final != false
            ? Number(final[0].longitude)
            : -74.120344
      }}
      defaultOptions={{ styles: mapStyles }}
    >
      {final != false ? final.map(item => (
        <Marker
          key={item.zpid}
          position={{
            lat: Number(item.latitude),
            lng: Number(item.longitude)
          }}
          onClick={() => setSelectedHouse(item)}
          icon={{
            url: "/MapMarker.svg",
            scaledSize: new window.google.maps.Size(40, 40)
          }}
        />
      )) : null}

      {selectedHouse && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedHouse(null);
          }}
          position={{
            lat: Number(selectedHouse.latitude),
            lng: Number(selectedHouse.longitude)
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              className="Map_Label_Cont"
              style={{
                backgroundImage: `url(${selectedHouse.images[0]})`
              }}
            ></div>
            <div style={{ marginLeft: ".5rem" }}>
              <h2 className="Map_Label_Street">
                {selectedHouse.street}
              </h2>
              <p className="Map_Label_Price">
                ${price}
              </p>
              <div style={{ display: "flex", marginTop: ".2rem" }}>
                <p className="Map_Label_Bed">
                  <IoIosBed className="Map_Label_Bed_Icon" />
                  {selectedHouse.bedrooms}
                </p>
                <p className="Map_Label_Bath">
                  <FaBath className="Map_Label_Bath_Icon" />
                  {selectedHouse.bathrooms}
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
