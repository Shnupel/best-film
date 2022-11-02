export interface AdvancedSearchParamsType {
  title_type: string[],
  title?: string,
  realise_date: {
    from: string,
    to: string
  },
  genres: string[],
  awards: string[],
  ageRatings: string[],
  company: string[],
  keyWords: string
}

export type AdvancedSearchViewSortType = "best" | "new" | "old";
