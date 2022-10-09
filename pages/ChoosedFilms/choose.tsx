import { NextPage } from "next";
import ChooseCategoryPage from "@/pages/CategoryPage/ChooseCategory";
import MainLayout from "components/MainLayout";

const ChoosePage: NextPage = () => {
  return (
    <MainLayout>
      <ChooseCategoryPage />
    </MainLayout>
  )
}

export default ChoosePage;
