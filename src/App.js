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
					<span>정렬하고 싶은 숫자를 입력해주세요!</span>
					<input ref={inputNumbers} />
				</div>
				<button className="start-button section" onClick={handleClick}>
					정렬 시작하기
				</button>
				<div className="output-asc section">
					<span>결과 (오름차순)</span>
					<div className="number-output">{ascendingResult.join(", ")}</div>
				</div>
				<div className="output-desc section">
					<span>결과 (내림차순)</span>
					<div className="number-output">{descendingResult.join(", ")}</div>
				</div>
				<Timer language={"en-US"} />
			</div>
		</div>
	);
}

export default App;
