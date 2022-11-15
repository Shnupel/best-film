import React, { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector, changeTitle } from "@/store/slices/AdvancedSearch";

const ChooseByTitleComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const changeInput = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    dispatch(changeTitle(value));
  }
  const { title } = useAppSelector(AdvancedSearchParamsSelector);
  return (
    <input onInput={ (event) => changeInput(event) } defaultValue={ title } type="text"/>
  )
}

export default ChooseByTitleComponent;
