import React, { useState, useContext } from "react";

import AppContext from "./../../context/app-context";

const Listing:React.FC = () => {
    const [ currentSortingField, setCurrentSortingField ] = useState<string>("name");
    const [ currentSortingBy, setCurrentSortingBy ] = useState<string>("DESC");

    const context = useContext(AppContext);

    const onClickSorting = (sortingField: string) => {
        const sortBy = currentSortingBy === "ASC" ? "DESC": "ASC";
        context.sortItemFn(sortingField, sortBy);
        setCurrentSortingField(sortingField);
        setCurrentSortingBy(sortBy);
    }
    

    return(
        <div className={"bg-white flex pv3 justify-around  bb b--moon-gray b"}>
            <div className={"ml3"} style={{"flex": .25}}>
                <input type="checkbox" onChange={context.onSelectAllCheckbox} />
            </div>
            <div className={""} style={{"flex": 1}}>Dessert(100g serving) 
                <span 
                    className={`pointer ml1 f6 ${currentSortingField === "name" && "blue"}`} 
                    onClick={(e) => onClickSorting("name")}
                >
                    &#x21c5;
                </span>
            </div>
            <div className={"tc"} style={{"flex": .5}}>Calories 
                <span 
                    className={`pointer ml1 f6 ${currentSortingField === "calories" && "blue"}`} 
                    onClick={(e) => onClickSorting("calories")}
                >
                    &#x21c5;
                </span>
            </div>
            <div className={"tc"} style={{"flex": .5}}>Fat (g) 
                <span 
                    className={`pointer ml1 f6 ${currentSortingField === "fat" && "blue"}`} 
                    onClick={(e) => onClickSorting("fat")}
                >
                    &#x21c5;
                </span>
            </div>
            <div className={"tc"} style={{"flex": .5}}>Carbs (g) 
                <span 
                    className={`pointer ml1 f6 ${currentSortingField === "carbs" && "blue"}`} 
                    onClick={(e) => onClickSorting("carbs")}
                >
                    &#x21c5;
                </span>
            </div>
            <div className={"tc"} style={{"flex": .5}}>Protein (g) 
                <span 
                    className={`pointer ml1 f6 ${currentSortingField === "protein" && "blue"}`} 
                    onClick={(e) => onClickSorting("protein")}
                >
                    &#x21c5;
                </span>
            </div>
        </div>
    )
}

export default Listing;