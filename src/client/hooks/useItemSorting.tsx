
import { useMutation, queryCache } from 'react-query';
import { SortingMutation } from "./../types";

export const sortGraphQLData = async(params:SortingMutation) => {

  const {sortingField, sortBy } = params;
  const query = `
  mutation{
    sortItem(sortField: "${sortingField}", sortBy: "${sortBy}") {
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
  return data.data.sortItem
}

export default function useItemSorting() {
    return useMutation(sortGraphQLData, {
      onSuccess: data => queryCache.setQueryData('itemList', data)
    });
}