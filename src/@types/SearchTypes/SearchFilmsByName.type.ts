export type SearchFilm = {
  id: string,
  title: string,
  resultType: string,
  image: string,
  description: string
}

export type SearchFilmsByNameType = {
  searchType: string,
  expression: string,
  results: SearchFilm[],
  errorMessage: string
}
