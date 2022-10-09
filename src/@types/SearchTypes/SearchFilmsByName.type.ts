import { GeneralResultType } from "./Result.type";

export type SearchFilm = GeneralResultType;

export type SearchInAllCategoriesResultTypes = {
  searchType: string,
  expression: string,
  results: SearchFilm[],
  errorMessage: string
}

export type SearchFilmByNameResultTypes = {
  searchType: string,
  expression: string,
  results: SearchFilm[],
  errorMessage: string
}
