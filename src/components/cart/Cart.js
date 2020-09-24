import React from 'react';
import './Cart.css';

const Cart = (props) => {
 

    const cart = props.cart;
    console.log(cart);



    let price = 0;

   
    //  const price = cart.reduce((total,prd) => total+prd,0);
    
    for(let i=0;i<cart.length; i++){
      price = price + (cart[i].price);
    }


    let shipping = 0;

    if(price<35 && price>0){
        shipping = 5;
    }

    else if(price>35) shipping = 15;


    function fixedValue(num){
        return num.toFixed(2);
    }

    const tax = price *.05;

    const total = price  + shipping + tax;


    return (
        <div className ="cart-container">
            <h3>Order Summery</h3>
            <h4>Iteams Order : {cart.length}</h4>
            <p>Items   : ${fixedValue(price)}</p>
            <p>Shipping & Handling	:	{shipping}</p>   
            <p>Estimated Tax:	:	 ${fixedValue(tax)}</p>
            <h2>Order Total :  ${fixedValue(total)}</h2>

            <button class="preview-button">Preview The Order</button>

        </div>
    );
};

export default Cart;