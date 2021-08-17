export const filterInputs = (inputData) => {
	return inputData
		.trim()
		.split(",")
		.filter((el) => el.trim())
		.filter((el) => !isNaN(el));
};
