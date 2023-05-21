import LineItem from "./LineItem";
import Cart from "./Cart";
import lineItems from '../lineItems.json';
import {useEffect, useState} from "react";
import ICartItem from "../ICartItem";
import React from "react";
// @ts-ignore
import uniqid from 'uniqid';
import '../styles/Shop.css'
import data from '../lineItems.json';

function Shop() {
    const [cart, setCart] = useState<ICartItem[]>([]);

    useEffect(() => console.dir(cart), [cart]);


    /**
     {
        name: name,
        amount: amount
     }
     */
    const addToCart =  (itemNameToAdd: string) => {

        let cartItemIndex = cart.findIndex(item => item.name === itemNameToAdd);
        let localCart = [...cart];
        if (cartItemIndex !== -1) {
            localCart[cartItemIndex].quantity = localCart[cartItemIndex].quantity + 1;
        } else {
            const itemFromData = data.find(d => d.name === itemNameToAdd);
            if (!itemFromData) return;
            const newCartItem = {
                name: itemNameToAdd,
                quantity: 1,
                price: itemFromData.price
            };
            localCart.push(newCartItem);
        }
        localCart.sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
        setCart(localCart);
    };

    const removeFromCart = (itemNameToRemove: string) => {
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
            <Cart itemsInCart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
            <div className='line-items'>
                {lineItems.map(li => {
                    const {name, price, quantityInStock} = li;
                    return <LineItem
                        name={name}
                        price={price}
                        quantityInStock={quantityInStock}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        key={uniqid()}
                    />;
                })}
            </div>
        </div>
    );
}

export default Shop;
