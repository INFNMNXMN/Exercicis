import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Comptador from "./Comptador/Comptador";
import Graella from "./Graella/Graella";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="comptador" element={<Comptador />} />
          <Route path="graella" element={<Graella />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
