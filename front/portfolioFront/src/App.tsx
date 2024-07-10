import Home from "./components/home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//Herramienta LINK para navegar sin recargar la pagina, es parecido a la etiqueta HTML <a></a>

//<Link className="prueba" to="/rutaQueDeseo> Descripcion</Link>;
