
import { useMutation, queryCache } from 'react-query';

export const resetGraphQLData = async() => {
  const query = `
  mutation {
    resetData {
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
  return data.data.resetData;
}

export default function useResetData() {
    return useMutation(resetGraphQLData, {
      onSuccess: data => queryCache.setQueryData('itemList', data)
    });
}