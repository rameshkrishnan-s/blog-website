import './App.css'
import Navbar from './componenets/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLogin from './componenets/Login';


function App() {
  

  return (
    <div>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
       
      </Routes>
    </Router>

   </div>
  )
}

export default App
