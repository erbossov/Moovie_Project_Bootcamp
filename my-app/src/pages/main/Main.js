import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import MovieList from "../../components/Items/MovieList";
import Slider from "../../components/Slider/Slider";
import "./Main.css";
function Main(props) {
  return (
    <div className="background">
      <Header />
      <Slider />
      <div className="movie__body">
        <Categories />
        <MovieList />
      </div>
    </div>
  );
}

export default Main;
