import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_URL, API_KEY } from "@/constants/api";
import { GetBestOffAllTimeMoviesType, GetBestOffAllTimeTVShowType } from "@/types/SearchTypes/MediaInTop.type";
import { SearchFilmByNameResultTypes, SearchInAllCategoriesResultTypes } from "@/types/SearchTypes/SearchFilmsByName.type";
import { SearchSerialResultTypes } from "@/types/SearchTypes/SearchSerial.type";
import { SearchByActorResultTypes } from "@/types/SearchTypes/SearchByActor.type";
import { SearchCompanyResultTypes } from "@/types/SearchTypes/SearchCompany.type";
import { SearchByKeywordResultsAllTypes } from "@/types/SearchTypes/SearchByKeyword.type";
import { GetMediaSerialResultType } from "@/types/SearchTypes/AdvancedSearch/GetMedia.type";
import { AdvancedSearch } from "@/services/AdvancedSearch/RefParams";

// ? methods, which starts with get - get some elements in selections
// ? methods, which starts with search - search this element in catalog

export const filmsApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL + 'en/API/' }),
  endpoints: (builder) => ({
    getBestOffAllTimeMovies: builder.query<GetBestOffAllTimeMoviesType, string>({
      query: () => 'MostPopularMovies/' + API_KEY
    }),
    getBestOffAllTimeTVShow: builder.query<GetBestOffAllTimeTVShowType, string>({
      query: () => 'MostPopularTVs/' + API_KEY
    }),
    getSerials: builder.query<GetMediaSerialResultType, string>({
      query: () => 'AdvancedSearch/' + API_KEY + '?title_type=tv_series'
    }),
    getFilms: builder.query<GetMediaSerialResultType, string>({
      query: () => 'AdvancedSearch/' + API_KEY + '?title_type=tv_movie'
    }),
    searchOfAllCatalogs: builder.query<SearchFilmByNameResultTypes, string>({
      query: (name: string) => 'Search/' + API_KEY + `/${ name }`
    }),
    searchFilms: builder.query<SearchInAllCategoriesResultTypes, string>({
      query: (filmTitle: string) => 'SearchMovie/' + API_KEY + `/${ filmTitle }`
    }),
    searchSerial: builder.query<SearchSerialResultTypes, string>({
      query: (serialTitle: string) => 'SearchSeries/' + API_KEY + `/${ serialTitle }`
    }),
    searchOnActors: builder.query<SearchByActorResultTypes, string>({
      query: (actorsName: string) => 'SearchName/' + API_KEY + `/${ actorsName }`
    }),
    searchCompany: builder.query<SearchCompanyResultTypes, string>({
      query: (companyName: string) => 'SearchCompany/' + API_KEY + `/${ companyName }`
    }),
    searchByKeyword: builder.query<SearchByKeywordResultsAllTypes, string>({
      query: (keyWord: string) => 'SearchKeyword/' + API_KEY + `/${ keyWord }`
    })
  })
});

export const {
  useGetBestOffAllTimeMoviesQuery,
  useGetBestOffAllTimeTVShowQuery,
  useGetFilmsQuery,
  useGetSerialsQuery,
  useSearchOfAllCatalogsQuery,
  useSearchFilmsQuery,
  useSearchSerialQuery,
  useSearchOnActorsQuery,
  useSearchCompanyQuery,
  useSearchByKeywordQuery,
} = filmsApi;
