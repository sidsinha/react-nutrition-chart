import React,  { useContext } from "react";

import ListHeader from "./../list-heading";
import Item from "./../item";

import AppContext from "./../../context/app-context"

import { Dessert, ListingProps } from "./../../types"

const Listing:React.FC<ListingProps> = props => {

    const { itemList, status } = props;
    const context = useContext(AppContext);

    return(
        <div id="item-listing" className="items">
            <ListHeader />
            {
                status === "loading" && <div className="ma4">Data Loading...</div>
            }
            {
                itemList.map((key:Dessert, index:number) => {
                    const selected = context.selectedItems.includes(key.id);
                    return <Item 
                        id={key.id} 
                        name={key.name}
                        calories={key.calories} 
                        fat={key.fat}
                        carbs={key.carbs}
                        protein={key.protein}
                        key={index}
                        selected={selected}
                    />
                })
            }
        </div>
    )
}

export default Listing;