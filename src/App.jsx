// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* As rotas reais virão depois, uma a uma */}
      </Routes>
    </Router>
  );
};

export default App;