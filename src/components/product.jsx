/* eslint-disable react/prop-types */
import  { useState, useEffect   } from 'react';
import './../styles/product.css';
import Navbar from '../components/navbar.jsx';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Product = ({ basketItems, setBasketItems }) => {
 const [products, setProducts] = useState([]);
 const navigate = useNavigate(); 
 useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
 }, []);

 useEffect(() => {
    console.log("Updated Basket Items: ", basketItems);
 }, [basketItems]);

 const addToBasket = (product) => {
  const existingItem = basketItems.find(item => item.id === product.id);

  if (existingItem) {
      const updatedBasketItems = basketItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setBasketItems(updatedBasketItems);
  } else {
      const updatedBasketItems = [...basketItems, { ...product, quantity: 1 }];
      setBasketItems(updatedBasketItems);
      navigate('/basket');

  }
};

 
 return (
    <div className="product">
      <Navbar />
      <h3>SHOP</h3>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img
              className="product-item-image"
              src={product.image}
              alt={product.title}
            />
            <h2 className="product-item-title">{product.title}</h2>
            <h2 className="product-item-rate">Rate: {product.rating.rate}</h2>
            <h2 className="product-item-price">Price: ${product.price}</h2>
            <button className="product-item-button-add" onClick={() => addToBasket(product)}>
              ADD TO BASKET
            </button>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Product;