import { useEffect, useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        const timerID = setInterval(() => { setContador(contador + 1); }, 2000);
        return () => clearInterval(timerID);
    }, [contador]);

    function adicionarCont() {
        Contador(contador + 1);
    }

    return (
        <div>
            <p>Contador {contador}</p>
        </div>
    )
}

export default Contador