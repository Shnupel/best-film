import React from "react";
import { AdvancedSearchParamsSelector, changeAgeRating } from "@/store/slices/AdvancedSearch";
import { AgeRatingOptions } from "@/services/AdvancedSearch/AgeRatingOptions";
import { useAppDispatch, useAppSelector } from "@/store/store";
import styles from "./styles.module.scss";

type myKeyType = keyof (typeof AgeRatingOptions);
const AgeRatingOptionsKeys: myKeyType[] = Object.keys(AgeRatingOptions) as myKeyType[];

const ChooseRatingComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const toggleOption = (option: myKeyType) => dispatch(changeAgeRating(option));

  const { ageRatings: SelectedAgeRatings } = useAppSelector(AdvancedSearchParamsSelector);
  const isSelectedRating = (RatingOption: myKeyType) => SelectedAgeRatings.includes(RatingOption);
  return (
    <form className={ styles.form }>
      <h3 className="subtitle">Choose age ratings categories</h3>
      <div className={ styles.rating }>
        {
          AgeRatingOptionsKeys.map(value => {
            return (
              <label key={ value }>
                <input defaultChecked={ isSelectedRating(value) } onInput={ () => toggleOption(value) } type="checkbox" />
                <span> { AgeRatingOptions[value] } </span>
              </label>
            )
          })
        }
      </div>
    </form>
  )
}

export default ChooseRatingComponent;
