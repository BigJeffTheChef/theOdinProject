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

    const addToCart =  (itemNameToAdd: string) => addAmountToCart(itemNameToAdd, 1);

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

    const addAmountToCart =  (itemNameToAdd: string, numberToAdd: number) => {
        let cartItemIndex = cart.findIndex(item => item.name === itemNameToAdd);
        let localCart = [...cart];
        if (cartItemIndex !== -1) {
            localCart[cartItemIndex].quantity = localCart[cartItemIndex].quantity + numberToAdd;
        } else {
            const itemFromData = data.find(d => d.name === itemNameToAdd);
            if (!itemFromData) return;
            const newCartItem = {
                name: itemNameToAdd,
                quantity: numberToAdd,
                price: itemFromData.price
            };
            localCart.push(newCartItem);
        }
        localCart.sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
        setCart(localCart);
    };

    return (
        <div className="Shop">
            <Cart
                itemsInCart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                addAmountToCart={addAmountToCart}
            />
            <div className='Shop__lineItems'>
                {lineItems.map(li => {
                    const {name, price, quantityInStock} = li;
                    return <LineItem
                        name={name}
                        price={price}
                        quantityInStock={quantityInStock}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        addAmountToCart={addAmountToCart}
                        key={uniqid()}
                    />;
                })}
            </div>
        </div>
    );
}

export default Shop;
