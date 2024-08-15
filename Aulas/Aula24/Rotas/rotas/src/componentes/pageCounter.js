import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(1);
    function diminuirCont() {
        setCounter(counter - 1)
    }

    function adicionarCont() {
        setCounter(counter + 1)}

    return (
        <div>
            <div>{counter}</div>
            <button onClick={diminuirCont}>Diminuir</button>
            <button onClick={adicionarCont}>Adicionar</button>
        </div>
    )
}

export default Counter