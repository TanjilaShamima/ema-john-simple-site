import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {


    
    const productInfo = props.product;

    
    // const {name, img, seller} = props.product;
    
    return (
        <div className="product">
            <div className="product-image">
                <img src={productInfo.img} alt=""/>
            </div>

            <div classsName="product-description">
                <h5 className="product-name">{productInfo.name}</h5>
                <br/>
                <p><small>by:{productInfo.seller}</small></p>
                <p>${productInfo.price}</p>
                <p>Only {productInfo.stock} left - Order Soon</p>
                <button className="main-button" onClick={() => props.addHandaler(productInfo)}><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
            
            
            
        </div>
    );
};

export default Product;