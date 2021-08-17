export const sortFunction = (dataToSort, type) => {
	const resultArray = [];

	//divide
	dataToSort = dataToSort.map((el) => Number(el));
	if (dataToSort.length < 2) return dataToSort;

	const mid = Math.floor(dataToSort.length / 2);
	const left = sortFunction(dataToSort.slice(0, mid), type);
	const right = sortFunction(dataToSort.slice(mid), type);

	//conquer
	while (left.length > 0 && right.length > 0) {
		if (type === "ascending") {
			left[0] < right[0]
				? resultArray.push(left.shift())
				: resultArray.push(right.shift());
		} else {
			left[0] < right[0]
				? resultArray.push(right.shift())
				: resultArray.push(left.shift());
		}
	}

	while (left.length === 0 && right.length > 0) {
		resultArray.push(right.shift());
	}

	while (left.length > 0 && right.length === 0) {
		resultArray.push(left.shift());
	}

	return resultArray;
};
