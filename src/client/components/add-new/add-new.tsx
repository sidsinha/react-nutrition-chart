import React, { useState } from "react";
import { NewItem } from "./../../types";

type Props = {
    addNewItemFn: (arg0: NewItem) => void
}
const AddNew = (props:Props) => {
    const { addNewItemFn } = props;

    const intialState = {
        "name": "",
        "calories": "",
        "fat": "",
        "carbs": "",
        "protein": ""
    }
    const [newItemObj, setNewItemObj] = useState<NewItem>(intialState);
    const [alert, setAlert] = useState<boolean>(false)

    const onSubmit = () => {

        const isEmpty = Object.values(newItemObj).some(x => (x === null || x === ''));
        if(isEmpty) setAlert(true);
        
        !isEmpty && addNewItemFn(newItemObj);
    }
    return(
        <div data-automation-id="add-new-item" className="flex flex-column w-50 center bg-white pa4 mt3">   
            {
                alert && <div className="bg-gold pv2 mb3 b white ph1 f6">&#9888; Please fill all details before you submit</div>
            }
            <div className="pv2 flex flex-column">
                <label className="tl mb2">Dessert Name*</label>
                <input 
                    className="tl pa1" 
                    type="text" 
                    maxLength={40}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setNewItemObj({ ...newItemObj, "name": e.currentTarget.value })} 
                />
            </div>
            <div className="pv2 flex flex-column">
                <label className="tl mb2">Calories*</label>
                <input 
                    className="tl pa1" 
                    type="number" 
                    maxLength={4}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setNewItemObj({ ...newItemObj, "calories": e.currentTarget.value })} 
                />
            </div>
            <div className="pv2 flex flex-column">
                <label className="tl mb2">Fat*</label>
                <input 
                    className="tl pa1" 
                    type="number" 
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setNewItemObj({ ...newItemObj, "fat": e.currentTarget.value })} 
                />
            </div>
            <div className="pv2 flex flex-column">
                <label className="tl mb2">Carbs*</label>
                <input 
                    className="tl pa1" 
                    type="number" 
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setNewItemObj({ ...newItemObj, "carbs": e.currentTarget.value })} 
                />
            </div>
            <div className="pv2 flex flex-column">
                <label className="tl mb2">Protein*</label>
                <input 
                    className="tl pa1" 
                    type="number" 
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setNewItemObj({ ...newItemObj, "protein": e.currentTarget.value })} 
                />
            </div>
            
            <button 
                className="pointer bg-dark-green white pv2 ph4 bn fl mt3" 
                onClick={onSubmit}
            >
                    &#x2714; SUBMIT
            </button>
        </div>
    )
}

export default AddNew;