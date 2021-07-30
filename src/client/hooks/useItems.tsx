
import { useQuery } from 'react-query';

export const fetchDataFromGraphQL = async() => {
  const query = `{
    getItems {
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
  await new Promise(resolve => setTimeout(resolve, 1000));
  return data?.data?.getItems;
}

export default function useItems() {
    return useQuery("itemList", fetchDataFromGraphQL, {
        refetchOnWindowFocus: false
    });
}