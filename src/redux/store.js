import { configureStore } from "@reduxjs/toolkit";
//configureStore - is a function that creates the store as an object
import counterReducer from "../slices/counterSlice";
import isLoggedReducer from "../slices/isLoggedSlice";
export const store = configureStore({
	//reducers - is an object that holds all the reducers or in other words the states and actions of an application
	reducer: {
		//key - is the name of the state
		//value - is the reducer function
		counter: counterReducer,
		isLogged: isLoggedReducer,
	},
});
