import { useState } from 'react'
import './App.css'
import { Escena } from './components/escena/Escena'
import phraseArray from './assets/PhrasesArray'
import PrevForwardBtn from './components/prevForwardBtn/PrevForwardBtn'

function App() {
  const [currentIndex, setcurrentIndex] = useState(0)
  const handlePrevious = () => {
    setcurrentIndex(currentIndex => currentIndex === 0 ? phraseArray.length - 1 : currentIndex - 1);

  }
  const handleNext = () => {
    setcurrentIndex(currentIndex => currentIndex === phraseArray.length - 1 ? 0 : currentIndex + 1)
    // Escena.;

  }

  // const index = phraseArray.findIndex((phrase) => phrase === phraseArray[activeIndex]);

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === phraseArray.length - 1 ? 0 : prevIndex + 1));
  // };

  // const handlePrevious = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === 0 ? phraseArray.length - 1 : prevIndex - 1));
  // };
  return (

    <>
      <PrevForwardBtn handlePrevious={handlePrevious} handleNext={handleNext} />
      <Escena arr={phraseArray} currentIndex={currentIndex} />
    </>
  )
}

export default App;