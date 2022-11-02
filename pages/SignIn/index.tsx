import { NextPage } from "next";
import MainLayout from "components/MainLayout";
import SignInComponent from "@/pages/SignIn";

const SignInPage: NextPage = () => {
  return (
    <MainLayout>
      <SignInComponent />
    </MainLayout>
  )
}

export default SignInPage;
