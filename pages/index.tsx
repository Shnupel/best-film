import type { NextPage } from 'next'
import MainPageComponent from "@/pages/MainPage";
import MainLayout from "components/MainLayout";

const MainPage: NextPage = () => {
  return (
    <MainLayout>
      <MainPageComponent />
    </MainLayout>
  )
}

export default MainPage;
