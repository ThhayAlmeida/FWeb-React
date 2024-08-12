import logo from './logo.svg';
import './App.css';
import Welcome from './componente1';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div>
        <p>
          <h1>Vida social? Não temos. Queremos um backpack!</h1>
          <h2>Bem vindo ao React!</h2>
        </p>
        <Welcome name="Thay" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
