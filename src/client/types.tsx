export interface Dessert {
    "id": number,
    "name": string,
    "calories": number,
    "fat": number,
    "carbs": number,
    "protein": number
}
export interface NewItem {
    "name": string,
    "calories": string,
    "fat": string,
    "carbs": string,
    "protein": string
}
export interface ItemProps extends Dessert {
    "selected": boolean
}
export interface ListingProps {
    "itemList": Dessert[],
    "status": string
}

export interface AppContext {
    "deleteItemFn": () => void,
    "sortItemFn": (arg0: string, arg1: string) => void,
    "onSelectItemFn": (arg0: number) => void,
    "onSelectAllCheckbox":  () => void,
    "selectedItems": number[]
}

export interface SortingMutation {
    "sortingField": string,
    "sortBy": string
}