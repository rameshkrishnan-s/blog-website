import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLogin from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';


function App() {
  

  return (
    <div>
     <Router>
      <Navbar />
      
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/profile' element={<Profile/>}/>
       
      </Routes>
    </Router>

   </div>
  )
}

export default App
