import { useContext, useState } from "react";
import { ShopContext } from "../Context/useContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title,ProductsWrap,  } from "./Cart.styled";
import { Quantity } from "../QuantityField";
import { LinksWrapper } from "../App";
import { Link, Route, Routes } from "react-router-dom";
import { Checkout } from "../Checkout";

export const Cart = () => {
  const { products, total } = useContext(ShopContext);




  return (
    <>
      <Title>Your cart total is ${total}.00</Title>
   
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductsWrap><ProductCard {...product} key={index} /><Quantity {...product} key={index}></Quantity></ProductsWrap>
        ))}
      
      </ProductsWrapper>
      <LinksWrapper>
        <Link to="/checkout">Check Out</Link>
      </LinksWrapper>
      <Routes>
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};
