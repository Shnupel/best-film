import { NextPage } from "next";
import ChooseCategoryPage from "@/pages/CategoryPage/ChooseCategory";
import MainLayout from "components/MainLayout";
import Link from "next/link";

const ChoosePage: NextPage = () => {
  return (
    <MainLayout>
      <Link href={"/ChoosedFilms"}><a>link</a></Link>
      <ChooseCategoryPage />
    </MainLayout>
  )
}

export default ChoosePage;
