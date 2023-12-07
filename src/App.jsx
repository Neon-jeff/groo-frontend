import { useState } from 'react'
import Home from './pages/homepage/home'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div data-theme='light' className='font-jakata bg-fill overflow-x-hidden '>
      <Home/>
      </div>
    </>
  );
}

export default App
