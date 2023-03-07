import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import recipeSlice from "./recipes/recipeSlice";

import { authApi } from './auth/authApi';
import { recipeApi } from "./recipes/recipeApi";

export const store = configureStore({
	reducer: {
		authSlice: authSlice,
		recipeSlice: recipeSlice,
		[recipeApi.reducerPath]: recipeApi.reducer,
		[authApi.reducerPath]: authApi.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(recipeApi.middleware)
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
