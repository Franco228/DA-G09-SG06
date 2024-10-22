import './UseState.css';
import { useState, useEffect } from "react";
function ComponenteUseState() {
    const [codigo, setcodigo] = useState("");
    
    return (
        <div>
            <h4>Mostrar codigos de los estudiantes</h4>
            <h4>Haga click en un estudiante para saber su codigo: </h4>
            <h2>---------------------------------------------</h2>
            <div className='Estudiante'>
                <button cursor="pointer" type="button" onClick={() => setcodigo("2020247521")}>Sergio Adrian Terrazas Garcia</button>
                <button type="button" onClick={() => setcodigo("2020227221")}>Jeanpierre Jose Chipana Ancasi</button>
                <button type="button" onClick={() => setcodigo("2020177721 ")}>Leonel Mauricio Torres Delgado</button>
                <button type="button" onClick={() => setcodigo("2020000000")}>XXXXX XXXXX XXXXX XXXXX</button>
            </div>
            <h2>---------------------------------------------</h2>
            <h2> Datos:</h2>
            <h3> Codigo: {codigo}</h3>
        </div>
    );
}
export default ComponenteUseState;
