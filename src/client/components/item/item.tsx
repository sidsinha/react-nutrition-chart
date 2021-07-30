import React, { useContext } from "react";

import AppContext from "./../../context/app-context"

import { ItemProps } from "./../../types"

const Item:React.FC<ItemProps> = props => {

    const { id, name, calories, fat, carbs, protein, selected } = props;
    const context = useContext(AppContext);

    const onSelect = async(e:any) => {
        const itemID = e.target.value;
        context.onSelectItemFn(itemID);
    }
    return(
        <div  className={`flex pv3 justify-around bb b--moon-gray ${selected && "bg-washed-red"} item`}>
            <div className={"ml3"} style={{"flex": .25}}>
                <input 
                    data-testid="checkbox_nutrition" 
                    checked={selected ? true: false} 
                    type="checkbox" value={id} 
                    name="nutrition"
                    id={`item-${name}-checkbox`}
                    onChange={(e) => onSelect(e)} 
                />
            </div>
            <div className="item-name" style={{"flex": 1}}>{name}</div>
            <div className={"tc"} style={{"flex": .5}}>{calories}</div>
            <div className={"tc"} style={{"flex": .5}}>{fat}</div>
            <div className={"tc"} style={{"flex": .5}}>{carbs}</div>
            <div className={"tc"} style={{"flex": .5}}>{protein}</div>
        </div>
    )
}

export default Item;