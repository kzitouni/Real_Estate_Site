import React, {
    useState,
    useEffect
} from 'react'
import {
    FetchError
} from 'node-fetch';
import DefaultHome from '../DefaultHome'

var convert = require('xml-js');
const Context = React.createContext()

const SearchFetch = ({
    children
}) => {
    const [result, setResult] = useState([])
    const [final, setFinal] = useState([])
    const [house, setHouse] = useState(DefaultHome)
    const [total, setTotal] = useState()
    const [isLoading, setIsLoading] = useState("false")
    const [addy, setAddy] = useState({add:"800 devon st", cit:"Kearny", sta:"nj"})
    const [address, setAddress] = useState("800 devon st")
    const [second, setSecond] = useState("")
    const [city, setCity] = useState("Kearny")
    const [state, setState] = useState("nj")
    const [back, setBack] = useState(false)
    let Url = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=${addy.add}&citystatezip=${addy.cit}%2C+${addy.sta}&rentzestimate=true`;
    let AreaUrl = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&address=St&citystatezip=${addy.cit}%2C+${addy.sta}&rentzestimate=true`;
    let first = false
    const fetchData = async () => {
        setResult([])
        setFinal([])
        console.log(result, "firstres")
        const res = await fetch(Url)
        res.text()
            .then(data => {
                console.log(data)
                if(JSON.parse(convert.xml2json(data, {
                    compact: true,
                    spaces: 4
                }))["SearchResults:searchresults"].message.code._text !=
                "0") {
                    setAddress("st") && fetchData()  
                }
                else {
                    if(JSON.parse(convert.xml2json(data, {
                        compact: true,
                        spaces: 4
                    }))["SearchResults:searchresults"].response.results.result.length == undefined) {
                        result.push({zpid: JSON.parse(convert.xml2json(data, {
                            compact: true,
                            spaces: 4
                        }))["SearchResults:searchresults"].response.results.result.zpid._text,
                        rentzestimate: JSON.parse(convert.xml2json(data, {
                            compact: true,
                            spaces: 4
                        }))["SearchResults:searchresults"].response.results.result.rentzestimate.amount != undefined ? 
                        JSON.parse(convert.xml2json(data, {
                            compact: true,
                            spaces: 4
                        }))["SearchResults:searchresults"].response.results.result.rentzestimate.amount._text : null,
                        zestimate: JSON.parse(convert.xml2json(data, {
                                compact: true,
                                spaces: 4
                            }))["SearchResults:searchresults"].response.results.result.zestimate.amount._text != undefined ?
                            JSON.parse(convert.xml2json(data, {
                                compact: true,
                                spaces: 4
                            }))["SearchResults:searchresults"].response.results.result.zestimate.amount._text : null
                    
                       }) && fetchArea() 
                    }
                    else {
                        result.push({zpid: JSON.parse(convert.xml2json(data, {
                            compact: true,
                            spaces: 4
                        }))["SearchResults:searchresults"].response.results.result[0].zpid._text,
                        rentzestimate: JSON.parse(convert.xml2json(data, {
                            compact: true,
                            spaces: 4
                        }))["SearchResults:searchresults"].response.results.result[0].rentzestimate != undefined ? 
                        JSON.parse(convert.xml2json(data, {
                            compact: true,
                            spaces: 4
                        }))["SearchResults:searchresults"].response.results.result[0].rentzestimate.amount._text : null,
                        zestimate: JSON.parse(convert.xml2json(data, {
                                compact: true,
                                spaces: 4
                            }))["SearchResults:searchresults"].response.results.result[0].zestimate != undefined ?
                            JSON.parse(convert.xml2json(data, {
                                compact: true,
                                spaces: 4
                            }))["SearchResults:searchresults"].response.results.result[0].zestimate.amount._text : null
                    
                       }) && fetchArea() 
                    }
                  }
})
            // .then((data) => setIsLoading("true"))
            // .then((data) => fetchArea())
        // .then(result => result["SearchResults:searchresults"].message.code._text != "0" ? console.log("yuhhhh") : null)
    }

    async function fetchArea() {
        const res = await fetch(AreaUrl)
        res.text()
            .then(data => {
                JSON.parse(convert.xml2json(data, {
                    compact: true,
                    spaces: 4
                }))["SearchResults:searchresults"].response.results.result.map((item, index) => {
                    result.push({
                        zpid: item.zpid._text,
                        rentzestimate: item.rentzestimate != undefined ? item.rentzestimate.amount._text : null,
                        zestimate: item.zestimate.amount._text != undefined ? item.zestimate.amount._text : null
                    })
                })
            })
            .then((dat) => fetchFinal())
    }

    function fetchFinal() {
        console.log(result, "zpid ")
        setFinal([])
        console.log(final, "final final")
        Promise.all(result.map(async (item, index) => {
            setFinal([])
            let UpdateUrl = `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1hixiuj93ij_6plsv&zpid=${item.zpid}`
            const res = await fetch(UpdateUrl)
            res.text()
                .then(data => (
                    JSON.parse(convert.xml2json(data, {
                        compact: true,
                        spaces: 4
                    }))["UpdatedPropertyDetails:updatedPropertyDetails"].response != undefined ?
                    final.push({
                        result: JSON.parse(convert.xml2json(data, {
                            compact: true,
                            spaces: 4
                        }))["UpdatedPropertyDetails:updatedPropertyDetails"].response,
                        zpid: item.zpid,
                        zestimate: item.zestimate,
                        rentzestimate: item.rentzestimate,
                        image: JSON.parse(convert.xml2json(data, {
                                compact: true,
                                spaces: 4
                            }))["UpdatedPropertyDetails:updatedPropertyDetails"].response.images == undefined ?
                            `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["UpdatedPropertyDetails:updatedPropertyDetails"].response.address.latitude._text},${JSON.parse(convert.xml2json(data, {compact: true, spaces: 4}))["UpdatedPropertyDetails:updatedPropertyDetails"].response.address.longitude._text}&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c` : null
                    }) : null
                ))
                .then(dat => setFinal(final))
        })).then(dat => setIsLoading("true"))
    }


    useEffect(() => {
        fetchData()
    }, [addy])
    // useEffect(() => {
    //     setResult([])
    //     setFinal([])
    //     fetchData()
    // }, [state])

    // function findzpid(item) {
    //     item.zpid == final.zpid

    // }

    const onClicked = (zp) => {
        const res = final.find((item) => (zp == item.zpid))
        setHouse(res)
        setBack(true)
    }


    const onSearch = (add, cit, sta) => {
        // console.log(add, cit, sta,"addresso")
        setAddy({add:add, cit:cit, sta:sta})

        setAddress(add)
        setCity(cit)
        setState(sta)
        setIsLoading("false")
        setFinal([])
        setResult([])
        console.log(result, "after res")
        // fetchData()
        // console.log(result, "result")
        // console.log(final, "final")
        // console.log(total, "total")
        // console.log(house, "house")
        // console.log(isLoading, "IsLoading")

    }
    // const findzpid = (item) => (
    //     item.zpid == final.zpid

    // )

    // const onClicked = () => (console.log(final.find(findzpid), "finalsss"))



    // console.log(result != "" ? result["SearchResults:searchresults"].message.code._text : null, "at")
    return ( <Context.Provider value = {
            {
                fetchData,
                result,
                isLoading,
                total,
                final,
                onClicked,
                house,
                setHouse,
                onSearch,
                setFinal,
                addy,
                back,
                setBack
            }
        } > {
            children
        } </Context.Provider>
    )
}

export {
    Context,
    SearchFetch
}