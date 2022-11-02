import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import styles from "./styles.module.scss";
import "swiper/css";

interface carouselPreset {
  spaceBetween: number,
  slidesPerView: number
}

interface IProps {
  children: ReactNode,
  preset: "small" | "normal" | "big" | "custom",
  custom?: carouselPreset
}

const carouselPresets = {
  small: {
    spaceBetween: 50,
    slidesPerView: 4
  },
  normal: {
    spaceBetween: 20,
    slidesPerView: 2
  },
  big: {
    spaceBetween: 10,
    slidesPerView: 1
  }
}
// todo: fix this problem and create normal function
const CarouselComponent: React.FC<IProps> = ({ children, preset, custom }) => {
  return (
    <Swiper
      spaceBetween={ preset === "custom" ? custom?.spaceBetween : carouselPresets[preset].spaceBetween }
      slidesPerView={ preset === "custom" ? custom?.slidesPerView : carouselPresets[preset].slidesPerView }
      className={ styles.slider }
    >
      { children }
    </Swiper>
  )
}

export default CarouselComponent;
