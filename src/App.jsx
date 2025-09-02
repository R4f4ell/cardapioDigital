import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Categorias from "./pages/categorias/Categorias";

function CategoriasGate({ children }) {
  const location = useLocation();
  const viaButton = location.state?.viaButton === true;
  const allowed = typeof window !== "undefined" && sessionStorage.getItem("allowCategorias") === "1";

  if (!viaButton && !allowed) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/categorias"
          element={
            <CategoriasGate>
              <Categorias />
            </CategoriasGate>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;