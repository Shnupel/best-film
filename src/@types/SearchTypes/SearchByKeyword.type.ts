import { GeneralResultsAllTypes, GeneralResultType } from "./Result.type";

export type SearchByKeywordResultType = GeneralResultType & {
  resultType: "Keyword"
}

export type SearchByKeywordResultsAllTypes = GeneralResultsAllTypes & {
  results: SearchByKeywordResultType[],
  searchType: "Keyword"
}
