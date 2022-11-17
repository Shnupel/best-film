import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector, changeTypeTitle } from "@/store/slices/AdvancedSearch";
import { TypeTitleOptions } from "@/services/AdvancedSearch/TypeTitleOptions";
import styles from "./styles.module.scss";

type myKeyType = keyof typeof TypeTitleOptions;
const TypeTitleKeys: myKeyType[] = Object.keys(TypeTitleOptions) as myKeyType[];

const TitleTypeComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const changeTitles = (value: string) => {
    dispatch(changeTypeTitle(value));
  }

  const { title_type: SelectedTitleTypes } = useAppSelector(AdvancedSearchParamsSelector);
  const isSelectedTitleType = (title_type: myKeyType) => SelectedTitleTypes.includes(title_type);
  return (
    <form className={ styles.form }>
      <span className="subtitle">Choose title type</span>
      {
        TypeTitleKeys.map((value: myKeyType) => {
          return (
            <label className={ styles.label } key={ value }>
              <input defaultChecked={ isSelectedTitleType(value) } onInput={ () => changeTitles(value) } type="checkbox"/>
              <span className={ styles.span }> { TypeTitleOptions[value] } </span>
            </label>
          )
        })
      }
    </form>
  )
}

export default TitleTypeComponent;
