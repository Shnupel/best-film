import { API_KEY, API_URL } from "@/constants/api";
import { AdvancedSearchState } from "@/store/slices/AdvancedSearchCategories";

export const RefParams = (state: AdvancedSearchState): string => {
  const title_type = state.title_type ? `title_type=${ [...state.title_type] }` : "";
  const title = state.title ? `title=${ state.title }` : "";
  const release_date = (state.realise_date?.from && state.realise_date?.to) ? `release_date=${ state.realise_date?.from }-01-01,${ state.realise_date?.to }-12-31` : "";
  const params = title + release_date + title_type;

  return API_URL + 'API/' + 'AdvancedSearch/' + API_KEY + "?" + (params !== "" ? params : "groups=top_250");
};
