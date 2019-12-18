// import fetch from 'node-fetch';
// import React, {useState} from 'react'
// var convert = require('xml-js');

// //import DomParser from 'dom-parser';
 
// let FirstH = {zpidList: 0};
// let counter = 0;
// let input = {}
// export const HouseSearchResult = async (UserInfo) => {
//     const [homedata, setHomedata] = useState()
//   try {
//   input = {addr: UserInfo.addr, city: UserInfo.city, sta: UserInfo.sta}
//   return Promise.resolve(Search(input.addr, input.city, input.sta, "first"))
//     .then(ndata => {
//       console.log(ndata)
//       if(ndata) {
//         return Search("st", input.city, input.sta, "second");
//       } else {
//         return Search("st", input.city, input.sta, "secondSave");
//       }
//     })
//     .then(zpidData => {
//       if (zpidData) {
//         return Promise.all(zpidData.map((item, index) => HouseInfo(item, index)));
//       } else {
//         console.log("done with ya")
//         return false; 
//       }
//     })
//     .then(data => {
//       if(data) {
//         let HomeData = [];
//         data.map(home => {
//           if (typeof home != "undefined") {
//             if (home.state != "?") {
//               home.id = counter++;
//               home.latitude = parseFloat(home.latitude);
//               home.longitude = parseFloat(home.longitude);
//               if (home.bathrooms != "?") {
//                 home.bathrooms = parseFloat(home.bathrooms, 10);
//               }
//               HomeData.push(home);
//             }
//           }
//         });
//         return HomeData;
//       } else {
//         return false;
//       }
//     });
//   } catch(error) { 
//     console.log("error",error)
//     if(error == "SHOWDEFUALT") {
//       console.log("Thanks We are Done")
//     }
//   }
// };


// const Search = (addr, city, state, first) => {
//   let AddrUrl = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=${addr}&citystatezip=${city}%2C+${state}&rentzestimate=true`;
//   return fetch(AddrUrl)
//     .then(response => response.text())
//     .then(data => {
//       let xml = new DOMParser().parseFromString(data, "application/xml");
//       let rent = "?";
//       let amount = "";
//       let ZpidList = [];
//       console.log(xml)
      


//       console.log(ZpidList);
//       return ZpidList;
//     })
//     .catch(function(err) {
//       console.log("error", err);
//       if (err == "NOFIRSTHOUSE") {
//           return false;
//           }
//       if (err == "NODATA") {
//         console.log("All Done");
//         return "NoData"
//       }
//     });
// };
 

// const HouseInfo = (zpid, index) => {
//   //console.log(zpid);
//   let InfoUrl = `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1hgyxiq6fbf_6ed93&zpid=${zpid.zpidList}`;
//   return Promise.resolve(
//     fetch(InfoUrl)
//       .then(response => response.text())
//       .then(dataa => {
//         let FullData = JSON.parse(convert.xml2json(dataa, {compact: true, spaces: 4}))
//         console.log('JOOJJJOJ', FullData)

//         let HouseData = {
//           city: "?",
//           state: "?",
//           street: "?",
//           useCode: "",
//           bedrooms: "?",
//           bathrooms: "?",
//           finishedSqFt: "",
//           yearBuilt: "Unknown",
//           parkingType: "",
//           zpid: zpid.zpidList,
//           rent: zpid.rent,
//           amount: zpid.amount,
//           index: index,
//           images: [],
//           desc: null
//         };
//         if(HouseData.amount) {
//           HouseData.amount = parseInt(HouseData.amount, 10).toLocaleString()
//         }
//         if(HouseData.rent) {
//           HouseData.rent = parseInt(HouseData.rent, 10).toLocaleString()
//         }
        
//             if (HouseData.images.length < 2) {
//               if (HouseData.images.length == 0) {
//                 AllImages.push(`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${HouseData.latitude},${HouseData.longitude}
//               &fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`);
//                 AllImages.push(
//                   `https://maps.googleapis.com/maps/api/staticmap?center=${HouseData.latitude},${HouseData.longitude}&zoom=15&size=400x400&maptype=roadmap&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`
//                 );
//               } else {
//                 AllImages.push(`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${HouseData.latitude},${HouseData.longitude}
//               &fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`);
//                 //put satalite view from google
//               }
//               HouseData = {
//                 ...HouseData,
//                 images: AllImages
//               };
//         }
//         return HouseData;
//       })
//   );
// };
 
//   //HouseInfo('2082540322',2);
  
  
//   //Search for the address to get zpid then push that to a list 
//   //change address to "st" and search again grab all zpids
//   //make indivdual zpid searches on each house
