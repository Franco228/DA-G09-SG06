import { Outlet, Link } from 'react-router-dom';
const Pag = () => (
  <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Sociales">Ciencias Sociales</Link></li>
        <li><Link to="/Juridicas">Ciencias Jurídicas y Empresariales</Link></li>
        <li><Link to="/Ingenierias">Ciencias e Ingenierías</Link></li>
        <li><Link to="/Salud">Ciencias de la Salud</Link></li>
      </ul>
    </nav>
    <Outlet />
  </>
);
export default Pag;