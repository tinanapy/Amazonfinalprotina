import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './Stateprovider';

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
const [{ basket }, dispatch] = useStateValue();
   
  // console.log ('this is the basker', basket)
  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  
   return (
     <div className="checkoutProduct">
       <img
         className="checkoutProduct_image"
         src={image}
         // src="dhttp://images-na.ssl-images-amazon.com/images/I/810%2BGNDKzKL._AC_SX450_.jpg"
       />
       {/* 1 product hulete sitazez checkout lay hulet gize enditay */}
       <div className="checkoutProduct__info">
         <p className="checkoutProduct__title">{title}</p>
         <p className="checkoutProduct__price">
           <small>$</small>
           <strong>{price}</strong>
         </p>
         <div className="checkoutProduct__rating">
           {Array({ rating }) //Array({rating})
             .fill()
             .map((_, i) => (
               <p>🌟</p>
             ))}
         </div>
         {/* <div className="checkoutProductbutton"> */}
           {!hideButton && (
             <button onClick={removefromBasket}>Remove from Basket </button>
           )}{''}
         {/* </div> */}
       </div>
     </div>
   );
}

export default CheckoutProduct