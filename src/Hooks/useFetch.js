import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const getData = async () => {
        try{
            const data = await fetch(url)
            const response = await data.json()
            setData(response)
        }catch(e){
            console.error(e)
            setError(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        setData(getData())
    }, [])

    return data
}

export default useFetch;