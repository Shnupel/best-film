import { NextPage } from "next";
import MainLayout from "components/MainLayout";
import SignUpComponent from "@/pages/SignUp";

const SignUpPage: NextPage = () => {
  return (
    <MainLayout>
      <SignUpComponent />
    </MainLayout>
  )
}

export default SignUpPage;
