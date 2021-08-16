export const sortByAscending = (dataToSort) => {
	const resultArray = [];
	//divide
	dataToSort = dataToSort.map((el) => Number(el));
	if (dataToSort.length < 2) return dataToSort;

	const mid = Math.floor(dataToSort.length / 2);
	const left = sortByAscending(dataToSort.slice(0, mid));
	const right = sortByAscending(dataToSort.slice(mid));

	//conquer
	while (left.length > 0 && right.length > 0) {
		left[0] < right[0]
			? resultArray.push(left.shift())
			: resultArray.push(right.shift());
	}

	while (left.length === 0 && right.length > 0) {
		resultArray.push(right.shift());
	}

	while (left.length > 0 && right.length === 0) {
		resultArray.push(left.shift());
	}

	return resultArray;
};
