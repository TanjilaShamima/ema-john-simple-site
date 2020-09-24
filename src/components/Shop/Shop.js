import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [cart, setCart] = useState([]);
 

    const addHandaler =(products) =>{
        const newCart = [...cart, products];
        setCart(newCart);
   
    }
    console.log(cart);

    const dataLength = fakeData.slice(0,10);
    const [products, setProducts] = useState(dataLength);
    
    // console.log(products);
    return (
       
        
        <div className="shop-container">
           
           <div className="product-container">
              
                {
                    products.map(pro => <Product addHandaler={addHandaler} product={pro}></Product>)
                }
                
           </div>

           <div className="cart-conatiner">
              <Cart cart={cart}></Cart>
           </div>
           
        
        </div>
    );
};

export default Shop;