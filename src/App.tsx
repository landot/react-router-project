import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';

import "./server.js"

function App() {
  return (
    <BrowserRouter>
    <p></p>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
