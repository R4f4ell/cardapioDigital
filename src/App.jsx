// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';

import Home from './pages/home/Home.jsx';
import Pratos from './pages/Pratos';
import Bebidas from './pages/Bebidas';
import Sobremesas from './pages/Sobremesas';
import Contato from './pages/Contato';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pratos" element={<Pratos />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/sobremesas" element={<Sobremesas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default App;
