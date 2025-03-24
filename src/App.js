import React from 'react'
import Navbar from './Component/Navbar'
import { Product } from './Pages/Product'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import './App.css'
import { Makeup } from './Pages/Makeup'
const App = () =>{
  return(
    <Router>
      <Navbar />
      <Routes>
      <Route path="/makeup" element={<Makeup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}
export default App;