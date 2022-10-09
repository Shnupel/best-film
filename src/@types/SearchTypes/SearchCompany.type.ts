import { GeneralResultsAllTypes, GeneralResultType } from "./Result.type";

export type CompanyType = GeneralResultType & {
  resultType: "Company"
}

export type SearchCompanyResultTypes = GeneralResultsAllTypes & {
  searchType: "Company",
  results: CompanyType[],
}
