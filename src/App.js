import { useState, useRef, useEffect } from "react";
import { sortByAscending } from "./utils/sortFunction";
import Timer from "./components/Timer";
import "./App.css";

function App() {
	const [dataToRender, setDataToRender] = useState([]);
	const [ascendingResult, setAscendingResult] = useState([]);
	const [descendingResult, setDescendingResult] = useState([]);
	const inputNumbers = useRef();

	const handleClick = () => {
		const inputData = inputNumbers.current.value;
		const dataToSort = inputData
			.trim()
			.split(",")
			.filter((el) => !isNaN(el));

		setDataToRender(dataToSort);
	};

	useEffect(() => {
		setAscendingResult(sortByAscending(dataToRender));
		setTimeout(
			() => setDescendingResult(sortByAscending(dataToRender).reverse()),
			3000
		);
	}, [dataToRender]);

	return (
		<div className="App">
			<div className="sorting-machine section">
				<h1>Sorting Machine</h1>
				<Timer language={"kr-KO"} />
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
				<Timer language={"en-US"} />
			</div>
		</div>
	);
}

export default App;
