
import { useMutation, queryCache } from 'react-query';

export const deleteDataFromGraphQL = async(ids:number[]) => {

  const query = `
  mutation {
    deleteItem(ids:${JSON.stringify(ids)}) {
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
  return data.data.deleteItem
}

export default function useItemForDelete() {
    return useMutation(deleteDataFromGraphQL, {
      onSuccess: data => queryCache.setQueryData('itemList', data)
    });
}