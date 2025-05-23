import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Messages from './pages/Messages'
import NotFound from './pages/NotFound'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import { Provider } from "@/components/ui/provider"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter> 
    </Provider>   
  )
}

export default App
