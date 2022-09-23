import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import carouselItemIng from "public/images/img/Rectangle_8.png";

const CartComponent: React.FC = () => {
  return (
    <div className={ styles.item }>
      <Image src={ carouselItemIng } />
      <div className={ styles.title }>Механик</div>
      <div className={ styles.subtitle }>2020, Драма, США</div>
    </div>
  )
}

export default CartComponent;
