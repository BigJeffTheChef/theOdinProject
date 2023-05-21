import ICartItem from "../ICartItem";
import React from "react";

const Cart = ({itemsInCart} : {itemsInCart: ICartItem[]}) => {
    return (
        <div>
            {itemsInCart.map(item => {
                const {name, quantity} = item;
                return (
                    <p key={"" + Math.random()}>Name: {name} | Quantity: {quantity}</p>
                );
            })}
        </div>
    );
};

export default Cart;