import { createSlice } from "@reduxjs/toolkit";

export const isLoggedSlice = createSlice({
	name: "isLogged",
	initialState: {
		value: false,
	},
	reducers: {
		changeLogged: (state) => {
			state.value = !state.value;
		},
	},
});
export const { changeLogged } = isLoggedSlice.actions; //export actions to use them in the components

export default isLoggedSlice.reducer; // export reducer to add it to the store
