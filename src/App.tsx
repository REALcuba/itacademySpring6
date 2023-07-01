// import { useState } from 'react'
import Escena from './components/escena/Escena'
import phraseArray from './assets/PhrasesArray'

// type Escena=string
function App() {
  // const arr = phraseArray
  // // const [count, setCount] = useState(0)
  // console.log(arr);
  
  return (
    <>
     <Escena arr ={phraseArray}/>
    </>
  )
}

export default App
