import { useState, useEffect } from "react";

const CountDown = ({ start, setStart }) => {
	const [timer, setTimer] = useState(3);

	useEffect(() => {
		const timeOut = setInterval(() => {
			if (timer === 1) {
				clearInterval(timeOut);
				setStart(false);
			}
			if (timer > 0) setTimer(timer - 1);
		}, 1000);
		return () => clearInterval(timeOut);
	}, [timer]);

	return <div className="countdown-number">{timer}</div>;
};

export default CountDown;
