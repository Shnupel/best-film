import React from "react";
import styles from "../../style.module.scss";
import Image from "next/image";
import rightMenuCart from "public/images/img/Rectangle_7.png";

const CollectionCartComponent: React.FC = () => {
  return <div className={ styles.cart }>
    <Image src={ rightMenuCart } className={ styles.image } alt=""/>
    <div className={ styles.content }>
      <div className={ styles.time }>2 недели назад</div>
      <div className={ styles.text }>Задача организации, в особенности же новая формировании.</div>
    </div>
  </div>
}

export default CollectionCartComponent;
