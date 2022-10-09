import React from "react";
import ClassNames from "@/libs/ClassNames";
import styles from "./styles.module.scss";
import RightSidebarComponent from "@/components/RightSidebar";
import HeaderComponent from "@/components/BodyHeader";
import AboutFilmComponent from "@/components/AboutFilm";
import CartsSliderComponent from "./components/CartsSlider";

const CategoryPage: React.FC = () => {
  return (
    <main className={ ClassNames(styles.body, "container") }>
      <div className={ styles.center }>
        <HeaderComponent> this category </HeaderComponent>
        <div className={ styles.text }>Мы собрали для Вас подборку лучших фильмов по теме "название подборки" с рейтингом от "минимальный рейтинг фильмов из подборки" и до "максимальный рейтинг фильмов из подборки". В неё вошли фильмы следующих жанров: "жанр1"("число раз"), "жанр2"(число раз), "жанр3"("число раз"). Самый новый фильм - "год" года, самый старый фильм - "год" года. Продолжительность фильмов от "минимальная продолжительность" до "максимальная продолжительность". Выбирайте фильм и приятного просмотра!</div>
        <div>
          <CartsSliderComponent>
            <div className={ styles.title }>Лучшие фильмы подборки</div>
          </CartsSliderComponent>
          <CartsSliderComponent>
            <div className={ styles.title }>Новые фильмы подборки</div>
          </CartsSliderComponent>
        </div>
        <div className={ styles.about }>
          <AboutFilmComponent />
          <AboutFilmComponent />
        </div>
      </div>
      <RightSidebarComponent />
    </main>
  )
}

export default CategoryPage;
