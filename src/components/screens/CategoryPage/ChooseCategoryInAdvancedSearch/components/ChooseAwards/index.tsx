import React from "react";
import { AwardsOptions } from "@/services/AdvancedSearch/AwardsOptions";
import styles from "./styles.module.scss";

const ChooseAwardsComponent: React.FC = () => {
  const AwardsOptionsKeys = Object.keys(AwardsOptions);
  return (
    <form className={ styles.form }>
      <h3 className="subtitle">Choose award</h3>
      <div className={ styles.awards }>
        {
          //@ts-ignore
          AwardsOptionsKeys.map(value => <label className={ styles.label } key={ value }><input type="checkbox"/><span >{ AwardsOptions[value] }</span></label>)
        }
      </div>
    </form>
  )
}

export default ChooseAwardsComponent;
