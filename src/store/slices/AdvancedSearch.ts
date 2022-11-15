import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AdvancedSearchParamsType } from "@/services/AdvancedSearch/AdvancedSearchParams.type";
import { RootState } from "@/store/store";
import { GetInitialState } from "@/store/slices/GetInitialStateOfAdvancedSearch";

interface AdvancedSearchState extends AdvancedSearchParamsType {}

const initialState: AdvancedSearchState = {
  title: "",
  title_type: GetInitialState("title_type") || [],
  realise_date: {
    from: "",
    to: ""
  },
  genres: [],
  awards: [],
  ageRatings: [],
  keyWords: "",
  company: []
}

const AdvancedSearchParamsSlice  = createSlice({
  name: "AdvancedSearch",
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    changeTypeTitle(state, { payload }: PayloadAction<string>) {
      if(!state.title_type.includes(payload)) {
        const newValue = [...state.title_type, payload];
        state.title_type = newValue;
        localStorage.setItem("title_type", JSON.stringify(newValue));
        return;
      }
      const newValue = state.title_type.filter(type => type !== payload);
      state.title_type = newValue;
      localStorage.removeItem("title_type");
      localStorage.setItem("title_type", JSON.stringify(newValue));
    },
    changeRealiseDate(state, { payload }: PayloadAction<{ from?: string, to?: string }>) {
      if(payload.from){
        state.realise_date.from = payload.from;
      }
      if(payload.to){
        state.realise_date.to = payload.to;
      }
    },
    changeGenres(state, { payload }: PayloadAction<string>) {
      if(!state.genres.includes(payload)){
        state.genres = [...state.genres, payload];
        return;
      }
      state.genres = state.genres.filter(value => value === payload);
    },
    changeAwards(state, { payload }: PayloadAction<string>) {
      if(state.awards.includes(payload)) {
        state.awards = [...state.awards, payload];
        return;
      }
      state.awards = state.awards.filter(award => award === payload);
    },
    changeAgeRating(state, { payload }: PayloadAction<string>) {
      if(!state.ageRatings.includes(payload)) {
        state.ageRatings = [...state.ageRatings, payload];
        return;
      }
      state.ageRatings = state.ageRatings.filter(ageRating => ageRating === payload);
    },
    changeKeyWord(state, { payload }: PayloadAction<string>) {
      state.keyWords = payload;
    },
    changeCompany(state, { payload }: PayloadAction<string>) {
      if(!state.company.includes(payload)){
        state.company = [...state.company, payload];
        return;
      }
      state.company = state.company.filter(companies => companies === payload);
    }
  }
});

export const { changeTitle, changeTypeTitle, changeRealiseDate, changeGenres, changeAwards, changeAgeRating, changeKeyWord, changeCompany } = AdvancedSearchParamsSlice.actions;
export const AdvancedSearchParamsSelector = ((state: RootState) => state.AdvancedSearch);
export default AdvancedSearchParamsSlice.reducer;
