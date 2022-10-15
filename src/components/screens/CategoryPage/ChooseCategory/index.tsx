import { NextPage } from "next";
import { useAppDispatch } from "@/store/store";
import { changeTypeTitle } from "@/store/slices/AdvancedSearchCategories";
import { TypeTitle } from "@/services/AdvancedSearch/TypeTitle";
import ClassNames from "@/libs/ClassNames";
import styles from "./styles.module.scss";

const ChooseCategoryPage: NextPage = () => {
  const TypeTitleKeys= Object.keys(TypeTitle);
  const dispatch = useAppDispatch();
  const changeTitles = (value: string) => {
    dispatch(changeTypeTitle(value));
  }
  return (
    <div className={ ClassNames(styles.page, "container") } >
      <form className={ styles.form }>
        {
          //@ts-ignore
          TypeTitleKeys.map((value: string) => <label className={ styles.label } onChange={ () => changeTitles(value) } key={ value }> <input type="checkbox"/> <span className={ styles.span }> { TypeTitle[value] } </span> </label>)
        }
      </form>
    </div>
  )
}

export default ChooseCategoryPage;
