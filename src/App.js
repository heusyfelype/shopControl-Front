import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './context/UserContext';
import SignIn from './pages/SignIn';
import { useState } from 'react';
import Signup from './pages/SignUp';

export default function App() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}