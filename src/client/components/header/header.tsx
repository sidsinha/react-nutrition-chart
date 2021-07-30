import React, { useContext } from "react";

import AppContext from "./../../context/app-context";

import TrashImg from "./../../../assets/trash.png";

type Props  = {
    alertMessage:string,
    addNewItemFormStatus: (arg0:boolean) => void,
    newItemStatus: boolean
}
const Header:React.FC<Props> = ({alertMessage, addNewItemFormStatus, newItemStatus}) => {
    const context = useContext(AppContext);
    const onClickDelete = () => {
        context.deleteItemFn();
    }
    const onClickAddNew = (status:boolean) => {
        addNewItemFormStatus(status)
    }
    return(
        <div id="header" className="bg-washed-red flex justify-between b items-center">
            <div className={"pv3 ml3 dark-pink"}>
                {
                    newItemStatus ? `Please enter all deatils to add new Dessert` : `${context.selectedItems.length} selected`
                }
            </div>
            {
                alertMessage && <div className={`${alertMessage && "bg-gold pv2 ph4 light-yellow"}`}>&#x2714; {alertMessage}</div>
            }
            <div className={"pv3 mr3 gray flex"}>
            {
                !newItemStatus ? 
                <button 
                    id="add-new" 
                    disabled={context.selectedItems.length ? true : false} 
                    className={`flex items-center f6 b pointer dark-green bn bg-white ph3 pv2 mr3  ${context.selectedItems.length ? "o-30":""}`} 
                    onClick={e => onClickAddNew(true)}>
                        &#43; ADD NEW
                </button> : 
                <button 
                    id="add-new" 
                    disabled={context.selectedItems.length ? true : false} 
                    className={`flex items-center f6 b pointer orange bn bg-white ph3 pv2 mr3  ${context.selectedItems.length ? "o-20":""}`} 
                    onClick={e => onClickAddNew(false)}>
                        &#x261a; Go BACK
                </button>
            }
            <button 
                id="delete-button" 
                disabled={context.selectedItems.length ? false : true} 
                className={`flex items-center f6 b pointer red bn bg-white ph3 pv2 ${context.selectedItems.length ? "":"o-20"}`} 
                onClick={onClickDelete}>
                    <img className={`mr1`} src={TrashImg} alt="trash" width="15" />
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default Header;