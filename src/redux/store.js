import { configureStore } from "@reduxjs/toolkit";
//configureStore - is a function that creates the store as an object
export const store = configureStore({
	//reducers - is an object that holds all the reducers or in other words the states and actions of an application
	reducer: {
		//key - is the name of the state
		//value - is the reducer function
		counter: (state = 6, action) => {
			switch (action.type) {
				case "INCREMENT":
					return state + 1;
				case "DECREMENT":
					if (state === 0) {
						return state;
					} else {
						return state - 1;
					}
				default:
					return state;
			}
		},
	},
});
