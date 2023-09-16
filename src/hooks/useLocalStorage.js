import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [cartItems, setCartItems] = useState(() => {

            const jsonValue = localStorage.getItem(key);
            if(jsonValue) return JSON.parse(jsonValue);
            return initialValue;
    
        }
    );

    useEffect(() => {
        localStorage.setItem(key,
            JSON.stringify(cartItems))
    }, [key, cartItems]);

    return [cartItems, setCartItems];
    
  
}
