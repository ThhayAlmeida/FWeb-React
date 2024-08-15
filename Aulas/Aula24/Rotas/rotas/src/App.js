import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calculadora from './componentes/pageCalc';
import Counter from './componentes/pageCounter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculadora />}></Route>
        <Route path='/contador' element={<Counter/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
