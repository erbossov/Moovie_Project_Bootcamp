import "../pages/Basket.css";
import Header from "../components/Header/Header";
import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import SuccessIcon from "../Images/succesicon.svg";
import SuccessIconX from "../Images/succesiconx.svg";
import krestik from "../Images/krestik.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart, deleteItem } from "../store/cartsStore/reducer";
import { updateCart } from "../store/cartsStore/reducer";
const Basket = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [showModalWindow, setShowModalWindow] = useState(false);
  const calculateTotalPrice = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price;
    }
    return sum.toFixed(2);
  };
  const dispatchNewMovie = () => {
    dispatch(
      deleteItem({
        title: "Furious 7",
        description:
          "Они покорили Токио и Рио, Лос-Анджелес и Лондон. Но мир больше не играет по их правилам. Зной арабских пустынь, неприлично высокие небоскребы, миллионы долларов на колесах и очень, очень знаменитый злодей. Скорость не знает границ.",
      })
    );
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
            <button
              className="basket__payment__button"
              onClick={dispatchNewMovie}>
              Execute payment
            </button>
          </div>
        </div>
      </div>
      {showModalWindow ? (
        <div
          className="modal__window"
          onClick={() => {
            setShowModalWindow(false);
          }}>
          <div className="modal__window__background">
            <img src={krestik} className="modal__window__krestik" />
            <img src={SuccessIcon} className="modal__window__logo" />
            <div className="modal__window__text">Покупка успешно пройдена!</div>
          </div>
          <div className="modal__window__backgroundX">
            <img src={SuccessIconX} className="modal__window__logoX" />
            <div className="modal__window__textX">Произошла ошибка...</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Basket;

