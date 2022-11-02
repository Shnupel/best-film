import React from "react";
import styles from "./styles.module.scss";
import CarouselComponent from "@/components/Carousel";
import { SwiperSlide } from "swiper/react";
import bigImg from "@/images/img/Rectangle_2.png";

//todo create big screen in slide, and include images (in bg) with help jsx classes in component
const MainPageComponent: React.FC = () => {
  return (
    <div>
      <CarouselComponent preset={ "big" }>
        <SwiperSlide>

        </SwiperSlide>
      </CarouselComponent>
    </div>
  )
}

export default MainPageComponent;
