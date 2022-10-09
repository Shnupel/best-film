import React from "react";
import styles from "./styles.module.scss";
import CartComponent from "@/components/Cart";

interface IProps {
  children?: React.ReactNode
}

const CartsSliderComponent: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <section className={ styles.carts }>
        { children && <div className={ styles.title }>{ children }</div> }
        <div className={ styles.cartCarousel }>
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
        </div>
      </section>
    </>
  )
}

export default CartsSliderComponent;
