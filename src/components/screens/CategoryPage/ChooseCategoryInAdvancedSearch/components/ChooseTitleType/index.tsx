import React from "react";
import { useAppDispatch } from "@/store/store";
import { changeTypeTitle } from "@/store/slices/AdvancedSearch";
import { TypeTitleOptions } from "@/services/AdvancedSearch/TypeTitleOptions";
import styles from "./styles.module.scss";

const TitleTypeComponent: React.FC = () => {
  const TypeTitleKeys= Object.keys(TypeTitleOptions);
  const dispatch = useAppDispatch();
  const changeTitles = (value: string) => {
    dispatch(changeTypeTitle(value));
  }
  return (
    <form className={ styles.form }>
      <span className="subtitle">Choose title type</span>
      {
        //@ts-ignore
        TypeTitleKeys.map((value: string) => <label className={ styles.label } onChange={ () => changeTitles(value) } key={ value }> <input type="checkbox"/> <span className={ styles.span }> { TypeTitleOptions[value] } </span> </label>)
      }
    </form>
  )
}

export default TitleTypeComponent;
