import { NextPage } from "next";
import ClassNames from "@/libs/ClassNames";
import styles from "./styles.module.scss";
import TitleTypeComponent from "./components/ChooseTitleType";
import ChooseRealizeDateComponent from "./components/ChooseRealizeDate";
import ChooseGenreComponent from "./components/ChooseGenre";
import ChooseAwardsComponent from "./components/ChooseAwards";
import ChooseAgeRating from "./components/ChooseAgeRating";
import ChooseKeyWordComponent from "./components/ChooseKeyWord";
import ChooseByTitleComponent from "./components/ChooseByTitle";
import ChooseCompanyComponent from "./components/ChooseCompany";

const ChooseCategoryPage: NextPage = () => {
  return (
    <div className={ ClassNames(styles.page, "container") } >
      <ChooseByTitleComponent />
      <TitleTypeComponent />
      <ChooseRealizeDateComponent />
      <ChooseCompanyComponent />
      <ChooseGenreComponent />
      <ChooseAwardsComponent />
      <ChooseAgeRating />
      <ChooseKeyWordComponent />
    </div>
  )
}

export default ChooseCategoryPage;
