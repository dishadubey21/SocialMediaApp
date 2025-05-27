
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Messages from './pages/Messages.jsx';
import NotFound from './pages/NotFound.jsx';
import Settings from './pages/Settings.jsx';
import Profile from './pages/Profile.jsx';
import SplashScreen from './pages/SplashScreen.jsx';

function App() {
  return (

          <Routes>
            <Route path="/" element={<SplashScreen/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/home" element={<> <Navbar /> <HomePage /></>}/>
            <Route path="/profile" element={<><Navbar /><Profile /></>}/>
            <Route path="/messages"element={<><Navbar /><Messages /></>}/>
            <Route path="/settings"element={<><Navbar /><Settings /></>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>  
  );
}

export default App;










