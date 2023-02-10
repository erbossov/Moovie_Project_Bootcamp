import "../pages/Basket.css";
import Header from "../components/Header/Header";
import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
const Basket = () => {
  const { cart } = useContext(ModalContext);
  const calculateTotalPrice = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price;
    }
    return sum.toFixed(2);
  };
  return (
    <div className="basket__background">
      <Header />
      <div className="basket__items__background">
        <div className="basket__items__inner">
          {cart.map((el) => (
            <>
              {" "}
              <div className="basket__item">
                <div className="basket__item__image__block">
                  <img src={el.image} className="basket__item__image" alt="#" />
                </div>
                <div className="basket__content__block">
                  <div>
                    <h3 className="basket__content__title">{el.title}</h3>
                    <p classname="basket__content__text">{el.description}</p>
                  </div>
                  <div className="basket__price__block">
                    <p className="basket__price__text">{el.price}$</p>
                  </div>
                </div>
              </div>
              <hr className="basket__item__breaker" />
            </>
          ))}
          <div className="basket__items__footer">
            <p className="basket__total__price">
              Total:{calculateTotalPrice()}$
            </p>
            <button className="basket__payment__button">Execute payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
