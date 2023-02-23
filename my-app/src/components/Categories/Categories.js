import "./Categories.css";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { useSelector } from "react-redux";
const Categories = () => {
  const { musics } = useSelector((state) => state.musics);
  const { movies } = useSelector((state) => state.movies);
  // console.log(musics, movies);
  const { data } = useContext(ModalContext);
  return (
    <div className="category__block">
      {data.map((el) => (
        <div className="category__item">
          <p className="category__item__text">{el.category}</p>
        </div>
      ))}
    </div>
  );
};
export default Categories;
