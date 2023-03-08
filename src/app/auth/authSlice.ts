import { createSlice } from '@reduxjs/toolkit';
import { authApi } from "./authApi";

const accessToken = localStorage.getItem('accessToken');

const initialState = {
	accessToken
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('accessToken');
			state.accessToken = null;
		}
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(authApi.endpoints.userLogin.matchFulfilled, (state, { payload }) => {
				state.accessToken = payload.accessToken;
				localStorage.setItem("accessToken", payload.accessToken);
			})
	}
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
