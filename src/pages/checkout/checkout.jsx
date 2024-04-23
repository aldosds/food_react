import { useState } from "react";

function Checkout() {

    const [valor, setValor] = useState(40);

    function Soma() {
        setValor(valor + 1);
    }

    function Subtracao() {
        setValor(valor - 1);
    }

    return <>
        <h1>Checkout... {valor}</h1>
        <h1>{valor}</h1>
        <button onClick={Subtracao}>-</button>
        <button onClick={Soma}>+</button>
    </>
}

export default Checkout;