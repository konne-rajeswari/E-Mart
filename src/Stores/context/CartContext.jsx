import { createContext, useContext, useState  } from "react";



const cartcontext = createContext()

 export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    }

    const removreFromCart = (item) => {
        setCartItems(cartItems.filter((apple) => apple !== item));
    }
    return (
        <cartcontext.Provider value={{ cartItems, addToCart, removreFromCart }}>
            {children}
        </cartcontext.Provider> 

    )

}

export const useCart =()=>{
    return useContext(cartcontext)
}