import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import rightMenuCart from "public/images/img/Rectangle_7.png";
import carouselImg from "public/images/img/Rectangle_6.png";

const RightSidebarComponent: React.FC = () => {
  return (
    <section className={ styles.rightMenu }>
      <div className={ styles.carts }>
        <div className={ styles.title }> Похожие коллекции </div>
        <div className={ styles.cart }>
          <Image src={ rightMenuCart } className={ styles.image } alt=""/>
          <div className={ styles.content }>
            <div className={ styles.time }>2 недели назад</div>
            <div className={ styles.text }>Задача организации, в особенности же новая формировании.</div>
          </div>
        </div>
        <div className={ styles.cart }>
          <Image src={ rightMenuCart } className={ styles.image } alt=""/>
          <div className={ styles.content }>
            <div className={ styles.time }>2 недели назад</div>
            <div className={ styles.text }>Задача организации, в особенности же новая формировании.</div>
          </div>
        </div>
        <div className={ styles.cart }>
          <Image src={ rightMenuCart } className={ styles.image } alt=""/>
          <div className={ styles.content }>
            <div className={ styles.time }>2 недели назад</div>
            <div className={ styles.text }>Задача организации, в особенности же новая формировании.</div>
          </div>
        </div>
        <div className={ styles.cart }>
          <Image src={ rightMenuCart } className={ styles.image } alt=""/>
          <div className={ styles.content }>
            <div className={ styles.time }>2 недели назад</div>
            <div className={ styles.text }>Задача организации, в особенности же новая формировании.</div>
          </div>
        </div>
        <div className={ styles.cart }>
          <Image src={ rightMenuCart } className={ styles.image } alt=""/>
          <div className={ styles.content }>
            <div className={ styles.time }>2 недели назад</div>
            <div className={ styles.text }>Задача организации, в особенности же новая формировании.</div>
          </div>
        </div>
      </div>
      <div className={ styles.carousel }>
        <div className={ styles.title }>популярные коллекции</div>
        <div className="carousel-item">
          <Image src={ carouselImg } className={ styles.img } />
        </div>
      </div>
    </section>
  )
}

export default RightSidebarComponent;
