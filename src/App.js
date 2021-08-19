import { useState, useEffect } from "react";
import InputNumbers from "./components/InputNumbers";
import SortResult from "./components/SortResult";
import Timer from "./components/Timer";
import { sortFunction } from "./utils/sortFunction";
import { MESSAGE, SORT_TYPE } from "./utils/constants";
import { delay } from "./utils/delay";
import "./App.css";

function App() {
  const { TO_UP, TO_DOWN } = SORT_TYPE;
  const [start, setStart] = useState(false);
  const [dataToRender, setDataToRender] = useState([]);
  const [ascendingResult, setAscendingResult] = useState([]);
  const [descendingResult, setDescendingResult] = useState([]);
  const [message, setMessage] = useState(MESSAGE.GUIDE);

  useEffect(() => {
    if (dataToRender.length === 0) return;
    setStart(true);

    (async () => {
      const ascendingSort = await delay(0, sortFunction(dataToRender, TO_UP));
      setAscendingResult(ascendingSort);

      const descendingSort = await delay(3000, sortFunction(dataToRender, TO_DOWN));
      setDescendingResult(descendingSort);
    })();
  }, [dataToRender, TO_UP, TO_DOWN]);

  return (
    <div className="App">
      <div className="sorting-machine section">
        <h1>🤖 Sorting Machine 🤖</h1>

        <Timer language={"kr-KO"} />
        <InputNumbers {...{ message, setMessage, setDataToRender }} />
        <SortResult sortType={TO_UP} sortingResult={ascendingResult} {...{ start, setStart }} />
        <SortResult sortType={TO_DOWN} sortingResult={descendingResult} {...{ start, setStart }} />
        <Timer language={"en-US"} />

        <span className="copyright">@bohyunkang & @skawnkk</span>
      </div>
    </div>
  );
}

export default App;
