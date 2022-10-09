import { GeneralResultsAllTypes, GeneralResultType } from "./Result.type";


export type actor = GeneralResultType & {
  resultType: "Name",
}

export type SearchByActorResultTypes = GeneralResultsAllTypes & {
  searchType: "Name",
  results: actor[]
}
