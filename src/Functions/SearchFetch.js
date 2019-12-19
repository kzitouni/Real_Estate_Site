import React, {useState, useEffect} from 'react'
import { FetchError } from 'node-fetch';
var convert = require('xml-js');

const Context = React.createContext()

const SearchFetch = ({children}) => {
    const [result, setResult] = useState([])
    const [final, setFinal] = useState([])
    const [allhomes, setAllhomes] = useState([])
    const [house, setHouse] = useState([])
    const [total, setTotal] = useState()
    const [isLoading, setIsLoading] = useState("false")
    const [address, setAddress] = useState("820 devon st")
    const [city, setCity] = useState("kearny")
    const [state, setState] = useState("nj")
    let Url = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=${address}&citystatezip=${city}%2C+${state}&rentzestimate=true`;
    let AreaUrl = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=St&citystatezip=${city}%2C+${state}&rentzestimate=true`;
    async function fetchData() {
        const res = await fetch(Url)
        res.text()
        .then(data => 
            result.push(JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].message.code._text 
            != "0" ? 
        (setAddress("st") && fetchData()) : 
        { zpid : JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].response.results.result.zpid._text, 
        rentzestimate: JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].response.results.result.rentzestimate.amount._text, 
        zestimate : JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].response.results.result.zestimate.amount._text != undefined ? 
        JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].response.results.result.zestimate.amount._text : null }) )
        // .then((data) => setIsLoading("true"))
        // .then((data) => allhomes.push(result[0]))
        .then((data) => (result != undefined ? result.length < 10 : null) ? fetchArea() : null 
        )
        // .then(result => result["SearchResults:searchresults"].message.code._text != "0" ? console.log("yuhhhh") : null)
    }

    async function fetchArea(){ 
        const res = await fetch(AreaUrl)
        res.text()
        .then(data => {
JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].response.results.result.map((item) => {
    result.push(
        {zpid : item.zpid._text, 
        rentzestimate: item.rentzestimate.amount._text, 
        zestimate : item.zestimate.amount._text != undefined ? item.zestimate.amount._text : null }
    )
})
        })
        .then((data) => console.log(allhomes, "fetcharea"))
        .then((dat) => fetchFinal())
        // .then((data) => setTotal(allhomes.concat(result))) 
    }
       function fetchFinal(){ 
          Promise.all(result.map(async (item, index) => {
            let UpdateUrl = `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&zpid=${item.zpid}`
             const res = await fetch(UpdateUrl)
             res.text()
        .then(data => (
            JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["UpdatedPropertyDetails:updatedPropertyDetails"].response != undefined ?
            final.push({result: JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["UpdatedPropertyDetails:updatedPropertyDetails"].response,zpid: item.zpid, zestimate: item.zestimate, rentzestimate: item.rentzestimate}) : null
        ))
        .then(dat => setFinal(final))
        }
        )).then(dat => setIsLoading("true")) }
    

    useEffect(() => {
        fetchData()
    }, [])

    // function findzpid(item) {
    //     item.zpid == final.zpid

    // }

    const onClicked = (zp) =>{
    const res = final.find((item) => (zp == item.zpid))
     setHouse(res)
}
    // const findzpid = (item) => (
    //     item.zpid == final.zpid

    // )

    // const onClicked = () => (console.log(final.find(findzpid), "finalsss"))
    


    // console.log(result != "" ? result["SearchResults:searchresults"].message.code._text : null, "at")
return (
    <Context.Provider value={{fetchData, result, isLoading, allhomes, total, final, onClicked, house}}>
            {children}
        </Context.Provider>
)
}

export {Context, SearchFetch}