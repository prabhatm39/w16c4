// use axios for api call
import axios from "axios";
import { DATA } from "./actionTypes";

async function getProductsData(dispatch) {
  const result = await axios("https://movie-fake-server.herokuapp.com/products");



  dispatch({
      type: DATA,
      payload: result.data,
  });
    
};

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
