import { GeneralResultType } from "./Result.type";

export type SerialInfo = GeneralResultType & {
  resultType: "Title"
}

export type SearchSerialResultTypes = {
  searchType: "Series",
  results: SerialInfo[],
}
