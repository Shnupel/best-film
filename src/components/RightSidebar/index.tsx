import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import carouselImg from "public/images/img/Rectangle_6.png";
import CollectionCartComponent from "./components/CollectionCart";

const RightSidebarComponent: React.FC = () => {
  return (
    <section className={ styles.rightMenu }>
      <div className={ styles.carts }>
        <div className={ styles.title }> Похожие коллекции </div>
        {
          [...new Array(5)].map((_, i) => <CollectionCartComponent key={ i } />)
        }
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
