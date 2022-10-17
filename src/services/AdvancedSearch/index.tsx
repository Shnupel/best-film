import { API_KEY } from "@/constants/api";
import { AdvancedSearchType } from "@/services/AdvancedSearch/AdvancedSearch.type";

interface IProps {
  viewType?: string,
  SearchParams: AdvancedSearchType
}

export const AdvancedSearchUrl = ({ viewType, SearchParams }: IProps): string => {
  const title_type = SearchParams.title_type ? `title_type=${ [...SearchParams.title_type] }` : "";
  const title = SearchParams.title ? `title=${ SearchParams.title }` : "";
  const release_date = (SearchParams.realise_date?.from && SearchParams.realise_date?.to) ? `release_date=${ SearchParams.realise_date?.from }-01-01,${ SearchParams.realise_date?.to }-12-31` : "";
  const params = title + release_date + title_type;

  return 'AdvancedSearch/' + API_KEY + "?" + (params !== "" ? params : "groups=top_250");
};
