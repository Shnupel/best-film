import React from "react";
import Image from "next/image";
import logoImage from "src/public/images/svg/Logo.svg";
import styles from "./styles.module.scss";
import ClassNames from "@/libs/ClassNames";
import Link from "next/link";
import HeaderCategoryLinkComponent from "./Link";
import classNames from "@/libs/ClassNames";

const routes = [
  {
    name: "Главная",
    path: "/"
  },
  {
    name: "Подборки",
    path: "/ChoosedFilms"
  },
  {
    name: "Категории",
    path: "/ChoosedFilms/choose"
  }
];

const HeaderComponent: React.FC = () => {
  return (
    <header className={ styles.header }>
      <div className={ ClassNames(styles.header_inner, "container") }>
        <Image src={ logoImage } className={ styles.image } />
        <nav className={ styles.nav }>
          {
            routes.map(({ name, path }) => <HeaderCategoryLinkComponent key={ path } path={ path } name={ name } />)
          }
        </nav>
        <input type="text" placeholder="Поиск по сайту" className={ styles.input } />
        <div className={ styles.accountLinks }>
          <Link href={ "/SignIn" }><a className={ classNames(styles.SignIn, styles.accountLink) }>Войти</a></Link>
          <Link href={ "/SignUp" }><a className={ classNames(styles.SignUp, styles.accountLink) }>Зарегестрироваться</a></Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent;
