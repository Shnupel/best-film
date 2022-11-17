import { NextPage } from "next";
import MainLayout from "components/MainLayout";
import CategoryPage from "@/pages/SelectedPage";

const SelectedFilmPage: NextPage = () => {
  return (
    <MainLayout>
      <CategoryPage />
    </MainLayout>
  )
}

export default SelectedFilmPage;
