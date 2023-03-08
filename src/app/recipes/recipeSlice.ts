import { createSlice } from "@reduxjs/toolkit";
import { recipeApi } from "./recipeApi";

const initialState = {
	recipes: []
}

const recipeSlice = createSlice({
	name: 'recipeSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(recipeApi.endpoints.getRecipes.matchFulfilled, (state, { payload }) => {
			state.recipes = payload;
		});
	}
});

export default recipeSlice.reducer;
