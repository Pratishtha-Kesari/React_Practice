import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);

 // let counter = 5; 

  const addValue = () =>{
   //Counter  = counter + 1; 
   if(counter < 15){
   setCounter(counter + 1);
   }
   console.log(counter);
  }

  const removeValue=() =>{
    if(counter > 0){
    setCounter(counter - 1);
    }
    console.log(counter);
  }
  return (
    
    <>
     <h1>Hello React </h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Increment {counter}</button>
      <button onClick={removeValue}>Decrement {counter}</button> 
      <p>footer: {counter}</p>
    </>
  )
}

export default App
