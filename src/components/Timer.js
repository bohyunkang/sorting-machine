import React from "react";
import { useEffect, useState } from "react";

export default function Timer({ language }) {
	const currentTime = new Date().getTime();
	const [time, setTime] = useState(currentTime);
	const [timerUI, setTimerUI] = useState("");

	const resultTimer = new Intl.DateTimeFormat(language, {
		dateStyle: "full",
		timeStyle: "long",
	}).format(time);

	useEffect(() => {
		let timer = setInterval(() => setTime((time) => time + 1000), 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => setTimerUI(resultTimer), [resultTimer]);

	return (
		<div className="timer section">
			<div>{timerUI}</div>
		</div>
	);
}
