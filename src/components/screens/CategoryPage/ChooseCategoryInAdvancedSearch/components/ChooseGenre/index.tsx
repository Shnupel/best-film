import React from "react";
import styles from "./styles.module.scss";
import { GenresOption } from "@/services/AdvancedSearch/GenresOption";

const ChooseGenreComponent: React.FC = () => {
  const GenresOptionKeys = Object.keys(GenresOption);
  return (
    <form className={ styles.form }>
      <span className="subtitle"> Choose genres </span>
      <div className={ styles.genres }>
        {
          //@ts-ignore
          GenresOptionKeys.map(value => <label key={ value }><input type="checkbox" className={ styles.input } /><span className={ styles.text }>{ GenresOption[value] }</span></label>)
        }
      </div>
    </form>
  )
}

export default ChooseGenreComponent;
