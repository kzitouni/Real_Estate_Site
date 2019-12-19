import React, {useState, useEffect, useContext} from 'react'
import HomeBox from './HomeBox'
import {Context} from '../Functions/SearchFetch'
const HomeBoxMapped = () => {
const {result, isLoading, fetchData, allhomes, total, final} = useContext(Context)
const [totalhomes, setTotalhomes] = useState()
let Element;

// const addHomes = () => {
//     setTotalhomes(result.concat(allhomes))
//     console.log(totalhomes)
// }
// useEffect(() => {
//     setTotalhomes(result.concat(allhomes))
//     console.log(totalhomes, "totttttt")
//     console.log(result.length, "length")
// }, [allhomes])

if(final != undefined || [] && final.length > 3) {
    console.log(isLoading,"the if")
    console.log(result,"if res")
    console.log(allhomes,"allhomes var")
    console.log(totalhomes, "tot home")
    console.log(total,"totlallll")
    // addHomes()
    // console.log(totalhomes)
    console.log(final, "finalhomebox")
   Element =  final.map((item) => (
        <HomeBox 
        zpid={item.zpid != undefined ? item.zpid : null}
        zestimate={item.zestimate != undefined ? item.zestimate : item.rentzestimate}
        address={item.result.address.street != undefined ? item.result.address.street._text : ""}
        bed={item.result.editedFacts != undefined ? (item.result.editedFacts.bedrooms != undefined ? item.result.editedFacts.bedrooms._text : "?") : "?"} 
        sqft={item.result.editedFacts != undefined ? (item.result.editedFacts.finishedSqFt != undefined ? item.result.editedFacts.finishedSqFt._text : "?") : "?"} 
        rentzestimate={item.zestimate != undefined ? "Zestimate" : "Rent Zestimate"}
        bathrooms={item.result.editedFacts != undefined ? (item.result.editedFacts.bathrooms != undefined ? item.result.editedFacts.bathrooms._text : "?") : "?"} 
        type={item.result.editedFacts != undefined ? (item.result.editedFacts.useCode != undefined ? item.result.editedFacts.useCode._text : "?") : "?"} 
    />
   ))}
   else if(isLoading == "true" && result == undefined) {
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