import './App.css';
import FavoriteCarrera from './FavoriteCarrera'; // Importar el componente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Desarrollo de Aplicaciones</h1>
        <FavoriteCarrera /> {/* Renderiza el componente aquí */}
      </header>
    </div>
  );
}

export default App;
