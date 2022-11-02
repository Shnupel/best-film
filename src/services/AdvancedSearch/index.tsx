import { API_KEY } from "@/constants/api";
import { AdvancedSearchParamsType, AdvancedSearchViewSortType } from "@/services/AdvancedSearch/AdvancedSearchParamsType";

interface IProps {
  viewType?: AdvancedSearchViewSortType,
  SearchParams: AdvancedSearchParamsType
}

const linkForViewType = (viewParam?: string): string => {
  const preView = "&sort="
  if(viewParam) {
    switch (viewParam) {
      case "new":
        return preView + "your_rating_date,desc";
      case "old":
        return preView + "your_rating_date,asc";
    }
  }
  return ""
}

export const AdvancedSearchUrl = ({ viewType, SearchParams }: IProps): string => {
  const title_type = SearchParams.title_type ? `&title_type=${ [...SearchParams.title_type] }` : "";
  const title = SearchParams.title ? `&title=${ SearchParams.title }` : "";
  const release_date = (SearchParams.realise_date?.from && SearchParams.realise_date?.to) ? `&release_date=${ SearchParams.realise_date?.from }-01-01,${ SearchParams.realise_date?.to }-12-31` : "";
  const genres = SearchParams.genres ? `&genres=${ SearchParams.genres }` : "";
  const award = SearchParams.awards ? `&groups=${ SearchParams.awards }` : "";
  const keyword = SearchParams.keyWords ? `&keywords=${ SearchParams.keyWords }` : "";
  const company = SearchParams.company ? `&companies=${ SearchParams.company }` : "";
  const params = title + release_date + title_type + genres + award + keyword + company;

  return 'AdvancedSearch/' + API_KEY + "?" + (params !== "" ? params : "groups=top_250") + linkForViewType(viewType);
};
