import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AdvancedSearchParamsType } from "@/services/AdvancedSearch/AdvancedSearchParams.type";
import { RootState } from "@/store/store";
import ChangeAdvancedSearchesState, { GetInitialState } from "./ChangeAdvancedSearchesState";

interface AdvancedSearchState extends AdvancedSearchParamsType {}

const initialState: AdvancedSearchState = {
  title: "",
  title_type: GetInitialState("title_type") || [],
  realise_date: {
    from: "",
    to: ""
  },
  genres: GetInitialState("genres") || [],
  awards: GetInitialState("awards") || [],
  ageRatings: GetInitialState("ageRatings") || [],
  keyWords: "",
  company: GetInitialState("company") || []
}

const ChangeState = new ChangeAdvancedSearchesState();

const AdvancedSearchParamsSlice  = createSlice({
  name: "AdvancedSearch",
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    changeTypeTitle(state, { payload }: PayloadAction<string>) {
      window.localStorage.removeItem("title_type");
      const newState = ChangeState.ToggleValueInArray(state.title_type, payload);
      state.title_type = newState;
      window.localStorage.setItem("title_type", JSON.stringify(newState));
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
      window.localStorage.removeItem("genres");
      const newState = ChangeState.ToggleValueInArray(state.genres, payload);
      state.genres = newState;
      window.localStorage.setItem("genres", JSON.stringify(newState));
    },
    changeAwards(state, { payload }: PayloadAction<string>) {
      window.localStorage.removeItem("awards");
      const newState = ChangeState.ToggleValueInArray(state.awards, payload);
      state.awards = newState;
      window.localStorage.setItem("awards", JSON.stringify(newState));
    },
    changeAgeRating(state, { payload }: PayloadAction<string>) {
      window.localStorage.removeItem("ageRatings");
      const newState = ChangeState.ToggleValueInArray(state.ageRatings, payload);
      state.ageRatings = newState;
      window.localStorage.setItem("ageRatings", JSON.stringify(newState));
    },
    changeKeyWord(state, { payload }: PayloadAction<string>) {
      state.keyWords = payload;
    },
    changeCompany(state, { payload }: PayloadAction<string>) {
      window.localStorage.removeItem("company");
      const newState = ChangeState.ToggleValueInArray(state.company, payload);
      state.company = newState;
      window.localStorage.setItem("company", JSON.stringify(newState));
    }
  }
});

export const { changeTitle, changeTypeTitle, changeRealiseDate, changeGenres, changeAwards, changeAgeRating, changeKeyWord, changeCompany } = AdvancedSearchParamsSlice.actions;
export const AdvancedSearchParamsSelector = ((state: RootState) => state.AdvancedSearch);
export default AdvancedSearchParamsSlice.reducer;
