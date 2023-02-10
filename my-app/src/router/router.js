import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Basket from "../pages/Basket";
import Main from "../pages/main/Main";
{
  /* BrowserRouter -> компонент (сервис) который взаимодействует с
        React-маршрутизацией и реальным DOM. // Routes -> компонент который
        собирает все Route компоненты // Route -> компонент, в котором
        передается путь и соответствующий компонент
        Router -> react-router
        BrowserRouter -> react-router-dom */
}
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Navigate to={"/movie"} />} />
        <Route path={"/movie"} element={<Main />} />
        <Route path={"/basket"} element={<Basket />} />
        <Route path={"/Header"} element={<Header />} />
        <Route path={"/categories"} element={<Categories />} />
        <Route
          path="*"
          element={
            <div>
              <p1>Error, Page not found.</p1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
