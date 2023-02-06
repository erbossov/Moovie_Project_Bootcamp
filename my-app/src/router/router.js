import { Route, Routes, Navigate } from "react-router";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
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
        <Route path={"/movie"} element={<App />} />
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
