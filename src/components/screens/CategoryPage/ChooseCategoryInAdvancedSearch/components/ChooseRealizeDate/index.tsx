import React, { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector, changeRealiseDate } from "@/store/slices/AdvancedSearch";
import styles from "./styles.module.scss";

const inputsValue = {
  from: "",
  to: ""
}
const ChooseRealizeDateComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { realise_date } = useAppSelector(AdvancedSearchParamsSelector);
  const changeFromDate = (event: FormEvent<HTMLInputElement>) => {
    inputsValue.from = (event.target as HTMLInputElement).value;
    dispatch(changeRealiseDate(inputsValue));
  }
  const changeToDate = (event: FormEvent<HTMLInputElement>) => {
    inputsValue.to = (event.target as HTMLInputElement).value;
    dispatch(changeRealiseDate(inputsValue));
  }
  return (
    <form className={ styles.form }>
      <span className="subtitle">Realise date</span>
      <div className={ styles.inputs }>
        <input type="text" placeholder="from" onInput={ changeFromDate } value={ realise_date.from }  className={ styles.input } />
        <input type="text" placeholder="to" onInput={ changeToDate } value={ realise_date.to } className={ styles.input } />
      </div>
    </form>
  )
}

export default ChooseRealizeDateComponent;
