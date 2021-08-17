import { useState, useEffect } from "react";
import Timer from "./components/Timer";
import InputNumbers from "./components/InputNumbers";
import ResultAscending from "./components/ResultAscending";
import ResultDescending from "./components/ResultDescending";
import { sortFunction } from "./utils/sortFunction";
import { MESSAGE } from "./utils/constants";
import "./App.css";

function App() {
	const { GUIDE } = MESSAGE;
	const [start, setStart] = useState(false);
	const [dataToRender, setDataToRender] = useState([]);
	const [ascendingResult, setAscendingResult] = useState([]);
	const [descendingResult, setDescendingResult] = useState([]);
	const [message, setMessage] = useState(GUIDE);

	useEffect(() => {
		if (dataToRender.length === 0) return;
		setAscendingResult(sortFunction(dataToRender, "ascending"));
		setTimeout(
			() => setDescendingResult(sortFunction(dataToRender, "descending")),
			3000
		);
		setStart(true);
	}, [dataToRender]);

	return (
		<div className="App">
			<div className="sorting-machine section">
				<h1>🤖Sorting Machine🤖</h1>

				<Timer language={"kr-KO"} />

				<InputNumbers {...{ message, setMessage, setDataToRender }} />
				<ResultAscending ascendingResult={ascendingResult} />
				<ResultDescending {...{ descendingResult, start, setStart }} />

				<Timer language={"en-US"} />
			</div>
		</div>
	);
}

export default App;
