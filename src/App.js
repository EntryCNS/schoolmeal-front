
import AppRouter from './components/Router';
import React,{useState} from 'react';
import LoginForm from './components/routes/Login/loginForm';

function App() {
  // const [JwtRefreshToken,SetjwtRefreshToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    <AppRouter setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
    </>
  )

}

export default App;
