import { Input } from "../Input";
import searchIcon from "../../assets/icons/search.svg";
import "./searchbar.css";
import { CustomButton } from "../button";

export default function SearchBar() {
    return(
        <>
            <div className="searchBar-container">
                <img className="search-icon" src={searchIcon} alt="search" />
                <Input title="" type="text" placeholder="Looking for something?"/>
            </div>
            <div className="filters-container">
                <CustomButton title="Electronic"/>
                <CustomButton title="Kitchen"/>
                <CustomButton title="Music"/>
                <CustomButton title="topSales"/>
            </div>

               
        </>
        
    )
}