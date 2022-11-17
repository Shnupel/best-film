import React from "react";
import { AwardsOptions } from "@/services/AdvancedSearch/AwardsOptions";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector, changeAwards } from "@/store/slices/AdvancedSearch";

type myKeyType = keyof typeof AwardsOptions;
const AwardsOptionsKeys: myKeyType[] = Object.keys(AwardsOptions) as myKeyType[];

const ChooseAwardsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const toggleAward = (award: myKeyType) => dispatch(changeAwards(award));

  const { awards: SelectedAwards } = useAppSelector(AdvancedSearchParamsSelector);
  const isSelectedAward = (award: myKeyType) => SelectedAwards.includes(award);
  return (
    <form className={ styles.form }>
      <h3 className="subtitle">Choose award</h3>
      <div className={ styles.awards }>
        {
          AwardsOptionsKeys.map(value => {
            return (
              <label className={ styles.label } key={ value }>
                <input onInput={ () => toggleAward(value) } defaultChecked={ isSelectedAward(value) } type="checkbox"/>
                <span> { AwardsOptions[value] } </span>
              </label>
            )
          })
        }
      </div>
    </form>
  )
}

export default ChooseAwardsComponent;
