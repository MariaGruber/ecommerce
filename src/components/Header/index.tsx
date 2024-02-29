import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import menuIcon from "../../assets/icons/menu-2.svg";
import heartIcon from "../../assets/icons/heart-filled.svg";
import cartIcon from "../../assets/icons/shopping-cart.svg";
import arrowIcon from "../../assets/icons/arrow-narrow-left.svg"
import { useShoppingCart } from "../../contexts/shoppingCartContext";
import "./header.css";

export function Header() {
    const { cartQuantity } = useShoppingCart();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const clearLocalStorage = () => {
        for (const key in localStorage) {
        if (key !== 'USERS'&& key !== 'PRODUCTS') {
            localStorage.removeItem(key);
            navigate('/login');
          }
        }
    };

    const goBack = () => {
            navigate(-1); };
    return (
        
        <div className="header-navbar">
            <div className="header-menu">
                <img
                    className="header-menu-icon"
                    src={menuIcon}
                    alt="menu"
                    onClick={toggleMenu}
                />
                <img className="header-menu-icon" src={arrowIcon} alt="go back" onClick={goBack}/>
                {isMenuOpen && (
                    <div className="logout-menu">
                        <button className="logout-menu-button" 
                        onClick={clearLocalStorage}>Logout
                        </button>
                    </div>
                 )}
            </div>
            <div className="header-icons">
                <NavLink to='/wishlist'>
                    <img className="header-menu-icon" src={heartIcon} alt="wishlist"/> 
                </NavLink>
                <NavLink to='/cart'>
                    <button className="shopping-cart-button">
                        <img className="header-menu-icon cart-icon" src={cartIcon} alt="cart"/>
                        <div className="cart-icon-number">{ cartQuantity }</div>
                    </button>
                </NavLink>
            </div>
        </div>
    )
}