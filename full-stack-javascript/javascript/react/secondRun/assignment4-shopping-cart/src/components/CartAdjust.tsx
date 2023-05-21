import React from "react";

const CartAdjust = ({name, addToCart, removeFromCart}: {
    name: string,
    addToCart: (name: string) => void,
    removeFromCart: (name: string) => void
}) => {
    return (
        <div className='LineItem__increments'>
            &nbsp;<p onClick={() => removeFromCart(name)}>-</p>&nbsp;&nbsp;<p
            onClick={() => addToCart(name)}>+</p>&nbsp;
        </div>);
}

export default CartAdjust;