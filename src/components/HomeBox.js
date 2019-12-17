import React, {useContext} from 'react'
import {FaMapMarkerAlt, FaBath, FaVectorSquare} from "react-icons/fa";
import {IoIosBed} from "react-icons/io";
import {HouseSearchResult} from '../Functions/HouseSearchResult'
import {Context} from '../Functions/SearchFetch';
import {Link} from 'react-router-dom'
var convert = require('xml-js');

const HomeBox = () => {
    const {fetchData, result} = useContext(Context)
    console.log(result, "ayy")
    const onClick = () => {
        fetchData()
    }
    // var xml = result
    // var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
    // console.log(result1);
    console.log(HouseSearchResult({addr:"884 devon st", city:"Kearny", sta:"NJ"}))
    return (
        <div className="Home_Box_Grid">
            <div className="Home_Box_Cont">
                <button onClick={() => onClick()}>

                </button>
                <Link to="/Home"> 
                <div className="Home_Box_Image_Cont">
                    <div className="Home_Box_Image">
                    </div>
                </div>
                </Link> 
                <div className="Home_Sub_Cont">
            <h1 className="Home_Title">Apartment For Sale</h1>
            <p className="Home_Sub_Address"><FaMapMarkerAlt/> 234 Devon Street</p>
            <div className="Home_Sub_IconInfo">

                <p className="Home_Sub_Bath_Text">
                    <FaBath style={{marginRight:'.2rem'}} />  5 Bath
                </p>
                <p className="Home_Sub_Bed_Text">
                    <IoIosBed style={{marginRight:'.2rem'}} />  3 Bed
                </p>
                <p className="Home_Sub_Bed_Text">
                    <FaVectorSquare style={{marginRight:'.2rem'}} />  100 sq ft
                </p>
            </div>
            <div className="Home_Sub_Price_Cont">
                <p className="Home_Sub_Price_Text">Rent Price</p> 
                <p className="Home_Sub_Price_Price">$5,100</p>
            </div>
                </div>
            </div>
            <div className="Home_Box_Cont">
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
            </div>
        </div>
    )
} 

export default HomeBox