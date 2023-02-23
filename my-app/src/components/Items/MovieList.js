import "./MovieList.css";
import StarIcon from "../../Images/Star.svg";
import unfilledStarIcon from "../../Images/unfilledStar.svg";
import { ModalContext } from "../../providers/ModalProvider";
import { useContext, useEffect } from "react";
import { getAllMovies, getAllMusic } from "../../store/moviesStore/thunk";
import { useDispatch, useSelector } from "react-redux";

const MovieList = () => {
  const { cartRefresher, cart, data } = useContext(ModalContext);
  const { musics } = useSelector((state) => state.musics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies);
    dispatch(getAllMusic());
  }, []);
  console.log(musics);
  return (
    <div className="movie__list">
      {data.map((el) => {
        const unfilledStars = Array(5).fill(
          <img className="movie__rating__image" src={unfilledStarIcon} />
        );
        unfilledStars.fill(
          <img className="movie__rating__image" src={StarIcon} />,
          0,
          Math.floor(el.rating)
        );
        return (
          <div className="movie__item">
            <img className="movie__image" src={el.image} />
            <div className="movie__info__block">
              <h3 className="movie__info__title">{el.title}</h3>
              <p className="movie__info__content">{el.description}</p>
              <div className="movie__rating__block">
                <button
                  className="movie__show__btn"
                  onClick={() =>
                    cartRefresher(Array.from(new Set([...cart, el])))
                  }>
                  Посмотреть
                </button>
                <div className="movie__ratings">
                  {unfilledStars.map((el) => el)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MovieList;
