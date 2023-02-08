import { useEffect } from "react";
import { useState } from "react";
import { getDataFromBackend } from "../../utils/config";
import "./MovieList.css";
import StarIcon from "../../Images/Star.svg";
import unfilledStarIcon from "../../Images/unfilledStar.svg";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getDataFromBackend().then((res) => {
      setMovies(res);
    });
  }, []);
  return (
    <div className="movie__list">
      {movies.map((el, index) => {
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
                <button className="movie__show__btn">Посмотреть</button>
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
