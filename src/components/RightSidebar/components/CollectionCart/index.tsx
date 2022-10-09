import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { SearchFilmWithFullInfoType } from "@/types/SearchTypes/SearchFilmWithFullInfo.type";

interface IProps {
  data: SearchFilmWithFullInfoType
}

const CollectionCartComponent: React.FC<IProps> = ({ data }) => {
  return <div className={ styles.cart }>
    <Image src={ data.image } className={ styles.image } layout="fixed" sizes="(width: 92px), (height: 98px)" width={ 92 } height={ 98 } alt=""/>
    <div className={ styles.content }>
      <div className={ styles.time }>2 недели назад</div>
      <div className={ styles.text }> { data.title } </div>
    </div>
  </div>
}

export default CollectionCartComponent;
