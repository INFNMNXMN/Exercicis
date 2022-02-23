import { Outlet, Link } from "react-router-dom";
import llista from "./llista/llista";
export default function Layout() {
  return (
    <>
      <header>Exercicis React</header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
        </main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="./comptador">Comptador</Link>
            </li>
            <li>
              <Link to="./graella">Graella de fotos</Link>
            </li>
            {llista}
          </ul>
        </nav>
        <aside class="HolyGrail-ads">…</aside>
      </div>
      <footer>by Isabel Navarro</footer>
    </>
  );
}
