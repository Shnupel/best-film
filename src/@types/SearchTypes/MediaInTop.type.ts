export type SearchFilmsType = {
  id: string,
  rank: string,
  rankUpDown: string,
  title: string,
  fullTitle: string,
  year: string,
  image: string,
  crew: string,
  imDbRating: string,
  imDbRatingCount: string
}

export type GetBestOffAllTimeMoviesType = {
  items: SearchFilmsType[],
  errorMessage: string
}

export type SearchBestTVShowType = {
  id: string,
  rank: string,
  rankUpDown: string,
  title: string,
  fullTitle: string,
  year: string,
  image: string,
  crew: string,
  imDbRating: string,
  imDbRatingCount: string
}

export type GetBestOffAllTimeTVShowType = {
  items: SearchBestTVShowType[],
  errorMessage: string
}
