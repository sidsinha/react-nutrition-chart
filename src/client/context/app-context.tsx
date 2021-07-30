import React from "react";
import { AppContext } from "./../types";

const Context = React.createContext<AppContext>({
    deleteItemFn: () => {},
    sortItemFn: () => {},
    onSelectItemFn: () => {},
    onSelectAllCheckbox: () => {},
    selectedItems: []
});

export default Context;