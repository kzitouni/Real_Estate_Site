import React, {useState} from 'react'
import { FetchError } from 'node-fetch';
var convert = require('xml-js');

const Context = React.createContext()

const SearchFetch = ({children}) => {
    const [result, setResult] = useState()
    const [address, setAddress] = useState("884 devon st")
    const [city, setCity] = useState("kearny")
    const [state, setState] = useState("nj")
    let Url = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=${address}&citystatezip=${city}%2C+${state}&rentzestimate=true`;
    async function fetchData(){
        const res = await fetch(Url)

        .then(data => setResult(convert.xml2json(data, {compact: true, spaces: 4}))) 
    }
    console.log(result, "at")
return (
    <Context.Provider value={{fetchData, result}}>
            {children}
        </Context.Provider>
)
}

export {Context, SearchFetch}