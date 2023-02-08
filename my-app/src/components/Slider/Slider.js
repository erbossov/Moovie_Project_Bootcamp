import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { getDataFromBackend } from "../../utils/config";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Slider.css";

const Slider = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getDataFromBackend().then((res) => {
      setItems(res);
    });
  }, []);
  return (
    <div className="slider_block">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        className="mySwiper"
        pagination={{ clickable: true }} // scrollbar={{draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {items.map((el) => {
          return (
            <SwiperSlide>
              <div className="movieBg">
                <img className="movieImg" src={el.image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Slider;
