import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		userLogin: builder.mutation({
			query: (credentials) => ({
				url: '/auth/login',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['Recipes']
		}),
		userRegister: builder.mutation({
			query: (userData) => ({
				url: '/users',
				method: 'POST',
				body: userData,
			}),
		}),
	})
});

export { authApi };
export const { useUserLoginMutation, useUserRegisterMutation } = authApi;
