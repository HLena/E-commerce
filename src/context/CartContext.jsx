import { createContext, useContext, useState } from "react";
import { Cart } from "../pages/Cart";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {

    // const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
  
  
    const totalPriceCart = cartItems.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
    }, 0);

    const quantityItems =  cartItems.reduce((quantity, item) => quantity + item.quantity,0);
      
    const showCart = () => setIsOpen(true);
    const hideCart = () => setIsOpen(false);
  
    // elimina toda la cantidad de un producto en el carrito 
    const deleteItem = (id) => {
        setCartItems( items => {
            return items.filter(item => item.id !== id)
        })
    };
  

    // agrega en 1 la cantidad de un producto en el carrito
    const addItem = (id, details ) => {
        setCartItems( items => {
            if(items.find(item => item.id === id) == null ){
                return [ ...items, { id, quantity: 1, ...details }]
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

    // remueve en 1 la cantidad de un producto del carrito 
    const removeItem = (id) => {
        setCartItems( items => {
            if(items.find(item => item.id === id)?.quantity === 1 ){
                return items.filter((item) => item.id !== id)
            } else {
                return items.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1, ...item.details }
                    } else {
                        return item
                    }
                })
            }
        })
    };

    // Elimina todos los productos del carrito
    const clearCart = () => setCartItems([]);


    const getQuantityItemById = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    return (
        <CartContext.Provider value={{
            totalPriceCart,
            cartItems,
            quantityItems,
            showCart,
            hideCart,
            deleteItem,
            addItem,
            removeItem,
            getQuantityItemById,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
