
import AppRouter from './components/Router';
import React,{useState} from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    </>
  )

}

export default App;
