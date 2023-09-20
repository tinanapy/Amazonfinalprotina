import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider'
import { auth } from './Firebase';

function Header() {
   
const [{ basket, user }, dispatch] = useStateValue();
  const handleAurhentication = () => {
    if (user) {
      auth.signOut();
  }
}
  
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          // src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__SearchIcon" />
      </div>

      <div className="header__nav">
        {/* means user klele becha wede login page endiwesden kale wed home  */}
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAurhentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "SignOut" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne">Rerurns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        {/* //we use link tag instead of a tag because a tag refresh eve;y time we click it  */}
        <Link to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
 
export default Header