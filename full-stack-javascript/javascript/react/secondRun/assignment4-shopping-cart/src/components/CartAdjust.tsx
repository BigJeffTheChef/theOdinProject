import React from "react";
import '../styles/CartAdjust.css'

const CartAdjust = ({showTextInput, name, addToCart, removeFromCart, addAmountToCart}: {
    showTextInput: boolean,
    name: string,
    addToCart: (name: string) => void,
    removeFromCart: (name: string) => void,
    addAmountToCart: (name: string, number: number) => void
}) => {
    // const addSpecificAmount = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     const amountToAdd = Number((event.currentTarget.parentElement?.children[0] as HTMLInputElement).value);
    //     for (let i = 0; i < amountToAdd; i++) {
    //         addToCart(name);
    //     }
    // };
    const addSpecificAmount = (event: React.MouseEvent<HTMLButtonElement>) => {
        const amountToAdd = Number((event.currentTarget.parentElement?.children[0] as HTMLInputElement).value);
        addAmountToCart(name, amountToAdd);
    };
    const textInput = showTextInput
        ? <div className='CartAdjust__addAmount'>
            <input type='text'></input>
            <button onClick={addSpecificAmount}>Add</button>
        </div> : null;
    return (
        <div className='CartAdjust'>
            &nbsp;
            <div className='CartAdjust__increment' onClick={() => removeFromCart(name)}>-</div>
            &nbsp;
            <div className='CartAdjust__increment' onClick={() => addToCart(name)}>+</div>
            &nbsp;
            {textInput}
        </div>);
}

export default CartAdjust;