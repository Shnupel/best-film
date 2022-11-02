import React from "react";
import Image from "next/image";
import logoImage from "src/public/images/svg/Logo.svg";
import styles from "./styles.module.scss";
import ClassNames from "@/libs/ClassNames";

const FooterComponent: React.FC = () => {
  return (
    <footer className={ styles.footer }>
      <div className="container">
        <div className={ styles.footer_inner }>
          <Image src={ logoImage } className={ styles.logo } />
          <div className={ styles.categories }>
            <div className={ styles.title }>Меню</div>
            <div className={ styles.category }>Подборки</div>
            <div className={ styles.category }>По жанру</div>
            <div className={ styles.category }>Фильмы</div>
            <div className={ ClassNames(styles.category, "active") }>Сериалы</div>
            <div className={ styles.category }>Мультфильмы</div>
            <div className={ styles.category }>Аниме</div>
            <div className={ styles.category }>Актеры</div>
          </div>
          <div className={ styles.about }>
            <div className={ styles.title }>О нас</div>
            <div className={ styles.items }>Зная всё о кино, хочется поделиться этим с другими. Делитесь фильмами, трейлерами, персонами и новостями в социальных сетях, присваивайте рейтинги фильмам и обсуждайте их с друзьями и подписчиками!<br/>Интересные фильмы, ближайшие кинотеатры и любимых актеров можно добавлять в «Избранное». Система покажет все связанные с ними новости и новые трейлеры, подскажет, когда можно купить билет в кино на интересующую премьеру. Присоединяйтесь!</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent;
