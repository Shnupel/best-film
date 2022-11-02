import { NextPage } from "next";
import ClassNames from "@/libs/ClassNames";
import MainLayout from "components/MainLayout";
import ErrorComponent from "@/components/ErrorComponent";
import styles from "./styles.module.scss";

const ErrorPage: NextPage = () => {
  return (
    <MainLayout>
      <main className={ ClassNames(styles.main, "container") }>
        <ErrorComponent />
      </main>
    </MainLayout>
  )
}

export default ErrorPage;
