import "./server.js"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import VanDetail from './pages/Vans/VanDetail';
import Vans from './pages/Vans/Vans';
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import { default as HostVans } from "./pages/Host/Vans";
import { default as HostVanDetail } from "./pages/Host/VanDetail";
import HostLayout from "./components/HostLayout";
import Host from "./pages/Host/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Host />}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />}/>
            <Route path="vans/:id" element={<HostVanDetail />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
