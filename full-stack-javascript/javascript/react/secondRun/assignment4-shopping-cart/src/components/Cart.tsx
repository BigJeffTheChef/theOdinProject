import ICartItem from "../ICartItem";
import React from "react";
// @ts-ignore
import uniqid from 'uniqid';
import CartAdjust from "./CartAdjust";
import '../styles/Cart.css'

const Cart = ({itemsInCart, addToCart, removeFromCart}: {
    itemsInCart: ICartItem[],
    addToCart: (name: string) => void,
    removeFromCart: (name: string) => void
}) => {
    const emptyCartMsg = itemsInCart.length === 0 ? <p>Nothing in the Cart</p> : null;
    return (
        <div className='Cart'>
            <p>Your Cart</p>
            <div>
                {emptyCartMsg}
                {itemsInCart.map(item => {
                    const {name, quantity, price} = item;
                    return (
                        <div className='cart-item'>
                            <p key={uniqid()}>Name: {name} | Quantity: {quantity} | price={price * quantity}</p>
                            <CartAdjust name={name} addToCart={addToCart} removeFromCart={removeFromCart}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;