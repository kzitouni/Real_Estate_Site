import React, {useState, useEffect} from 'react'
import { FetchError } from 'node-fetch';
var convert = require('xml-js');

const Context = React.createContext()

const SearchFetch = ({children}) => {
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState("false")
    const [address, setAddress] = useState("884 devon st")
    const [city, setCity] = useState("kearny")
    const [state, setState] = useState("nj")
    let Url = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=${address}&citystatezip=${city}%2C+${state}&rentzestimate=true`;
    
    async function fetchData() {
        const res = await fetch(Url)
        res.text()
        .then(data => setResult(JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].message.code._text != "0" ? 
        (setAddress("st") && fetchData()) : JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["SearchResults:searchresults"].response.results.result) )
        .then(() => setIsLoading("true"))
        .then(() => console.log(isLoading,"loadd"))
        // .then(result => result["SearchResults:searchresults"].message.code._text != "0" ? console.log("yuhhhh") : null)

    }

    useEffect(() => {
        fetchData()
    }, [])


    // console.log(result != "" ? result["SearchResults:searchresults"].message.code._text : null, "at")
return (
    <Context.Provider value={{fetchData, result, isLoading}}>
            {children}
        </Context.Provider>
)
}

export {Context, SearchFetch}