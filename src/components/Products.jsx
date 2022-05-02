import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATA } from "../Redux/actionTypes";
import { Select } from "./Styled.module";
import { useState } from "react";
import { getProductsData } from "../Redux/actions";
import { Grid } from "./Styled.module";


export const Products = () => {
  const [products, setProducts] = useSelector((state) => state.products);
  const dispatch= useDispatch();
  
 
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
   dispatch(getProductsData())
    

    
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */
        products.map((el) => {
          <div key={el.id}>
            <h3>
              {el.title}
              </h3>
              <img src = {el.image} alt="" />
              <h3>
                {el.brand}
                </h3>
                <p>
                  Price: {el.price}
                  </p>
          </div>
          })}
      </Grid>
    </>
  );
};
