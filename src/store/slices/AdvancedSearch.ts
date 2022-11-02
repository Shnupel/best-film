import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdvancedSearchParamsType } from "@/services/AdvancedSearch/AdvancedSearchParamsType";
import { RootState } from "@/store/store";

interface AdvancedSearchState extends AdvancedSearchParamsType {}

const initialState: AdvancedSearchState = {
  title: "",
  title_type: [],
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
    changeTypeTitle(state, action: PayloadAction<string>) {
      if(state.title_type.includes(action.payload)) {
        state.title_type = state.title_type.filter(type => type === action.payload);
      } else {
        state.title_type.push(action.payload);
      }
    },
    changeRealiseDate(state, { payload }: PayloadAction<{ from?: string, to?: string }>) {
      if(payload.from){
        state.realise_date.from = payload.from;
      }
      if(payload.to){
        state.realise_date.to = payload.to;
      }
    },
    changeGenres(state, { payload }: PayloadAction<string[]>) {
      state.genres = payload;
    },
    changeAwards(state, { payload }: PayloadAction<string[]>) {
      state.awards = payload;
    },
    changeKeyWord(state, { payload }: PayloadAction<string>) {
      state.keyWords = payload;
    },
    changeCompany(state, { payload }: PayloadAction<string[]>) {
      state.company = payload;
    }
  }
});

export const { changeTitle, changeTypeTitle, changeRealiseDate, changeGenres, changeAwards, changeKeyWord, changeCompany } = AdvancedSearchParamsSlice.actions;
export const AdvancedSearchParamsSelector = ((state: RootState) => state.AdvancedSearch);
export default AdvancedSearchParamsSlice.reducer;
