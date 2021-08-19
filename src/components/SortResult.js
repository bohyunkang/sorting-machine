import CountDown from "./CountDown";
import { SORT_TYPE } from "../utils/constants";

function SortResult({ sortType, sortingResult, start, setStart }) {
  const { TO_UP } = SORT_TYPE;
  const title = sortType === TO_UP ? "오름차순 결과" : "내림차순 결과";
  return (
    <div className="output-asc section">
      <span>{title}</span>
      <div className="number-output">
        <div>
          {sortType !== TO_UP && start ? (
            <CountDown setStart={setStart} />
          ) : (
            sortingResult.join(", ")
          )}
        </div>
      </div>
    </div>
  );
}

export default SortResult;
