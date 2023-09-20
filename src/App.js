import React, { useEffect, useState } from 'react'
import "./App.css"
import Header from './Header'
import Home from './Home'

import { auth } from "./Firebase";
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './Stateprovider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import{Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51Nd1cdDcUJGOfF9PFCXgkNZQKqotSY8oUmDDcHelPPpyfUwJNA8yFA14KcqUWvncDvQhIocnyXmxNfDfNHWLiiUZ00w8cGYNrA"
  
);


function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  },[])
  return (
    
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/orders" element={<><Header/><Orders/></>}/>
        <Route path="/Checkout" element={<><Header/><Checkout/></>}/>
        <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements></>} 
          />
        </Routes>
    
      </div>
    </Router>
    // <div>
    // <Header />
    //   <Home />
    // </div>
  );
}

export default App














