import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

export const Provider = (props) => {
    const [cart, setCart] = useState([])
    const [suma, setSuma] = useState(0)

    const totalCart = () => {
        let  suma = 0
        cart.forEach(item => suma += (item.precio * item.stock));
        setSuma(suma)
    }

    useEffect(() => {
        console.log(cart)
        totalCart()
    }, [cart])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            cart.map(product => {
                if(product.id === item.id){
                    product.cantidad = cantidad
                    console.log('cart', cart)
                    setCart(cart)
                }
            })
            
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }

    const totalProducts = () => {return cart.reduce((acumulador, productoActual)=>acumulador+productoActual.cantidad, 0)};

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    }

    const deleteAll = () => {
        setCart([])
    }

    return (
         <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, suma, totalCart, totalProducts }}>
            {props.children}
        </CartContext.Provider>
    )
}