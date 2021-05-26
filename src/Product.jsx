import React from "react";
import product_data from "./Product_data";
import "./App.css";

const Product = () => {
  const productMain = product_data.map((val) => (
    <div className='cards'>
      <div className='card'>
        <img src={val.img} alt='mypic' className='card_img'></img>
        <div className='card_info'>
          <h3 className='card_title'>{val.title}</h3>
          <span className='card_description'>{val.description}</span>
          <br />
          <span className='card_price'>
            {val.currency}
            {val.price}
          </span>
          <br />

          <button>Cart</button>
        </div>
      </div>
    </div>
  ));
  return <>{productMain}</>;
};
export default Product;
