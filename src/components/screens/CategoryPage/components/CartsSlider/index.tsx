import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import CartComponent from "@/components/Cart";
import { AdvancedSearchResultSelector, AdvancedSearchThunk } from "@/store/slices/AdvancedSearchResult";
import { AdvancedSearchSelector } from "@/store/slices/AdvancedSearchCategories";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Link from "next/link";

interface IProps {
  children?: React.ReactNode,
  viewType: "best" | "new"
}

const CartsSliderComponent: React.FC<IProps> = ({ children, viewType }) => {
  const dispatch = useAppDispatch();
  const { ResultRef: Ref } = useAppSelector(AdvancedSearchSelector);
  const data = useAppSelector(AdvancedSearchResultSelector);
  if(Ref !== ""){
    useEffect(() => {
      dispatch(AdvancedSearchThunk({ Ref, viewType }));
    }, []);
  }
  useEffect(() => console.log(data), [data]);

  return (
    <>
      <section className={ styles.carts }>
        { children && <div className={ styles.title }>{ children }</div> }
        <div className={ styles.cartCarousel }>
          <Link href={"/ChoosedFilms/choose"}><a>link</a></Link>
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
