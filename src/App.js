import './App.css';
import { Timer } from './Components/Timer/Timer';
import {useState} from 'react';

function App() {

  const [timerList, setTimerList] = useState([]);
  const onAddBtnClick = event => {
    setTimerList([...timerList,<Timer key={timerList.length}/>]);
  };
  const removeTimer = () => {
    setTimerList([
      ...timerList.slice(0, timerList.length-1)
    ]);
  }

  return (
    <div className="App">
      <div className='button-wrapper'>
        <button onClick={onAddBtnClick} className="addCounterBtn">Add new counter</button>
        <button onClick={removeTimer} className="removeCounterBtn">Remove counter</button>
        </div>
        {timerList.map((item, i) => (item))}

    </div>
  );
}

export default App;
