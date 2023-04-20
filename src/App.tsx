import "./server.js"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import VanDetail from './pages/Vans/VanDetail';
import Vans from './pages/Vans/Vans';
import Layout from "./components/Layout";
import Host from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Host />}/>
          <Route path="/host/income" element={<Income />}/>
          <Route path="/host/reviews" element={<Reviews />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
