import React from 'react'
import {IoIosHeartEmpty, IoIosBed} from 'react-icons/io'
import {FaMapMarkerAlt, FaBath, FaVectorSquare} from "react-icons/fa";
const IndHomeText = () => {

return(
    <div className="IndHome_Text">
        <div className="IndHome_Text_Title_Cont">
            <div>
        <h1 className="IndHome_Text_Title_Add">884 Devone St, NJ</h1>
        <p className="IndHome_Text_Title_City">Kearny</p>
            </div>
        <h1 className="IndHome_Text_Title_Price">$500,000</h1>
        <div>
        </div>
        <IoIosHeartEmpty style={{marginLeft: '3rem'}} />
        </div>
        <hr className="IndHome_Line" />
        <div className="IndHome_Text_Sub_Info">
            <div className="IndHome_Text_Sub_1stRow">
                <div className="IndHome_Text_Sub_Bed">
                    <p style={{color:"#837a75"}}>Bedrooms</p>
                    <p className="IndHome_Text_Sub_Flex">4 <IoIosBed className="IndHome_Text_Sub_Icon" /></p> 

                </div>
                <div className="IndHome_Text_Sub_Bed">
                    <p style={{color:"#837a75"}}>Bathrooms</p>
                    <p className="IndHome_Text_Sub_Flex">2 <FaBath className="IndHome_Text_Sub_Icon"/></p> 

                </div>
                <div className="IndHome_Text_Sub_Bed">
                    <p style={{color:"#837a75"}}>Area</p>
                    <p className="IndHome_Text_Sub_Flex">1,024 ft<FaVectorSquare className="IndHome_Text_Sub_Icon" /></p> 

                </div>
                
                 
            </div>
            <div className="IndHome_Text_Sub_1stRow">
                <div className="IndHome_Text_Sub_Bed">
                    <p style={{color:"#837a75"}}>Built</p>
                    <p className="IndHome_Text_Sub_Flex">2017 </p> 

                </div>
                <div className="IndHome_Text_Sub_Bed">
                    <p style={{color:"#837a75"}}>Parking</p>
                    <p className="IndHome_Text_Sub_Flex">1 Indoor</p> 

                </div>
                <div className="IndHome_Text_Sub_Bed">
                    <p style={{color:"#837a75"}}>Area Safety</p>
                    <p className="IndHome_Text_Sub_Flex">safe</p> 

                </div>
                
                 
            </div>
            <div className="IndHome_Text_Sub_Description">
                <h1 className="IndHome_Text_Sub_Description_Title">Description</h1>
                <p className="IndHome_Text_Sub_Description_Text">This house is so nice youll love it it has so many square feet and is so awesomesso buy this house rn asap </p>
            </div>
        </div>
        
    </div>
)

}

export default IndHomeText