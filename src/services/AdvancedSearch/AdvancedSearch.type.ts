import { SearchFilmWithFullInfoType } from "@/types/SearchTypes/SearchFilmWithFullInfo.type";

export interface AdvancedSearchParamsType {
  title_type: string[],
  title?: string,
  realise_date?: {
    from: string,
    to: string
  },
  ResultRef: string
}

export interface IAdvancedSearchResult {
  data: {
    errorMessage: null | string,
    queryString: string,
    results: SearchFilmWithFullInfoType[]
  }
}

