import { useState } from 'react'
import { Escena } from './components/escena/Escena'
import { Welcome } from './pages/Welcome';
import phraseArray from './assets/PhrasesArray'
import PrevForwardBtn from './components/prevForwardBtn/PrevForwardBtn'
import { BodyContainer } from './components/bodyContainer/BodyContainer'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(0)
  const currentFrase = phraseArray[currentIndex]

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
        <Welcome isLogin={isLogin} >Pequeña web de frases con cambios en el fondo, usando la imagen propia de la frase</Welcome>
        <button onClick={handleLogin}>Login</button>
      </>
    )
  } else {
    return (
      <BodyContainer backgroundimage={currentFrase} >
      <PrevForwardBtn handlePrevious={handlePrevious} handleNext={handleNext} />
      <Escena arr={phraseArray} currentIndex={currentIndex} />
      </BodyContainer >)
  }


}

export default App;