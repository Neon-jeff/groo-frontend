import { useState } from 'react'
import Home from './pages/homepage/home'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/authpages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div data-theme='light' className='font-jakata text-md bg-fill overflow-x-hidden w-screen '>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/login' Component={Login}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App
