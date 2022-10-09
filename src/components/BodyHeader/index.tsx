import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IProps {
  children?: ReactNode
}

const HeaderComponent: React.FC<IProps> = ({ children }) => {
  return (
    <section className={ styles.header }>
      <div className={ styles.title }>Главная / Подборки / <span>Лучшие фильмы всех времен</span></div>
      <div className={ styles.slider }>
        <div className={ styles.text_slider }> { children } </div>
      </div>
    </section>
  )
}

export default HeaderComponent;
