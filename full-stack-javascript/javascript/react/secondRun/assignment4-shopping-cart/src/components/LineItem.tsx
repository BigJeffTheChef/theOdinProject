import '../styles/LineItem.css';
import CartAdjust from "./CartAdjust";
import React from "react";

const LineItem = ({name, price, quantityInStock, addToCart, removeFromCart, addAmountToCart}: {
    name: string,
    price: number,
    quantityInStock: number,
    addToCart: (name: string) => void,
    removeFromCart: (name: string) => void,
    addAmountToCart: (name: string, number: number) => void

}) => {
    return (
        <div className='LineItem'>
            <div className='LineItem__details'>
                <div className='LineItem__details__name'>Name:</div>
                <div>{name}</div>
                <div className='LineItem__details__name'>Price:</div>
                <div>£{Number(price).toFixed(2)}</div>
                <div className='LineItem__details__name'>In Stock:</div>
                <div>{quantityInStock} units</div>
            </div>
            <CartAdjust
                showTextInput={true}
                name={name}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                addAmountToCart={addAmountToCart}
            />
        </div>
    );
};

export default LineItem;