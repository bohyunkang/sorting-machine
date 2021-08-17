import React from "react";
import CountDown from "./CountDown";

function ResultDescending({ descendingResult, start, setStart }) {
	return (
		<div className="output-desc section">
			<span>내림차순 결과</span>
			<div className="number-output">
				<div>
					{start ? (
						<CountDown {...{ start, setStart }} />
					) : (
						descendingResult.join(", ")
					)}
				</div>
			</div>
		</div>
	);
}

export default ResultDescending;
