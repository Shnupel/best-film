import React from "react";
import Image from "next/image";
import logoImage from "src/public/images/svg/Logo.svg";
import styles from "./styles.module.scss";
import ClassNames from "@/libs/ClassNames";

const HeaderComponent: React.FC = () => {
  return (
    <header className={ ClassNames(styles.header, "container") }>
      <Image src={ logoImage } className={ styles.image } />
      <nav></nav>
      <input type="text" placeholder="Поиск по сайту" className={ styles.input } />
    </header>
  )
}

export default HeaderComponent;
