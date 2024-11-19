import { useState } from 'react'
import './App.css'

function App() {
 const [counter, setCounter] = useState(0);

 const addValue=()=>{
  setCounter(counter+1)
  setCounter((prevcount)=>prevcount +1)
  setCounter((prevcount)=>prevcount +1) // callback function
 }

 const removeValue=()=>{
  setCounter(counter-1) // we can also write like this
 }


 
  return (
    <>
     <h1>Hey! I'm Lav kushwaha here {counter}</h1>
     <h2>counter value: {counter} </h2>
     <button
     onClick={addValue}>Add value </button> { " "}
     <button
     onClick={removeValue} >Remove value</button>
      <p>footer: Made by lav {counter}</p>
    </>
  )
}

export default App
