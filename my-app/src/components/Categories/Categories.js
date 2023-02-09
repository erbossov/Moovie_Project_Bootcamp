import "./Categories.css";
import { useState, useEffect, useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
const Categories = () => {
  const Categories = useContext(ModalContext);
  return (
    <div className="category__block">
      {Categories.map((el) => (
        <div className="category__item">
          <p className="category__item__text">{el.category}</p>
        </div>
      ))}
    </div>
  );
};
export default Categories;
