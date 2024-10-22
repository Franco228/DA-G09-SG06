
import { Link, Outlet } from "react-router-dom";

const Ingenierias = () => {
  return (
    <div>
      <h1>Ingeniería</h1>
      <img src="https://www2.ucsm.edu.pe/wp-content/uploads/2022/07/Cienciase-Ingenierias-722x1024.png" width="200" alt="Ingeniería"></img>
      <h1> >>>Escuelas</h1>
      <div>
        <Link to="Arquitectura">Arquitectura</Link><br />
        <Link to="Ambiental">Ambiental</Link><br />
        <Link to="Civil">Civil</Link><br />
        <Link to="Sistemas">Sistemas</Link><br />
        <Link to="Minas">Minas</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Ingenierias;
