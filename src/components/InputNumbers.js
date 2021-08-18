import { useRef } from 'react';
import { MESSAGE } from '../utils/constants';
import { filterInputs } from '../utils/filterInputs';
function InputNumbers({ message, setMessage, setDataToRender }) {
  const { GUIDE, WRITE, ERROR } = MESSAGE;
  const inputNumbers = useRef('');

  const handleClick = () => {
    setMessage(GUIDE);

    const inputData = inputNumbers.current.value;
    if (!inputData) {
      setMessage(WRITE);
      return;
    }
    const filteredData = filterInputs(inputData);
    if (filteredData.length === 0) setMessage(ERROR);
    setDataToRender(filteredData);
  };

  return (
    <>
      <div className='number-input section'>
        <span>{message}</span>
        <textarea
          ref={inputNumbers}
          placeholder='숫자를 콤마(,)로 구분해주세요.&#13;&#10;유효하지 않은 값은 제외됩니다.&#13;&#10;ex) 3,12,7,89,100'
        />
      </div>
      <button className='start-button section' onClick={handleClick}>
        정렬 시작하기
      </button>
    </>
  );
}

export default InputNumbers;
