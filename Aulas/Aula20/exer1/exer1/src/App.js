import './App.css';
import './componentes/componente.css';
import './componentes/componente2.css';
import './componentes/componente3.css';
import Place from './componentes/componente';
import Input from './componentes/componente2';
import Button from './componentes/componente3';

function App() {
  return (
    <div className="Container">
      <Place name="Olá,"/>
      <Input nome="Search"/>
      <Button name="Click"/>
    </div>
  );
}

export default App;
