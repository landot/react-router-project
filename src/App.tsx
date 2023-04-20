import "./server.js"
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VanDetail from './pages/VanDetail';
import Vans from './pages/Vans';

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
