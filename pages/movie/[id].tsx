import { NextPage } from "next";
import MainLayout from "components/MainLayout";
import MoviePageComponent from "@/pages/MoviePage";

const MoviePage: NextPage = () => {
  return (
    <MainLayout>
      <MoviePageComponent />
    </MainLayout>
  )
}

export default MoviePage;
