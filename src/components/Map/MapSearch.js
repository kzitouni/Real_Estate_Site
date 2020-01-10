import React, { useContext, useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { MapStyles } from "./mapStyles";
import { Context } from "../../Functions/SearchFetch";
import { AiOutlineHome, AiOutlineDoubleLeft } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
function Map() {
  const {final} = useContext(Context)
  const [selectedHouse, setSelectedHouse] = useState(null);
  // const [HouseNum, setHouseNum] = useState(0);
  let price;
  if(selectedHouse != null) {
   price = selectedHouse.zestimate != ""
  ? selectedHouse.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  : 
    selectedHouse.rentzestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " /Month";
  } 
  return (
      <GoogleMap 
          defaultZoom={14}
          defaultCenter={{lat: 40.834536, lng: -74.102201}}
          defaultOptions={{styles:MapStyles}}
          center ={{ lat: final.length > 1 ? final[1].latitude : 0, lng: final.length > 1 ? final[1].longitude : 0 }}
      >
      { final != false ? final.map((home, index) => (
      <Marker
        key={home.zpid}
        position={{
          lat: home.latitude,
          lng: home.longitude
        }}
        
        onMouseOver={() => {
          setSelectedHouse(home);
          // setHouseNum(index)
        }}
        icon={{
          url: "/MapMarker.svg",
          scaledSize: new window.google.maps.Size(30, 30)
        }}
      />
       )) : null}
       {selectedHouse && (
      <InfoWindow
        onCloseClick={() => {
          setSelectedHouse(null);
        }}
        position={{
          lat: selectedHouse.latitude,
          lng: selectedHouse.longitude
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
      </InfoWindow>)}
      </GoogleMap>
  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map))
export default function GMap () {
const {back} = useContext(Context)
const APIKey = "AIzaSyCqvWsKxtH09vAJ4N6WmCQ6GGLYF0ZT3JY"
 
return (
      <div className="Map_Cont">
        <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APIKey}`}
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
}
// const Map = () => {
//   const { final } = useContext(Context);

//   const [selectedHouse, setSelectedHouse] = useState(null);
//   let price;
// if(selectedHouse != null){
//   if(selectedHouse.zestimate != "?" && selectedHouse.rentzestimate == "?"){
//     price = selectedHouse.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//   }
//   else if (selectedHouse.zestimate == "?" && selectedHouse.rentzestimate != "?") {
//     price = selectedHouse.rentzestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//   }
//   else if (selectedHouse.zestimate == "?" && selectedHouse.rentzestimate == "?"){
//     price = "N/A"
//   }
//   else if (selectedHouse.zestimate != "?" && selectedHouse.rentzestimate != "?"){
//     price = selectedHouse.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//   }
// }
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultOptions={{ styles: mapStyles }}
//       defaultCenter={{lat: 40.65,lng: -74.1}}
//       center={{
//         lat: final[0].latitude,
//         lng: final[0].longitude
//       }}
//     >
//       {final != false ? final.map((item, index) => (
//         <Marker
//           key={index}
//           position={{
//             lat: item.latitude,
//             lng: item.longitude
//           }}
//           onClick={() => setSelectedHouse(item)}
//           icon={{
//             url: "/MapMarker.svg",
//             scaledSize: new window.google.maps.Size(40, 40)
//           }}
//         />
//       )) : null}

//       {selectedHouse && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedHouse(null);
//           }}
//           position={{
//             lat: selectedHouse.latitude,
//             lng: selectedHouse.longitude
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <div
//               className="Map_Label_Cont"
//               style={{
//                 backgroundImage: `url(${selectedHouse.images[0]})`
//               }}
//             ></div>
//             <div style={{ marginLeft: ".5rem" }}>
//               <h2 className="Map_Label_Street">
//                 {selectedHouse.street}
//               </h2>
//               <p className="Map_Label_Price">
//                 ${price}
//               </p>
//               <div style={{ display: "flex", marginTop: ".2rem" }}>
//                 <p className="Map_Label_Bed">
//                   <IoIosBed className="Map_Label_Bed_Icon" />
//                   {selectedHouse.bedrooms}
//                 </p>
//                 <p className="Map_Label_Bath">
//                   <FaBath className="Map_Label_Bath_Icon" />
//                   {selectedHouse.bathrooms}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// };
// const MapWrapped = withScriptjs(withGoogleMap(Map));

// const MapSearch = () => {
//   const { back } = useContext(Context);
//   return (
//     <div className="Map_Cont">
//       <MapWrapped
//         googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCqvWsKxtH09vAJ4N6WmCQ6GGLYF0ZT3JY"}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//       {back == true ? (
//         <Link className="Back_Button" to="/">
//           <AiOutlineDoubleLeft className="Back_Arrow" />
//         </Link>
//       ) : null}
//     </div>
//   );
// };

// export default MapSearch;
