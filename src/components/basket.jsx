/* eslint-disable no-unused-vars */
import '../styles/basket.css';
import Navbar from '../components/navbar.jsx';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Basket = ({ basketItems, handleRemoveItem, clearBasket }) => {
    console.log('Basket Items:', basketItems);
    const [itemQuantities, setItemQuantities] = useState({});

    useEffect(() => {
        const initialQuantities = {};
        basketItems.forEach((item) => {
            initialQuantities[item.id] = 1;
        });
        setItemQuantities(initialQuantities);
    }, [basketItems]);

    const calculateTotal = () => {
        return basketItems.reduce(
            (total, item) =>
                total + item.price * (itemQuantities[item.id] || 0),
            0
        ).toFixed(2);
    };

        const handleQuantityChange = (itemId, newQuantity) => {
            newQuantity = Math.max(1, newQuantity);

                setItemQuantities((prevQuantities) => ({
                    ...prevQuantities,
                    [itemId]: newQuantity,
                }));
            }
      

    return (
        <div className="basket">
            <Navbar />

            <div className="basket-container">
                {basketItems && basketItems.length > 0 ? (
                    basketItems.map((item) => (
                        <div className="basket-item" key={item.id}>
                            <img
                                className="basket-item-image"
                                src={item.image}
                                alt={item.title}
                            />
                            <h2 className="basket-item-title">{item.title}</h2>
                            <h2 className="basket-item-rate">
                                Rate: {item.rating.rate}
                            </h2>
                            <h2 className="basket-item-price">
                                Price:${(item.price * (itemQuantities[item.id] || 1)).toFixed(
                                    2
                                )}
                            </h2>
                            <h2 className="basket-item-quantity">
                                Quantity:
                                <button
                                    onClick={() =>
                                        handleQuantityChange(item.id, itemQuantities[item.id] - 1)
                                    }
                                >
                                    -
                                </button>
                                {itemQuantities[item.id]}
                                <button
                                    onClick={() =>
                                        handleQuantityChange(item.id, itemQuantities[item.id] + 1)
                                    }
                                >
                                    +
                                </button>
                                <button onClick={() => handleRemoveItem(item.id)}>
                                    Remove
                                </button>
                            </h2>
                        </div>
                    ))
                ) : (
                    <h1>Your basket is empty.</h1>
                )}
                <h2 className="basket-total">Total: ${calculateTotal()}</h2>
                <button className="basket-item-button" onClick={clearBasket}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

Basket.propTypes = {
    basketItems: PropTypes.array.isRequired,
    clearBasket: PropTypes.func.isRequired,
    handleRemoveItem: PropTypes.func.isRequired,
};

export default Basket;
