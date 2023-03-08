import { baseApi } from "../baseApi";

const recipeApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getRecipes: builder.query<any, void>({
			query: () => '/recipes',
			providesTags: ['Recipes']
		}),
	})
})

export const { useGetRecipesQuery } = recipeApi;

export { recipeApi };
