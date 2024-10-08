import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
	increment,
	decrement,
	incrementByAmount,
	reset,
} from "./slices/counterSlice";
import { changeLogged } from "./slices/isLoggedSlice";
// store - is an object that hold the application state {}
function App() {
	//useSelector - is a function that takes the current state and returns the value of the state;
	const count = useSelector((state) => state.counter.value);
	const isLogged = useSelector((state) => state.isLogged.value);
	// const isLogged = useSelector((state) => state.isLogged);
	// console.log(isLogged);

	//useDispatch - is a function that takes an action and dispatches it to the store
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Redux</h1>
			<button onClick={() => dispatch(decrement())}>-</button>
			<h2>Count is: {count}</h2>
			<button onClick={() => dispatch(increment())}>+</button>

			<button onClick={() => dispatch(incrementByAmount(5))}>
				Increment by amount
			</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
			<div></div>
			{isLogged ? (
				<button onClick={() => dispatch(changeLogged())}>Sign out</button>
			) : (
				<button onClick={() => dispatch(changeLogged())}>Sign in</button>
			)}
			{isLogged ? <h2>You're alreadin signed</h2> : <h2>You must sign in</h2>}
		</div>
	);
}

export default App;

//configureStore - is a function that creates the store as an object;
//Provider store = {name of the store} - is a component that provides the store to the application
//useSelector - is a function that takes the current state and returns the value of the state; it is suggested to get not the whole state, but only the part of the state that is needed
//useDispatch - is a function that takes an action and dispatches it to the store
