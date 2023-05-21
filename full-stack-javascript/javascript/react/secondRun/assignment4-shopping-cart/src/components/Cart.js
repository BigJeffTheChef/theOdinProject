const Cart = ({itemsInCart}) => {
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