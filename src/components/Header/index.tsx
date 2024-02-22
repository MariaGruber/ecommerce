import { NavLink } from "react-router-dom";
import "./header.css";
import menuIcon from "../../assets/icons/menu-2.svg";
import heartIcon from "../../assets/icons/heart-filled.svg";
import cartIcon from "../../assets/icons/shopping-cart.svg";

export function Header() {
    return (
        <div className="header-navbar">
            <div className="header-menu">
                <img className="header-menu-icon" src={menuIcon} alt="menu"/>
            </div>
            <div className="header-icons">
                <NavLink to='/wishlist'>
                    <img className="header-menu-icon" src={heartIcon} alt="wishlist"/> 
                </NavLink>
                <NavLink to='/cart'>
                    <img className="header-menu-icon" src={cartIcon} alt="cart"/>
                </NavLink>
            </div>
        </div>
    )
}