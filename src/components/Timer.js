import React from "react";
import { useEffect, useState } from "react";

export default function Timer({ language }) {
	const currentDate = new Date();
	const currentTime = new Date().getTime();
	const [time, setTime] = useState(currentTime);
	const [dateUI, setDateUI] = useState("");
	const [timerUI, setTimerUI] = useState("");

	const resultDate = new Intl.DateTimeFormat(language, {
		dateStyle: "long",
	}).format(currentDate);

	const resultTimer = new Intl.DateTimeFormat(language, {
		timeStyle: "medium",
	}).format(time);

	useEffect(() => {
		let timer = setInterval(() => setTime((time) => time + 1000), 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => setTimerUI(resultTimer), [resultTimer]);
	useEffect(() => setDateUI(resultDate), [resultDate]);

	return (
		<div className="timer section">
			<div>{dateUI}</div>
			<div>{timerUI}</div>
		</div>
	);
}
