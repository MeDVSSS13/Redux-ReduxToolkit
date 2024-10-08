import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// store - is an object that hold the application state {}
function App() {
	//useSelector - is a function that takes the current state and returns the value of the state;
	const count = useSelector((state) => state.counter);

	//useDispatch - is a function that takes an action and dispatches it to the store
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Redux</h1>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
			<h2>Count is: {count}</h2>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
		</div>
	);
}

export default App;
