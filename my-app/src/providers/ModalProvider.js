import { createContext, useState, useEffect } from "react";
import { getDataFromBackend } from "../utils/config";

const ModalProvider = ({ children }) => {
  // children
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getDataFromBackend().then((res) => {
      setData(res);
    });
  }, []);
  const obj = {
    cartRefresher: setCart,
    cart,
    data,
  };
  return <ModalContext.Provider value={obj}>{children}</ModalContext.Provider>;
};

export const ModalContext = createContext();
export default ModalProvider;
