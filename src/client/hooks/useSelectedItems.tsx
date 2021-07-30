import { useState } from "react";
import { Dessert } from "./../types";

export default function useSelectedItems(items:Dessert[]): [number[], (id:number) => void, () => void, () => void] {

    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [ selectAllCheckbox,  setSelectAllCheckbox ] = useState<boolean>(true);

    const addItemsToDelete = (id:number):void => {

        const existingIndex = selectedItems.indexOf(id);
        
        if(existingIndex > -1) {
            selectedItems.splice( existingIndex, 1 );
            setSelectedItems([...selectedItems]);
        } else {
            const tempArr = [...selectedItems, id];
            setSelectedItems(tempArr);
        }
    }

    const resetItemsToDeleteArray = ():void => {
        setSelectedItems([]);
    }

    const selectAllItemsToDelete = ():void => {
        console.log("Select All checkbox");
        if(selectAllCheckbox) {
            const itemIds:number[] = [];
            items.map((item) => itemIds.push(item.id))
            setSelectedItems(itemIds);
        } else {
            resetItemsToDeleteArray();
        }
        
        setSelectAllCheckbox(!selectAllCheckbox);
    }


    return [selectedItems, addItemsToDelete, resetItemsToDeleteArray, selectAllItemsToDelete];
}