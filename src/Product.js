import React from 'react';
const Product = (props) =>(
  <div>
      <h3>{props.name}</h3>
      <h4>{props.price} Euro</h4>
  </div>
);


export default Product;
