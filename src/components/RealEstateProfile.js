import React, {useContext} from 'react'
import {IoMdStar} from 'react-icons/io'
import {MdMailOutline} from 'react-icons/md'
import { Context } from '../Functions/SearchFetch'
import Profiles from '../Profiles'
import swal from 'sweetalert'

const RealEstateProfile = () => {
    const {house} = useContext(Context)
const randomNumber = house.zpid.charAt(house.zpid.length - 1)
let person;

if(randomNumber == 1 || 0){
    person = Profiles[0]
}
else if(randomNumber == 2){
    person = Profiles[1]
}
else if(randomNumber == 3){
    person = Profiles[2]
}
else if(randomNumber == 4 || 5) {
    person = Profiles[3]
}
else if(randomNumber == 6){
    person = Profiles[4]
}
else if(randomNumber == 7){
    person = Profiles[5]
}
else if(randomNumber == 8){
    person = Profiles[6]
}
else if(randomNumber == 9){
    person = Profiles[7]
}
const popup = () => {
    // swal(`Send ${person.name} your message and he'll get back to you as soon as he can`, {
    //     content: "input",
    //     content: "input"
    //   })
    //   .then((value) => {
    //     swal(`You typed: ${value}`);
    //   });
      swal({
        title: `Enter your email`,
        content:"input",
        button: "Submit",
        closeOnClickOutside: false

      }).then(() => swal("Great!", `${person.name} will reach out soon`, "success"))
      ;
}
console.log(person.name, randomNumber, "homename")
    return (
        <div className="profile_cont">
            <div className="Profile_Pic" style={{backgroundImage:`url(${person.image})`}}></div>
    <h1 className="Profile_Name">{person.name}</h1>
            <div className="Profile_Star">
            <IoMdStar className="Profile_Star_Icon" /> <p className="Profile_Star_Text">{person.rating}/5</p>
            </div>
            {/* <p className="Prop_Text">2 Properties</p> */} 
            <div className="Profile_Bottom_Cont">
                <div className="Profile_Button_Cont">
                <button className="Profile_Button" onClick={() => popup()}>
                    <p className="Contact_Text"> <MdMailOutline className="Mail_Icon" />Contact Agent</p>
                </button>
                </div>
            </div>
        </div>
    )
}

export default RealEstateProfile