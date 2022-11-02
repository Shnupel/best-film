import React from "react";
import Image from "next/image";
import { GeneralResultType } from "@/types/SearchTypes/Result.type";
import { ErrorBoundary } from "components/ErrorBoundary";
import styles from "./styles.module.scss";
import Link from "next/link";

interface IProps {
  data: GeneralResultType
}

const CartComponent: React.FC<IProps> = ({ data }) => {
  return (
    <ErrorBoundary>
      <div className={ styles.item }>
        <Link href={ `movie/${ data.id }` }><a><Image src={ data.image } layout="fixed" width={ 245 } height={ 381 } /></a></Link>
        <div className={ styles.title }> { data.title } </div>
        <div className={ styles.subtitle }>2020, Драма, США</div>
      </div>
    </ErrorBoundary>
  )
}

export default CartComponent;
