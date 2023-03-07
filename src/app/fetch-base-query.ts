import { logout } from "./auth/authSlice";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

function fbQuery(path: string) {
	return fetchBaseQuery({
		baseUrl: `http://localhost:8080${path}`,
		prepareHeaders: (headers, { getState }: any) => {
			const token = getState().authSlice.accessToken;

			if (token) {
				headers.set('Authorization', `Bearer ${token}`);

				return headers;
			}

			return headers;
		}
	});
}

function baseQueryDecorator(fetchQueryFunction: any): any {
	return async function (...args: any[]) {
		const queryFuncArgs = args[0];
		const api = args[1];
		const extraOptions = args[2];

		const queryResult = await fetchQueryFunction(queryFuncArgs, api, extraOptions);

		if (queryResult.error && queryResult.error.status === 401) {
			// TODO: implement refresh logic after you do it in the api
			api.dispatch(logout());
		}

		return queryResult;
	}
}


export { baseQueryDecorator, fbQuery };
