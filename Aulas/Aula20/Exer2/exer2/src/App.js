import './App.css';
import Login from './componente/componente1';
import Input1 from './componente/componente2';
import Input2 from './componente/componente3';
import Button from './componente/componente4';

function App() {
  return (

    <div className="ContainerMain">

      <div className="Container">

        <div className="login">
          <Login name="Login" />
        </div>

        <div className="usuario">
          <h2>Username</h2>
          <Input1 name="Username" />
          <h2>Password</h2>
          <Input2 name="Password" />
        </div>

        <div className="Botao">
          <Button name="Login" />
        </div>

      </div>

    </div>
  );
}

export default App;