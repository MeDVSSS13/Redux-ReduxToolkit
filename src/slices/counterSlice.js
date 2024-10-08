import { createSlice } from "@reduxjs/toolkit";
//createSlice - is a function that creates a slice of the store
//name - is the name of the slice
//initialState - is the initial state of the slice
//reducers - is an object that holds all the reducers or in other words the states and actions of an application

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			if (state.value !== 0) {
				state.value -= 1;
			}
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
