import React from "react";
import { AgeRatingOptions } from "@/services/AdvancedSearch/AgeRatingOptions";
import styles from "./styles.module.scss";

const ChooseRatingComponent: React.FC = () => {
  const AgeRatingOptionsKeys = Object.keys(AgeRatingOptions);
  return (
    <form className={ styles.form }>
      <h3 className="subtitle">Choose age ratings categories</h3>
      <div className={ styles.rating }>
        {
          //@ts-ignore
          AgeRatingOptionsKeys.map(value => <label key={ value }><input type="checkbox"/><span>{ AgeRatingOptions[value] }</span></label>)
        }
      </div>
    </form>
  )
}

export default ChooseRatingComponent;
