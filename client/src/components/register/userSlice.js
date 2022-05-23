import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	res: {
		status: "",
		message: "",
	},
	isLoading: false,
	user: {},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		isLoadingPending: state => {
			state.isLoading = true;
		},
		setResponse: (state, action) => {
			state.isLoading = false;
			state.res = action.payload;
		},
		loginSuccessResponse: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			state.res = {
				status: "",
				message: "",
			};
		},
	},
});

const { actions, reducer } = userSlice;

export const { isLoadingPending, setResponse, loginSuccessResponse } = actions;

export default reducer;
