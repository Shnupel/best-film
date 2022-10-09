import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import ClassNames from "@/libs/ClassNames";
import HeaderComponent from "@/components/BodyHeader";
import AboutFilmComponent from "@/components/AboutFilm";
import { useSearchFilmByIdQuery } from "@/services/api.service";
import { SearchFilmWithFullInfoType } from "@/types/SearchTypes/SearchFilmWithFullInfo.type";

interface IProps {
  data: SearchFilmWithFullInfoType,
}

const MoviePageComponent: React.FC<IProps> = ({ data }) => {
  useEffect(() => console.log(data));

  return (
    <main className={ ClassNames(styles.body, "container") }>
      <HeaderComponent> this film </HeaderComponent>
      <div className={ styles.about }>
        <AboutFilmComponent />
      </div>
    </main>
  )
};

export default MoviePageComponent;
