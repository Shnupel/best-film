import React, { useEffect } from "react";
import { useAdvancedSearchQuery } from "@/services/api.service";
import { useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector } from "@/store/slices/AdvancedSearch";
import CartComponent from "@/components/Cart";
import CarouselComponent from "@/components/Carousel";
import { ErrorBoundary } from "components/ErrorBoundary";
import { AdvancedSearchViewSortType } from "@/services/AdvancedSearch/AdvancedSearchParams.type";
import { GeneralResultType } from "@/types/SearchTypes/Result.type";
import styles from "./styles.module.scss";
import { SwiperSlide } from "swiper/react";

interface IProps {
  children?: React.ReactNode,
  viewType: AdvancedSearchViewSortType
}

const CartsSliderComponent: React.FC<IProps> = ({ children, viewType }) => {
  const SearchParams = useAppSelector(AdvancedSearchParamsSelector);
  const { data, error, isLoading } = useAdvancedSearchQuery({ viewType, SearchParams });
  useEffect(() => console.log(data, error, isLoading), [data, error, isLoading]);
  return (
    <ErrorBoundary>
      <section className={ styles.carts }>
        { children && <div className={ styles.title }>{ children }</div> }
        <div className={ styles.cartCarousel }>
          {
            error === undefined && !isLoading && (
              <CarouselComponent preset={ "small" }>
                {
                  data.results.map((value: GeneralResultType) => <SwiperSlide key={ value.id }><CartComponent data={ value } /></SwiperSlide>)
                }
              </CarouselComponent>
            )
          }
        </div>
      </section>
    </ErrorBoundary>
  )
}

export default CartsSliderComponent;
