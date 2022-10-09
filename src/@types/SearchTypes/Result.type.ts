export type GeneralResultType = {
  id: string,
  resultType: string,
  image: string,
  title: string,
  description: string
}

export type GeneralResultsAllTypes = {
  searchType: string,
  expression: string,
  results: GeneralResultType[],
  errorMessage: string
}
