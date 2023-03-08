import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQueryDecorator, fbQuery } from "./fetch-base-query";

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryDecorator(fbQuery('/api')),
	endpoints: () => ({})
}).enhanceEndpoints({
	addTagTypes: ['Recipes']
});
