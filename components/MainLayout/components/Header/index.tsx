import React from "react";
import Image from "next/image";
import logoImage from "src/public/images/svg/Logo.svg";
import styles from "./styles.module.scss";
import ClassNames from "@/libs/ClassNames";
import Link from "next/link";

const HeaderComponent: React.FC = () => {
  return (
    <header className={ ClassNames(styles.header, "container") }>
      <Image src={ logoImage } className={ styles.image } />
      <nav className={ styles.nav }>
        <Link className={ styles.link } href="/"><a className={ styles.href }>Главная</a></Link>
        <Link className={ styles.link } href="/"><a className={ styles.href }>Подборки</a></Link>
        <Link className={ styles.link } href="/"><a className={ styles.href }>По жанру</a></Link>
        <Link className={ styles.link } href="/"><a className={ styles.href }>Фильмы</a></Link>
        <Link className={ styles.link } href="/"><a className={ styles.href }>Сериалы</a></Link>
        <Link className={ styles.link } href="/"><a className={ styles.href }>Мультфильмы</a></Link>
        <Link className={ styles.link } href="/"><a className={ styles.href }>Аниме</a></Link>
        <Link className={ styles.link } href="/"><a className={ styles.href }>Актеры</a></Link>
      </nav>
      <input type="text" placeholder="Поиск по сайту" className={ styles.input } />
    </header>
  )
}

export default HeaderComponent;
