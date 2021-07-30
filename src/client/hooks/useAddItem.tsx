
import { useMutation, queryCache } from 'react-query';
import { NewItem } from "./../types";

export const AddGraphQLData = async(itemObj:NewItem) => {

  const {name, calories, fat, carbs, protein } = itemObj;

  const query = `
  mutation{
    addItem(item: { name: "${name}", calories: ${calories}, fat: ${fat}, carbs: ${carbs}, protein: ${protein} }) {
      id
      name
      calories
      fat
      carbs
      protein
    }
  }
  `;

  const url = "http://localhost:3600/graphql";
  const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
  };

  const response = await fetch(url, opts);
  const data = await response.json();
  console.log("Response Add New: ", data);
  return data.data.addItem
}

export default function useItemSorting() {
    return useMutation(AddGraphQLData, {
      onSuccess: data => queryCache.setQueryData('itemList', data)
    });
}