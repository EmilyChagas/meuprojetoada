import { useState } from "react"

export default function MeuContador (){
    
const [contador, setContador] = useState(0)


    function Aumentar() {
        setContador(contador + 1)
    }

    function Diminuir() {
        setContador(contador - 1)
    }

    if (contador > 5) {
        return (
        <div>
            <h1>Valor muito alto!</h1>
                <button onClick={Aumentar}>aumentar</button>
                <button onClick={Diminuir}>diminuir</button>
        </div>
        )
    }

    console.log({contador})
    return (
        <div>
            <h1>Meu Contador</h1>
            <h1>{contador}</h1>
            <button onClick={Aumentar}>aumentar</button>
            <button onClick={Diminuir}>diminuir</button>
        </div>
    )
}