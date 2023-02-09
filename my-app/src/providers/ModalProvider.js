import { createContext, useState, useEffect } from "react";
import { getDataFromBackend } from "../utils/config";

const ModalProvider = ({ children }) => {
  // children
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromBackend().then((res) => {
      setData(res);
    });
  }, []);
  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export const ModalContext = createContext();
export default ModalProvider;
