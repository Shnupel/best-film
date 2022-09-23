import React from "react";
import styles from "./styles.module.scss";

const HeaderComponent: React.FC = () => {
  return (
    <section className={ styles.header }>
      <div className={ styles.title }>Главная / Подборки / <span>Лучшие фильмы всех времен</span></div>
      <div className={ styles.slider }>
        <div className={ styles.text_slider }>Лучшие фильмы всех времен</div>
      </div>
    </section>
  )
}

export default HeaderComponent;
