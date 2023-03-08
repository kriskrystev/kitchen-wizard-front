import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import recipeSlice from "./recipes/recipeSlice";

import { baseApi } from "./baseApi";

export const store = configureStore({
	reducer: {
		recipeSlice: recipeSlice,
		authSlice: authSlice,
		[baseApi.reducerPath]: baseApi.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(baseApi.middleware)
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
