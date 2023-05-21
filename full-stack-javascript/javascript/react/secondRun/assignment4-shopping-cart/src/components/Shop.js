import LineItem from "./LineItem";
import Cart from "./Cart";
import lineItems from '../lineItems.json';
import {useEffect, useState} from "react";

function Shop() {
    const [cart, setCart] = useState([]);

    useEffect(() => console.dir(cart), [cart]);

    /**
     {
        name: name,
        amount: amount
     }
     */
    const addToCart =  (itemNameToAdd) => {
        let cartItemIndex = cart.findIndex(item => item.name === itemNameToAdd);
        let localCart = [...cart];
        if (cartItemIndex !== -1) {
            localCart[cartItemIndex].quantity = localCart[cartItemIndex].quantity + 1;
        } else {
            const newCartItem = {
                name: itemNameToAdd,
                quantity: 1
            };
            localCart.push(newCartItem);
        }
        localCart.sort((a,b) => a.name > b.name);
        setCart(localCart);
    };

    const removeFromCart = (itemNameToRemove) => {
        const index = cart.findIndex(item => itemNameToRemove === item.name);
        const localCart = [...cart];
        if (index !== -1) {
            const quantityInCart = --localCart[index].quantity;
            if (quantityInCart <= 0) {
                localCart.splice(index, 1);
            }
            setCart(localCart);
        }
    };

    return (
        <div className="Shop">
            <Cart itemsInCart={cart}/>
            <div className='line-items'>
                {lineItems.map(li => {
                    const {name, price, quantityInStock} = li;
                    return <LineItem
                        name={name}
                        price={price}
                        quantityInStock={quantityInStock}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        key={"" + Math.random()}
                    />;
                })}
            </div>
        </div>
    );
}

export default Shop;
