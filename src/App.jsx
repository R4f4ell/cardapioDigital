import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Inicio from "./pages/inicio/Inicio";

const CategoriasPage = lazy(() => import("./pages/categorias/Categorias"));

function CategoriasGate({ children }) {
  const location = useLocation();
  const viaButton = location.state?.viaButton === true;
  const allowed = typeof window !== "undefined" && sessionStorage.getItem("allowCategorias") === "1";
  if (!viaButton && !allowed) return <Navigate to="/" replace />;
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Inicio />} />

        {/* Página de categorias (lazy + proteção) */}
        <Route
          path="/categorias"
          element={
            // Suspense serve para mostrar um "fallback" (aqui está null), enquanto o código da página é baixado
            <Suspense fallback={null}>
              <CategoriasGate>
                <CategoriasPage />
              </CategoriasGate>
            </Suspense>
          }
        />

        {/* Qualquer rota inválida redireciona para a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;