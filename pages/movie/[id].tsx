import { NextPage } from "next";
import MainLayout from "components/MainLayout";
import MoviePageComponent from "@/pages/MoviePage";
import { SearchFilmWithFullInfoType } from "@/types/SearchTypes/SearchFilmWithFullInfo.type";
import { fetch } from "next/dist/compiled/@edge-runtime/primitives/fetch";

interface IProps {
  data: SearchFilmWithFullInfoType,
}

const MoviePage: NextPage<IProps> = ({ data }) => {
  return (
    <MainLayout>
      <MoviePageComponent data={ data } />
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  const res = await fetch(`https://imdb-api.com/en/API/Title/k_it0zi582/${ id }`);
  const data = await res.json()
  return {
    props: { data }
  };
}

export default MoviePage;
