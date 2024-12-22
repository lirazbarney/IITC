import { useState } from 'react'
import './App.css'

const NUMBERS = [1,2,3,4,5];

export default function App() {

  const [rate, setRate] = useState<number>(0);  

  function changeRate() {
    console.log("rate is ", rate);
    
    if (rate > 0) {
      setRate(prev => (prev + 10));
    }
  }

  // finished rated
  if (rate > 10) { 
    const finalRate = rate - 10;
    console.log("finalRate is ", finalRate);
    return (<>
      <img src="/illustration-thank-you.svg" alt="" />
      <span>you selected {finalRate} out of 5</span>
      <h3>Thank You!</h3>
      <span>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</span>
    </>)
  }

  // didn't rated yet
  return ( <> 
    <img src="/icon-star.svg" alt="" />
    <h1>How did we do?</h1>
    <span>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </span>
    <div>
      { NUMBERS.map(num => <button className={`rate-btn ${ rate === num ? "active" : "" }`} onClick={() => {setRate(num)}} key={num}>{num}</button>) };
    </div>
    <button onClick={() => { changeRate() }}>submit</button>
    </>)
}

