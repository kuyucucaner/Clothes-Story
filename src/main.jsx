/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react';
import Home from './components/home';
import Product from '/src/components/product.jsx';
import Basket from './components/basket';

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  
  const handleRemoveItem = (itemId) => {
    const updatedBasketItems = basketItems.filter((item) => item.id !== itemId);
    setBasketItems(updatedBasketItems);
    setItemQuantities((prevQuantities) => {
      const { [itemId]: removedQuantity, ...remainingQuantities } = prevQuantities;
      return remainingQuantities;
    });
  };
  const clearBasket = () => {
    // Clear the basket items
    setBasketItems([]);
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product basketItems={basketItems} setBasketItems={setBasketItems} />,
    },
    {
      path: "/basket",
      element: <Basket
      basketItems={basketItems}
      itemQuantities={itemQuantities}
      handleRemoveItem={handleRemoveItem}
      clearBasket={clearBasket}
    />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
