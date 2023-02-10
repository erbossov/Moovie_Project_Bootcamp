import "./Header.css";
import logo from "../../Images/movie_logo.svg";
import Basket from "../../Images/Korzina.svg";
import ProfileIcon from "../../Images/profile.svg";
import { useEffect, useState } from "react";
import { getDataFromBackend } from "../../utils/config";
import { useNavigate } from "react-router";
function Header() {
  const [searchText, setSearchText] = useState();
  const [data, setData] = useState([]);
  const [setSelectedFilm] = useState();

  const router = useNavigate();

  useEffect(() => {
    if (searchText) {
      getDataFromBackend(searchText).then((res) => {
        if (res.Response === "True") {
          setData(res.Search);
        }
      });
    }
  }, [searchText]);
  return (
    <div className="header__block">
      <div className="header__logo__block">
        <img
          alt=""
          src={logo}
          className="header__logo__icon"
          onClick={() => router("/movie")}
        />
      </div>
      <div className="header__searchIcons__block">
        <div className="header__search">
          <input
            onChange={(text) => setSearchText(text.target.value)}
            placeholder="Search by Movie name"
            className="header__search__input"
          />
          <div className="header__search__dropdown">
            {data.length ? (
              data.slice(0, 6).map((el) => {
                return (
                  <p
                    className="search__options"
                    onClick={() => {
                      setSelectedFilm(el);
                      setData([]);
                      setSearchText("");
                    }}>
                    {el.Title}
                  </p>
                );
              })
            ) : (
              <p className="search__options">No results</p>
            )}
          </div>
        </div>
        <div className="header__basketProfile__block">
          <div className="header__icons">
            <img
              src={Basket}
              alt=""
              className="header__basket__logo"
              onClick={() => router("/basket")}
            />
          </div>
          <div className="header__icons">
            <img src={ProfileIcon} alt="" className="header__profile__logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
