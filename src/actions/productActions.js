import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  await console.log(res);
  const data = await res.json();
  await console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
