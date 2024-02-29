import { Product } from "../../services/types";
import { formatCurrency } from "../../utils/formatCurrency";
import "./cards.css";
import { NavLink } from "react-router-dom";


export default function Cards(props: Product) {
    return (
        <NavLink to={`/productDetail/${props.id}`}>
            <div className="card-container">
                <div className="card-product-img-container">
                <img className="card-product-img" src={props.image[0]} alt="product" />
                </div>
                <div className="card-product-info-container">
                    <p className="card-product-name">{props.name}</p>
                    <p className="card-product-brand">{props.brand}</p>
                    <p className="card-product-price">{formatCurrency(props.price)} </p>
                </div>
            </div>
        </NavLink>
    )
};
