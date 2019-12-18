import React, {useState, useEffect, useContext} from 'react'
import HomeBox from './HomeBox'
import {Context} from '../Functions/SearchFetch'
const HomeBoxMapped = () => {
const {result, isLoading, fetchData} = useContext(Context)
let Element;
if(isLoading === "true" && result != undefined) {
    console.log(isLoading,"the if")
    console.log(result,"if res")
   Element =  result.map((item) => (
        
        <HomeBox address={item.address.street._text}  bed={item.bedrooms._text} sqft={item.finishedSqFt._text} zestimate={item.zestimate.amount._text}  />
    ))}
   else if(isLoading === "true" && result == undefined) {
        console.log(isLoading,"the 2nd if")
        console.log(result,"if 2nd res")
        fetchData()
    return <h1>Uh Oh Try your search Again</h1>}
    else if(isLoading == "false") {
        return <h1>no result</h1>
    }
    else{
        return console.log("dayum how")
    }

console.log(isLoading,"loadin")
        
    console.log(result,"resy")
    return (
        <div className="Home_Box_Grid">
            {Element}
        </div>
    )
}

export default HomeBoxMapped