import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import CartComponent from "@/components/Cart";
import { useAdvancedSearchQuery } from "@/services/api.service";
import { useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector } from "@/store/slices/AdvancedSearch";

interface IProps {
  children?: React.ReactNode,
  viewType: "best" | "new"
}

const CartsSliderComponent: React.FC<IProps> = ({ children, viewType }) => {
  const SearchParams = useAppSelector(AdvancedSearchParamsSelector);
  const { data, error, isLoading } = useAdvancedSearchQuery({ viewType, SearchParams   });
  useEffect(() => console.log(data, error, isLoading), [data, error, isLoading]);
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
