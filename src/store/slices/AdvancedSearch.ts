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

const AdvancedSearchSlice  = createSlice({
  name: "AdvancedSearch",
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    createTypeTitle(state, action: PayloadAction<string[]>) {
      state.title_type = action.payload;
    }
  }
});

export const { changeTitle, createTypeTitle } = AdvancedSearchSlice.actions;
export const AdvancedSearchSelector = ((state: RootState) => state.AdvancedSearch);
export default AdvancedSearchSlice.reducer;
