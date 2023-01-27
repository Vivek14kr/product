import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Productspage from './components/productspage';
import Wishlist from './components/wishlist';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Productspage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
