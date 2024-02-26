import { Product } from "../../services/types";
import { formatCurrency } from "../../utilities/formatCurrency";
import shoppingCart from "../../assets/icons/shopping-cart.svg"
import "./cards.css";
import { NavLink } from "react-router-dom";


export default function Cards(props: Product) {
    console.log('CARD--->', props)
    return (
        <NavLink to={`/productDetail/${props.id}`}>
            <div className="card-container">
                <img src={props.image[0]} alt="product" />
                <div>
                    <p className="card-product-name">{props.name}</p>
                    <p className="card-product-brand">{props.brand}</p>
                    <p className="card-product-price">{formatCurrency(props.price)} </p>
                </div>
                <img className="shopping-cart-icon"src={shoppingCart} alt="add to shopping cart"/>
            </div>
        </NavLink>
    )
};
