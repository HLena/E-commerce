import { useState, useEffect } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading : true,
        hasError: null
    })

    useEffect(() => {

        getItem();

    }, [url])
    

    const getItem = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
        
    }

    return {
        ...state
    };
}
