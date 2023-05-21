import ICartItem from "../ICartItem";
import React from "react";
// @ts-ignore
import uniqid from 'uniqid';
import CartAdjust from "./CartAdjust";
import '../styles/Cart.css'

const Cart = ({itemsInCart, addToCart, removeFromCart, addAmountToCart}: {
    itemsInCart: ICartItem[],
    addToCart: (name: string) => void,
    removeFromCart: (name: string) => void,
    addAmountToCart: (name: string, number: number) => void
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
                        <div className='cart-item' key={uniqid()}>
                            <p>Name: {name} | Quantity: {quantity} | price={Number(price * quantity).toFixed(2)}</p>
                            <CartAdjust
                                showTextInput={false}
                                name={name}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                addAmountToCart={addAmountToCart}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;