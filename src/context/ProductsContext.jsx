import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";


const _URL = 'https://fakestoreapi.com/products'

const ProductsContext = createContext();

export const useProducts = () => {
    return useContext(ProductsContext);
}

export const ProductsProvider = ({ children }) => {

    
    const { categoryId } = useParams();

    const [ url, setUrl] = useState(_URL);

    useEffect(() => {

        setUrl((categoryId === '') ? _URL : `${_URL}/category/${categoryId}`)
        
    }, [categoryId])
    
    const { isLoading, data, hasError} = useFetch(url);

    



    // const changeCategory = (category) => {
    //     setTitle((category === '') ? 'All the products': category);
    // }

    const getProductById = (id) => {
        return data.find((item => item.id == id ))
    }

    return (
        <ProductsContext.Provider value = {{
            isLoading,
            data,
            hasError,
            getProductById,
        }}>
            { children }
        </ProductsContext.Provider>
    )
}
