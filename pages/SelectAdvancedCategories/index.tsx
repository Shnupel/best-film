import { NextPage } from "next";
import MainLayout from "components/MainLayout";
import ChooseCategoryPage from "@/pages/SelectAdvancedCategoriesPage";

const SelectCategoriesPage: NextPage = () => {
  return (
    <MainLayout>
      <ChooseCategoryPage />
    </MainLayout>
  )
}

export default SelectCategoriesPage;
