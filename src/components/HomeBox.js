import React, {useContext} from 'react'
import {FaMapMarkerAlt, FaBath, FaVectorSquare} from "react-icons/fa";
import {IoIosBed} from "react-icons/io";
import {Context} from '../Functions/SearchFetch';
import {Link} from 'react-router-dom'
var convert = require('xml-js');

const HomeBox = (item) => {
    const {fetchData, result} = useContext(Context)
    let price = item.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    // const onClick = () => {
    //     fetchData()
    // }
    // var xml = result
    // var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
    // console.log(result1);
    // console.log(HouseSearchResult({addr:"884 devon st", city:"Kearny", sta:"NJ"}))
    return (
  
            <div className="Home_Box_Cont">
                {/* <button onClick={() => onClick()}>

                </button> */}
                <Link to="/Home"> 
                <div className="Home_Box_Image_Cont">
                    <div className="Home_Box_Image">
                    </div>
                </div>
                </Link> 
                <div className="Home_Sub_Cont">
    <h1 className="Home_Title">Apartment For Sale</h1>
            <p className="Home_Sub_Address"><FaMapMarkerAlt/>{item.address}</p>
            <div className="Home_Sub_IconInfo">

                <p className="Home_Sub_Bath_Text">
                    <FaBath style={{marginRight:'.2rem'}} />  {item.bath} Bath
                </p>
                <p className="Home_Sub_Bed_Text">
                    <IoIosBed style={{marginRight:'.2rem'}} />  {item.bed == 0 ? "?" : item.bed} Bed
                </p>
                <p className="Home_Sub_Bed_Text">
                    <FaVectorSquare style={{marginRight:'.2rem'}} />  {item.sqft} sq ft
                </p>
            </div>
            <div className="Home_Sub_Price_Cont">
                <p className="Home_Sub_Price_Text">Zestimate</p> 
    <p className="Home_Sub_Price_Price">${price}
    </p>
            </div>
                </div>
            </div>
            
    )
} 

export default HomeBox

{/* <div className="Home_Box_Cont">
            <div className="Home_Box_Image_Cont">
                    <div className="Home_Box_Image">
                    </div>
                </div>
                <div className="Home_Sub_Cont">
            <h1 className="Home_Title">Apartment For Sale</h1>
            <p className="Home_Sub_Address"><FaMapMarkerAlt/> 234 Devon Street</p>
            <div className="Home_Sub_IconInfo">

                <p className="Home_Sub_Bath_Text">
                    <FaBath style={{marginRight:'.2rem'}}/> 5 Bath
                </p>
                <p className="Home_Sub_Bed_Text">
                    <IoIosBed style={{marginRight:'.2rem'}}/> 3 Bed
                </p>
                <p className="Home_Sub_Bed_Text">
                    <FaVectorSquare style={{marginRight:'.2rem'}}/> 100 sq ft
                </p>
            </div>
            <div className="Home_Sub_Price_Cont">
                <p className="Home_Sub_Price_Text">Rent Price</p> 
                <p className="Home_Sub_Price_Price">$5,100</p>
            </div>
                </div>
            </div><div className="Home_Box_Cont">
            <div className="Home_Box_Image_Cont">
                    <div className="Home_Box_Image">
                    </div>
                </div>
                <div className="Home_Sub_Cont">
            <h1 className="Home_Title">Apartment For Sale</h1>
            <p className="Home_Sub_Address"><FaMapMarkerAlt/> 234 Devon Street</p>
            <div className="Home_Sub_IconInfo">

                <p className="Home_Sub_Bath_Text">
                    <FaBath style={{marginRight:'.2rem'}}/> 5 Bath
                </p>
                <p className="Home_Sub_Bed_Text">
                    <IoIosBed style={{marginRight:'.2rem'}}/> 3 Bed
                </p>
                <p className="Home_Sub_Bed_Text">
                    <FaVectorSquare style={{marginRight:'.2rem'}}/> 100 sq ft
                </p>
            </div>
            <div className="Home_Sub_Price_Cont">
                <p className="Home_Sub_Price_Text">Rent Price</p> 
                <p className="Home_Sub_Price_Price">$5,100</p>
            </div>
                </div>
            </div><div className="Home_Box_Cont">
            <div className="Home_Box_Image_Cont">
                    <div className="Home_Box_Image">
                    </div>
                </div>
                <div className="Home_Sub_Cont">
            <h1 className="Home_Title">Apartment For Sale</h1>
            <p className="Home_Sub_Address"><FaMapMarkerAlt/> 234 Devon Street</p>
            <div className="Home_Sub_IconInfo">

                <p className="Home_Sub_Bath_Text">
                    <FaBath style={{marginRight:'.2rem'}}/> 5 Bath
                </p>
                <p className="Home_Sub_Bed_Text">
                    <IoIosBed style={{marginRight:'.2rem'}}/> 3 Bed
                </p>
                <p className="Home_Sub_Bed_Text">
                    <FaVectorSquare style={{marginRight:'.2rem'}}/> 100 sq ft
                </p>
            </div>
            <div className="Home_Sub_Price_Cont">
                <p className="Home_Sub_Price_Text">Rent Price</p> 
                <p className="Home_Sub_Price_Price">$5,100</p>
            </div>
                </div>
            </div> */}