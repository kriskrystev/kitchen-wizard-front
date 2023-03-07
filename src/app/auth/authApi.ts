import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryDecorator, fbQuery } from "../fetch-base-query";

const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseQueryDecorator(fbQuery('/api/auth')),
	endpoints: (builder) => ({
		userLogin: builder.mutation({
			query: (credentials) => ({
				url: '/login',
				method: 'POST',
				body: credentials,
			}),
		}),
		userRegister: builder.mutation({
			query: (userData) => ({
				url: '/register',
				method: 'POST',
				body: userData,
			}),
		}),
	})
});

export { authApi };
export const { useUserLoginMutation } = authApi;
