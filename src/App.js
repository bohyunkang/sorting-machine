import { useState, useRef } from "react";
import { sortByAscending } from "./sortFunction";
import "./App.css";

function App() {
	const [ascendingResult, setAscendingResult] = useState([]);
	const [descendingResult, setDescendingResult] = useState([]);
	const inputNumbers = useRef();

	const handleClick = () => {
		const inputData = inputNumbers.current.value;

		const dataToSort = inputData
			.trim()
			.split(",")
			.filter((el) => !isNaN(el));

		setAscendingResult(sortByAscending(dataToSort));
		setDescendingResult(sortByAscending(dataToSort).reverse());
	};
	return (
		<div className="App">
			<div className="sorting-machine section">
				<h1>Sorting Machine</h1>
				<div className="timer-kr section">
					<span>타이머</span>
					<div>실제 타이머 영역</div>
				</div>
				<div className="number-input section">
					<span>숫자 입력</span>
					<input ref={inputNumbers}></input>
				</div>
				<button className="start-button section" onClick={handleClick}>
					정렬 시작
				</button>
				<div className="output-asc section">
					<span>결과 필드 오름차순</span>
					<div>{ascendingResult.join(", ")}</div>
				</div>
				<div className="output-desc section">
					<span>결과 필드 내림차순</span>
					<div>{descendingResult.join(", ")}</div>
				</div>
				<div className="timer-eu section">
					<span>타이머</span>
					<div>실제 타이머 영역</div>
				</div>
			</div>
		</div>
	);
}

export default App;
