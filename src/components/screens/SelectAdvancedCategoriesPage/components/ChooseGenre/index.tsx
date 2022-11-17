import React from "react";
import styles from "./styles.module.scss";
import { GenresOption } from "@/services/AdvancedSearch/GenresOption";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector, changeGenres } from "@/store/slices/AdvancedSearch";

type myKeyOption = keyof typeof GenresOption;
const GenresOptionKeys = Object.keys(GenresOption) as myKeyOption[];

const ChooseGenreComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const toggleGenres = (genre: myKeyOption) => dispatch(changeGenres(genre));

  const { genres: SelectedGenres } = useAppSelector(AdvancedSearchParamsSelector);
  const isSelectedGenre = (genre: myKeyOption) => SelectedGenres.includes(genre);
  return (
    <form className={ styles.form }>
      <span className="subtitle"> Choose genres </span>
      <div className={ styles.genres }>
        {
          GenresOptionKeys.map(value => {
            return (
              <label onChange={ () => toggleGenres(value) } key={ value }>
                <input defaultChecked={ isSelectedGenre(value) } type="checkbox" className={ styles.input } />
                <span className={ styles.text }> { GenresOption[value] } </span>
              </label>
            )
          })
        }
      </div>
    </form>
  )
}

export default ChooseGenreComponent;
