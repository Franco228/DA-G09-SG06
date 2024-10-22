
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ambiental from "./pages/Ambiental";
import Arquitectura from "./pages/Arquitectura";
import Civil from "./pages/Civil";
import Home from "./pages/Home";
import Ingenierias from "./pages/Ingenierias";
import Juridicas from "./pages/Juridicas";
import Minas from "./pages/Minas";
import NoPage from "./pages/NoPage";
import Pag from "./pages/Pag";
import Salud from "./pages/Salud";
import Sistemas from "./pages/Sistemas";
import Sociales from "./pages/Sociales";

export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pag />}>
          <Route index element={<Home />} />
          <Route path="Sociales" element={<Sociales />} />
          <Route path="Juridicas" element={<Juridicas />} />
          <Route path="Ingenierias" element={<Ingenierias />}>
            <Route path="Arquitectura" element={<Arquitectura />} />
            <Route path="Ambiental" element={<Ambiental />} />
            <Route path="Civil" element={<Civil />} />
            <Route path="Sistemas" element={<Sistemas />} />
            <Route path="Minas" element={<Minas />} />
          </Route>
          <Route path="Salud" element={<Salud />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />);
