import React, { useEffect } from "react";
import Image from "next/image";
import carouselImg from "@/images/img/Rectangle_6.png";
import styles from "./styles.module.scss";
import CollectionCartComponent from "./components/CollectionCart";
import { useGetSerialsQuery } from "@/services/api.service";
import { ErrorBoundary } from "components/ErrorBoundary";

const RightSidebarComponent: React.FC = () => {
  const { data, error, isLoading } = useGetSerialsQuery('');
  const firstFiveCarts = data?.results.slice(0, 5);
  const isNormal = error === undefined && isLoading === false && data;

  return (
    <ErrorBoundary>
      <section className={ styles.rightMenu }>
        <div className={ styles.carts }>
          <div className={ styles.title }> Похожие сериалы </div>
          {
            isNormal ? firstFiveCarts?.map(data => <CollectionCartComponent data={ data } key={ data.id } />) :
              error ? <h3> sorry, we can`t loading collections </h3> :
              <h3> loading collections </h3>
          }
        </div>
        <div className={ styles.carousel }>
          <div className={ styles.title }>популярные коллекции</div>
          <div className="carousel-item">
            <Image src={ carouselImg } className={ styles.img } />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}

export default RightSidebarComponent;
