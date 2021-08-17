import React from "react";

function ResultAscending({ ascendingResult }) {
	return (
		<div className="output-asc section">
			<span>오름차순 결과</span>
			<div className="number-output">
				<div>{ascendingResult.join(", ")}</div>
			</div>
		</div>
	);
}

export default ResultAscending;
