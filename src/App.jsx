import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
// import Categorias from "./pages/categorias/Categorias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/categorias" element={<Categorias />} /> */}
      </Routes>
    </Router>
  );
}

export default App;