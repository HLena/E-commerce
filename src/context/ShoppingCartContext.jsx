import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState();
    const [cartItems, setCartItems] = useState([]);
  
  
    const getTotalPrice = () => {};
  
    const showCart = () => setIsOpen(!isOpen);
  
    const removeItemFromCart = (id) => {
        setCartItems( items => {
            return items.filter(item => item.id !== id)
        })
    };
  
    const increaseCartItemQuantity = (id) => {
        setCartItems( items => {
            if(items.find(item => item.id === id) == null ){
                return [ ...items, { id, quantity: 1}]
            } else {
                return items.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    };

    const decreaseCartItemQuantity = (id) => {
        setCartItems( items => {
            if(items.find(item => item.id === id)?.quantity === 1 ){
                return items.filter((item) => item.id !== id)
            } else {
                return items.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    };

    return (
        <ShoppingCartContext value={{
            showCart,
            getTotalPrice,
            cartItems,
            removeItemFromCart,
            increaseCartItemQuantity,
            decreaseCartItemQuantity
        }}>
            {children}
            <ShoppingCart isOpen = { isOpen }/>
        </ShoppingCartContext>
    )
}
