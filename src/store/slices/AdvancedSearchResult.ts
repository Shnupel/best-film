import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export enum LoadStatusesEnum {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success"
}

export const initialState = {
  loadingStatus: LoadStatusesEnum.LOADING,
  data: [],
  error: undefined
}

interface IRefParams {
  Ref: string,
  viewType: string
}

export const AdvancedSearchThunk = createAsyncThunk(
  "AdvancedSearch",
  async ({ Ref, viewType }: IRefParams) => {
    const viewPeaceOfRef = viewType === "new" && "&sort=your_rating_date,desc";
    const response = await fetch(Ref + viewPeaceOfRef);
    return await response.json();
  }
)

const AdvancedSearchResult = createSlice({
  name: "AdvancedSearchResult",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(AdvancedSearchThunk.pending, state => {
      state.loadingStatus = LoadStatusesEnum.LOADING;
    })
    builder.addCase(AdvancedSearchThunk.rejected, (state, action) => {
      state.loadingStatus = LoadStatusesEnum.ERROR;
    })
    builder.addCase(AdvancedSearchThunk.fulfilled, (state, { payload }) => {
      state.loadingStatus = LoadStatusesEnum.SUCCESS;
      state.data = payload;
      1737
    })
  }
});

export const AdvancedSearchResultSelector = ((state: RootState) => state.AdvancedSearchResult);
export default AdvancedSearchResult.reducer;
