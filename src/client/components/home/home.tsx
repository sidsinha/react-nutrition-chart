import React, { useState , useEffect} from "react";

import Header from "./../header";
import Listing from "./../listing";
import AddNew from "./../add-new"

import useItems from "././../../hooks/useItems";
import useAddItem from "././../../hooks/useAddItem";
import useItemForDelete from "././../../hooks/useItemForDelete";
import useItemSorting from "././../../hooks/useItemSorting";
import useResetData from "././../../hooks/useResetData";
import useAlert from "././../../hooks/useAlert";

import AppContext from "./../../context/app-context";

import { Dessert, NewItem } from "./../../types"
import useSelectedItems from "./../../hooks/useSelectedItems";

const Home:React.FC = () => {

    const [items, setItems] = useState<Dessert[]>([]);
    const [newItemStatus, setNewItemStatus] = useState<boolean>(false);

    const { status, data } = useItems();
    const [ mutateSorting ] = useItemSorting();
    const [ mutateAddItem ] = useAddItem();
    const [ mutate ] = useItemForDelete();
    const [ resetGraphQLData ] = useResetData();

    const [ 
        alertMessage, 
        showAlertMessage,
        hideAlertMessage
    ] = useAlert();
    const [ 
        selectedItems, 
        addItemsToDelete, 
        resetItemsToDeleteArray,
        selectAllItemsToDelete
    ] = useSelectedItems(items);
    

    useEffect(() => {
        if(status === "success") {
            setItems(data);
        }
    }, [status, data]);

    const deleteItemFn = async() => {
        await mutate(selectedItems);
        hideAlertMessage();
        showAlertMessage(`You have deleted ${selectedItems.length} item(s)`);
        resetItemsToDeleteArray();
    }

    const sortItemFn = async(sortingField: string, sortBy: string) => {
        await mutateSorting({sortingField, sortBy});
    }
    const resetData = async() => {
        await resetGraphQLData();
        resetItemsToDeleteArray();
        hideAlertMessage();
    }
    const addNewItemFn = async(itemObj:NewItem) => {
        addNewItemFormStatus(false);
        await mutateAddItem(itemObj);
        showAlertMessage(`You have successfully added new Dessert`);
    }
    const addNewItemFormStatus = (status:boolean) => {
        setNewItemStatus(status);
        hideAlertMessage();
    }
    
    return(
        <div data-testid="myapp"  className="bg-near-white w-70 w-100-m w-100-s pa3 f6-m f7-s">
            <div className="flex justify-between items-center mb2">
                <div className="f2">Nutrition List</div>
                <button 
                    className="pointer bg-green white hover-bg-dark-green pa2 bn" 
                    onClick={resetData}>
                        &#x21ba; RESET DATA
                </button>
            </div>
            <AppContext.Provider value={{
                deleteItemFn: deleteItemFn,
                onSelectItemFn: addItemsToDelete,
                onSelectAllCheckbox: selectAllItemsToDelete,
                sortItemFn: sortItemFn,
                selectedItems: selectedItems
            }}
            >
            <Header alertMessage={alertMessage} addNewItemFormStatus={addNewItemFormStatus} newItemStatus={newItemStatus} />
            {
                !newItemStatus ? 
                <Listing itemList={items} status={status} /> : 
                <AddNew addNewItemFn={addNewItemFn} />
            }
            
            </AppContext.Provider>
        </div>
    )
}

export default Home;