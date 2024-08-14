import './App.css';
import Calculadora from './componentes/compCalculadora';
import Contador from './componentes/contador';
import Counter from './componentes/counter';
import Form from './componentes/nameform';
import Items from './componentes/compItens';



function App() {
  return (
    <div className="App">
      <Contador />
      <Counter />
      <Form />
      <Calculadora />
      <Items />
    </div>
  );
}

export default App;