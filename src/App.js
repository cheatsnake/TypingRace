import React, {useState} from 'react';
import './App.scss';
import ShowSpeed from './components/showSpeed/showSpeed';
import TextArea from './components/textArea/textArea';
import Timer from './components/timer/timer';
import TypeArea from './components/typeArea/typeArea';
import data from './data/data';

function random(arr = []) {
  for(arr.length; arr.length < 3;) {
    const num = Math.floor(Math.random() * 999);
    arr.unshift(data[num]);
  }
  return arr;
}

let timer = false;

function App() {
  
  const [chars, setChar] = useState(0);
  const [randomData, setRandomData] = useState(random());


  const countChar = () => setChar(prevState => prevState + 1);

  const update = () => setRandomData(prevState => {
    let arrCopy = prevState;
    arrCopy.pop();
    const newArr = random(arrCopy);
    return [...newArr];
  })

  function onTime() {
    timer = true;
  }

  if (timer) {
    timer = false;
    return <ShowSpeed onReset={() => setChar(0)} speed={(chars / 4.8).toFixed(1)}/>
  }

  return (
    <div className="app">
      {chars > 0 ? <Timer time={59} chars={chars} onTime={() => onTime()}/> : null}
      <TextArea words={randomData}/>
      <TypeArea 
        words={randomData} 
        onType={update}
        onChar={countChar}
      />
    </div>
  );
}

export default App;