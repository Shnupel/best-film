import type { NextPage } from 'next'
import MainLayout from "components/MainLayout";
import IndexPage from "@/pages/IndexPage";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <IndexPage />
    </MainLayout>
  )
}

export default Home;
