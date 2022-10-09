import { NextPage } from "next";
import MainLayout from "components/MainLayout";
import CategoryPage from "@/pages/CategoryPage";

const ChoosedFilmsPage: NextPage = () => {
  return (
    <MainLayout>
      <CategoryPage />
    </MainLayout>
  )
}

export default ChoosedFilmsPage;
