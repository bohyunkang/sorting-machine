import { useState, useEffect } from 'react';
import Timer from './components/Timer';
import InputNumbers from './components/InputNumbers';
import ResultAscending from './components/ResultAscending';
import ResultDescending from './components/ResultDescending';
import { sortFunction } from './utils/sortFunction';
import { MESSAGE } from './utils/constants';
import { delay } from './utils/delay';
import './App.css';

function App() {
  const [start, setStart] = useState(false);
  const [dataToRender, setDataToRender] = useState([]);
  const [ascendingResult, setAscendingResult] = useState([]);
  const [descendingResult, setDescendingResult] = useState([]);
  const [message, setMessage] = useState(MESSAGE.GUIDE);

  useEffect(async () => {
    if (dataToRender.length === 0) return;

    setStart(true);
    const ascendingSort = await delay(0, sortFunction(dataToRender, 'ascending'));
    setAscendingResult(ascendingSort);

    const descendingSort = await delay(3000, sortFunction(dataToRender, 'descending'));
    setDescendingResult(descendingSort);
  }, [dataToRender]);

  return (
    <div className='App'>
      <div className='sorting-machine section'>
        <h1>🤖 Sorting Machine 🤖</h1>

        <Timer language={'kr-KO'} />

        <InputNumbers {...{ message, setMessage, setDataToRender }} />
        <ResultAscending ascendingResult={ascendingResult} />
        <ResultDescending {...{ descendingResult, start, setStart }} />

        <Timer language={'en-US'} />
        <span className='copyright'>@bohyunkang & @skawnkk</span>
      </div>
    </div>
  );
}

export default App;
