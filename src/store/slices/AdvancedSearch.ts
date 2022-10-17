import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdvancedSearchType } from "@/services/AdvancedSearch/AdvancedSearch.type";
import { RootState } from "@/store/store";

interface AdvancedSearchState extends AdvancedSearchType {}

const initialState: AdvancedSearchState = {
  title: "",
  title_type: [],
  realise_date: {
    from: "",
    to: ""
  }
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
    }
  }
});

export const { changeTitle, changeTypeTitle } = AdvancedSearchParamsSlice.actions;
export const AdvancedSearchParamsSelector = ((state: RootState) => state.AdvancedSearch);
export default AdvancedSearchParamsSlice.reducer;
