import { useState } from 'react'
import Home from './pages/home/home'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div data-theme='light' className='font-raleway '>
      <Home/>
      </div>
    </>
  );
}

export default App
