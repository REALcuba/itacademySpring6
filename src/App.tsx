import { useState } from 'react'
import './App.css'
import { Escena } from './components/escena/Escena'
import { Welcome } from './pages/welcome';
import phraseArray from './assets/PhrasesArray'
import PrevForwardBtn from './components/prevForwardBtn/PrevForwardBtn'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(0)
  const handlePrevious = () => {
    setcurrentIndex(currentIndex => currentIndex === 0 ? phraseArray.length - 1 : currentIndex - 1);

  }
  const handleNext = () => {
    setcurrentIndex(currentIndex => currentIndex === phraseArray.length - 1 ? 0 : currentIndex + 1)
    // Escena.;

  }
  const handleLogin = () => setIsLogin(true)


  if (!isLogin) {
    return (
      <>
        <Welcome isLogin={isLogin} >Pequeña web de frases</Welcome>
        <button onClick={handleLogin}>Login</button>
      </>
    )
  } else {
    return (<>
      <PrevForwardBtn handlePrevious={handlePrevious} handleNext={handleNext} />
      <Escena arr={phraseArray} currentIndex={currentIndex} />
    </>)
  }

  // return (
  //   <>
  //     if(isLogin){
  //       <Welcome />
  //     }else{
  //       <>
  //     <PrevForwardBtn handlePrevious={handlePrevious} handleNext={handleNext} />
  //     <Escena arr={phraseArray} currentIndex={currentIndex} />
  //       </>}
  //   </>
  // )
}

export default App;