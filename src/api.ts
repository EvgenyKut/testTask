import { Data } from "./types";

export const login = async (data: Data) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
};
