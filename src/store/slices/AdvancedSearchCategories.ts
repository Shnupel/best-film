import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdvancedSearchType } from "@/services/AdvancedSearch/AdvancedSearch.type";
import { RootState } from "@/store/store";
import { RefParams } from "@/services/AdvancedSearch/RefParams";

export interface AdvancedSearchState extends AdvancedSearchType {}

const initialState: AdvancedSearchState = {
  title: "",
  title_type: [],
  realise_date: {
    from: "",
    to: ""
  },
  ResultRef: ""
}

const AdvancedSearchParamsSlice  = createSlice({
  name: "AdvancedSearch",
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
      state.ResultRef = RefParams(state);
    },
    changeTypeTitle(state, action: PayloadAction<string>) {
      if(state.title_type.includes(action.payload)) {
        state.title_type = state.title_type.filter(type => type === action.payload);
      } else {
        state.title_type.push(action.payload);
      }
      state.ResultRef = RefParams(state);
    }
  },
});

export const { changeTitle, changeTypeTitle } = AdvancedSearchParamsSlice.actions;
export const AdvancedSearchSelector = ((state: RootState) => state.AdvancedSearchParams);
export default AdvancedSearchParamsSlice.reducer;
