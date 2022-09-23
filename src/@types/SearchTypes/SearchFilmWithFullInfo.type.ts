import { SearchFilm } from "./SearchFilmsByName.type";
import { GenresType } from "../Genres.type";
import { CompanyType } from "../Companies.type";
import { CountryType } from "../CountriesFilm.type";
import { FilmsBudgetType } from "../FilmsBudget.type";
import { BrieflyFilmType } from "../FilmBriefly.type";

export type PersonType = {
  id: string,
  name: string
}

export type SearchFilmByIdType = SearchFilm & {
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
  genreList: GenresType[],
  companies: string,
  companyList: CompanyType[],
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
