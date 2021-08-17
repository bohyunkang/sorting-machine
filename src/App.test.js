import { sortFunction } from "./utils/sortFunction";
import { filterInputs } from "./utils/filterInputs";

describe("오름차순 테스트", () => {
	test("정수일 경우", () => {
		expect(sortFunction(filterInputs("5, 4, 3, 2, 1"))).toEqual([
			1, 2, 3, 4, 5,
		]);
	});
	test("소수일 경우", () => {
		expect(sortFunction(filterInputs("0.5, 1, 2, 0.757, 4, 0.42"))).toEqual([
			0.42, 0.5, 0.757, 1, 2, 4,
		]);
	});
	test("음수일 경우", () => {
		expect(sortFunction(filterInputs("3, -5, 2, 4, -1"))).toEqual([
			-5, -1, 2, 3, 4,
		]);
	});
	test("콤마가 찍힌 경우", () => {
		expect(sortFunction(filterInputs("-1, -2, -3, -4, -5"))).toEqual([
			-5, -4, -3, -2, -1,
		]);
	});
	test("빈칸이 같이 입력된 경우", () => {
		expect(
			sortFunction(filterInputs("-1, -2, -3, -4, -5, , , , , , , ,"))
		).toEqual([-5, -4, -3, -2, -1]);
	});
});

describe("내림차순 테스트", () => {
	test("정수일 경우", () => {
		expect(sortFunction(filterInputs("5, 2, 3, 4, 1"), "descending")).toEqual([
			5, 4, 3, 2, 1,
		]);
	});
	test("빈칸이 같이 입력된 경우", () => {
		expect(
			sortFunction(
				filterInputs("-1, -2, -3, -4, -5, , , , , , , ,"),
				"descending"
			)
		).toEqual([-1, -2, -3, -4, -5]);
	});
});
