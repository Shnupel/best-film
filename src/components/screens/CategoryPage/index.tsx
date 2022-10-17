import React from "react";
import ClassNames from "@/libs/ClassNames";
import RightSidebarComponent from "@/components/RightSidebar";
import HeaderComponent from "@/components/BodyHeader";
import { useAppSelector } from "@/store/store";
import { AdvancedSearchSelector } from "@/store/slices/AdvancedSearchCategories";
import CartsSliderComponent from "./components/CartsSlider";
import { ErrorBoundary } from "components/ErrorBoundary";
import styles from "./styles.module.scss";

const CategoryPage: React.FC = () => {
  const { ResultRef: Ref } = useAppSelector(AdvancedSearchSelector);

  return (
    <main className={ ClassNames(styles.body, "container") }>
      <div className={ styles.center }>
        <HeaderComponent> this category </HeaderComponent>
        <div className={ styles.text }>Мы собрали для Вас подборку лучших фильмов по теме "название подборки" с рейтингом от "минимальный рейтинг фильмов из подборки" и до "максимальный рейтинг фильмов из подборки". В неё вошли фильмы следующих жанров: "жанр1"("число раз"), "жанр2"(число раз), "жанр3"("число раз"). Самый новый фильм - "год" года, самый старый фильм - "год" года. Продолжительность фильмов от "минимальная продолжительность" до "максимальная продолжительность". Выбирайте фильм и приятного просмотра!</div>
        <div>
          {
            Ref !== "" ? (
              <ErrorBoundary>
                <CartsSliderComponent viewType={ "best" }>
                  <div className={ styles.title }>Лучшие фильмы подборки</div>
                </CartsSliderComponent>
                <CartsSliderComponent viewType={ "new" }>
                  <div className={ styles.title }>Новые фильмы подборки</div>
                </CartsSliderComponent>
              </ErrorBoundary>
            ) : (
              <div className={ styles.addCategoryText }> Вы не добавили ни одной категории. Добавтье категории</div>
            )
          }
        </div>
        <div className={ styles.about }>
        </div>
      </div>
      <RightSidebarComponent />
    </main>
  )
}

export default CategoryPage;
