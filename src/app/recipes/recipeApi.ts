import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryDecorator, fbQuery } from "../fetch-base-query";

const recipeApi = createApi({
	reducerPath: 'recipesApi',
	baseQuery: baseQueryDecorator(fbQuery('/api')),
	endpoints: (builder) => ({
		getRecipes: builder.query<any, void>({
			query: () => '/recipes'
		})
	})
});

export const { useGetRecipesQuery } = recipeApi;

export { recipeApi };
