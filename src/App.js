import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import UserContext from './context/UserContext';
import SignIn from './pages/SignIn';
import { useState } from 'react';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import Buying from './pages/Buying';
import Trying from './pages/trying';

import { AnimatePresence } from 'framer-motion';
import { wait } from '@testing-library/user-event/dist/utils';

export default function App() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <AnimationRouter />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

function AnimationRouter() {
  let location = useLocation();
  return (
    <AnimatePresence initial={true}  >
      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/buying' element={<Buying />} />
        <Route path='/trying' element={<Trying />} />
      </Routes>
    </AnimatePresence>
  )
}