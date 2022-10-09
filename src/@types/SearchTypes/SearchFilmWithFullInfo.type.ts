import { SearchFilm } from "./SearchFilmsByName.type";

export type PersonType = {
  id: string,
  name: string
}

export type CountryType = {
  key: string,
  value: string
}

export type FilmsBudgetType = {
  budget: string,
  openingWeekendUSA: string,
  grossUSA: string,
  cumulativeWorldwideGross: string
}

export type BrieflyFilmType = {
  id: string,
  title: string,
  image: string,
  imDbRating: string
}

export type SearchFilmWithFullInfoType = SearchFilm & {
  id: string,
  originalTitle: string,
  fullTitle: string,
  type: string,
  year: string,
  image: string,
  releaseDate: string,
  runtimeMins: string,
  runtimeStr: string,
  plot: string,
  plotLocal: string,
  plotLocalIsRtl: string,
  awards: string,
  directors: string,
  directorList: PersonType[],
  writers: string,
  writerList: PersonType[],
  stars: string,
  starList: PersonType[],
  actorList: PersonType[],
  fullCast: any,
  genres: string,
  genreList: Array<{ key: string, value: string }>,
  companies: string,
  companyList: Array<{ id: string, name: string }>,
  countries: string,
  countryList: CountryType[],
  languages: string
  languageList: CountryType[],
  contentRating: string,
  imDbRating: string,
  imDbRatingVotes: string,
  metacriticRating: string,
  ratings: string,
  wikipedia: string,
  boxOffice: FilmsBudgetType,
  keywords: string,
  keywordList: string[],
  similars: BrieflyFilmType[],
  errorMessage: string
}
