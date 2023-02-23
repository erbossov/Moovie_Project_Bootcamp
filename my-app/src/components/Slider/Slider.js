import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Slider.css";
import { ModalContext } from "../../providers/ModalProvider";

const Slider = () => {
  const { data } = useContext(ModalContext);
  return (
    <div className="slider_block">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        className="mySwiper"
        pagination={{ clickable: true }} // scrollbar={{draggable: true}}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {data.map((el) => {
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
