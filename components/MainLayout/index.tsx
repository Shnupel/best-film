import React, { ReactNode } from "react";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import ClassNames from "@/libs/ClassNames";
import styles from "./styles.module.scss";
import bigImg from "@/images/img/Rectangle_2.png";

interface IProps{
  children: ReactNode
}

const JSXStyles = {
  wrapper: {
    backgroundImage: bigImg
  }
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={ ClassNames("wrapper", styles.wrapper) }>
      <HeaderComponent />
        <main className={ ClassNames(styles.content, "container") }> { children } </main>
      <FooterComponent />
    </div>
  )
}

export default MainLayout;
