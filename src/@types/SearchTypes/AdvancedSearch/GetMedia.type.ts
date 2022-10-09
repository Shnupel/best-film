import { SearchFilmWithFullInfoType } from "@/types/SearchTypes/SearchFilmWithFullInfo.type";

export type GetMediaSerial = SearchFilmWithFullInfoType;

export type GetMediaSerialResultType = {
  queryString: string,
  results: GetMediaSerial[]
  errorMessage: string
}
