import "../pages/Basket.css";
import { useState, useEffect, useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import Header from "../components/Header/Header";
const Basket = () => {
  const Baskets = useContext(ModalContext);
  return (
    <div className="background">
      <Header />
      <div className="inner_Basket">
        <div className="inner_Basket_Storage"></div>
      </div>
    </div>
  );
};
export default Basket;
