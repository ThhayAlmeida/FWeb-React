import { useState, useEffect } from "react";

function Contador(){
        const [contador, setContador] = useState(1)
        useEffect(()=> {const timerID = setInterval(()=>{setContador(contador +1)}, 1000)
            return()=> clearInterval (timerID)},[contador])
        
    
    function adicionarCont() {
        Contador(contador + 1);
    }
    return(
        <div>
            <p> Contador {contador}</p>
            
        </div>
    );
}

export default Contador