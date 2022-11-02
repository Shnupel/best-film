import { NextPage } from "next";
import UserPageComponent from "@/pages/UserPage";
import MainLayout from "components/MainLayout";

const UserHomePage: NextPage = () => {
  return (
    <MainLayout>
      <UserPageComponent />
    </MainLayout>
  )
}

export default UserHomePage;
