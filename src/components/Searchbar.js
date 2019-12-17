import React from 'react'
import States from '../States'
const Searchbar = () => {

    const state = 
        States.map((item) => (
            <option>{item.abbreviation}</option>
        ))
    

return (
    <div className="Searchbar_Cont">
        <div className="State_Input_Cont">
 
        <select className="State_Input"> 
            {state}
        </select>
        <input className="City_Input" placeholder="City"></input>
        <input className="City_Input" placeholder="Address"></input>
        </div>
        
    </div>
)

}

export default Searchbar