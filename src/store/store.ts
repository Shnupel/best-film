import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { filmsApi } from "@/services/api.service";
import AdvancedSearchReducer from "@/store/slices/AdvancedSearchCategories";
import AdvancedSearchResult from "@/store/slices/AdvancedSearchResult";

export const store = configureStore({
  reducer: {
    AdvancedSearchParams: AdvancedSearchReducer,
    AdvancedSearchResult: AdvancedSearchResult,
    [filmsApi.reducerPath]: filmsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
