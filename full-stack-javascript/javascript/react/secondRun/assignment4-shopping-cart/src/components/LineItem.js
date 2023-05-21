import '../styles/LineItem.css';

const LineItem = ({name, price, quantityInStock, addToCart, removeFromCart}) => {
    return (
        <div className='LineItem'>
            <div>Name: {name}</div>
            <div className='LineItem__details'>
                <p>Price: £{price}</p>
                <p>Quantity In Stock: {quantityInStock}</p>
            </div>
            <div className='LineItem__controls'>
                <div className='LineItem__increments'>
                    &nbsp;<p onClick={() => removeFromCart(name)}>-</p>&nbsp;&nbsp;<p onClick={() => addToCart(name)}>+</p>&nbsp;
                </div>
                <div className='LineItem__addAmount'>
                    <input type='text'></input>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default LineItem;