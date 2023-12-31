// import React from 'react'
import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { useStateValue } from "./Stateprovider";
import { db } from "./Firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created, //charge yetdergebet seat
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        {/* <Link to="/"></Link> */}
        <h1>
          <Link to="/">Checkout</Link> (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>chicago,IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;




































// import './Payment.css'
// import { useStateValue } from './Stateprovider';
// import CheckoutProduct from './CheckoutProduct';
// import { Link, useNavigate } from 'react-router-dom';
// import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
// import CurrencyFormat from 'react-currency-format';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from './axios';

// function Payment() {
//   const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);
//   const [{ basket, user }, dispatch] = useStateValue();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const navigate = useNavigate();

//   const [succeeded, setSucceded] = useState(false);
//   const [processing, setProcessing] = useState("");

//   const [clientSecrete, setClientSecrete] = useState(true);

//   useEffect(() => {
//     //generates the special stripe secret which allows us to charge a customer
//     const getclientSecrete = async () => {
//       // const response = await axios.post("/create-payment-intent", {
//       //   url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//       //   // Include any necessary parameters for creating the payment intent
//       // });
//       const response = await axios({
//         method: "post",
//         //stripe expects the total in a currencies submits
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//         //gerBasketTotal(basket)*100 is because all api requests expect amounts to be probided in a currency's snakkest unit eg:- 10 usd provide in an amount value of 1000
//       });
//       setClientSecrete(response.data.clientSecrete);
//     };
//     getclientSecrete();
//   }, [basket]); //[basket] is b/c the request is depends on basket baskettotalu yemisetaw basketun wesedo selehon bichemerem bikenesem update endiyadergew
//   console.log('THE SECRET IS >>>', clientSecrete)
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe
//       .confirmCardPayment(clientSecrete, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentIntent }) => {
//         //paymentIntent =payment confirmation
//         setSucceded(true); //card ketkebele already succes argual
//         setError(null); //error selelel new card yewesdew so error ayinorem
//         setProcessing(false); //process adergo selcherese
//         navigate("/orders");
//       });
//   };
//   const handleChange = (event) => {
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };
//   //setDisabled(event.empty) means eventu emty kehon desable adergew
//   //event.error ? event.error.message means eventu error kehon error message asetelalef
//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout(<Link to="/checkout">{basket?.length} items </Link>)
//         </h1>
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address </h3>
//           </div>
//           <div className="payment__address">
//             <p>{user?.email}</p>
//             <p>123 React Lane</p>
//             <p>chicago,IL</p>
//           </div>
//         </div>

//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment__items">
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">
//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />
//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => <h3>Order Total: {value}</h3>}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>processing</p> : "BUY NOW"}</span>
//                 </button>
//               </div>
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment 