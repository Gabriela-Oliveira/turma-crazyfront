/** @jsxImportSource @emotion/react */
import { useState } from "react";

function Inverter() {
    const [inverteCores, setInverteCores] = useState(false);

    const handleChange = () => {
        setInverteCores(!inverteCores);
    }

    const corFonte = { color: inverteCores ? "blue" : "red" };
    const corFundo = { background: inverteCores ? "red" : "blue" }

    return(
        <>
            <h1>Inverter Cores</h1>
            <label>
                <input type="checkbox" checked={inverteCores} onChange={handleChange}/>
                Inverter Cores
            </label>

            <br />

            <div 
                css={[
                    corFonte,
                    corFundo,
                    { padding:"20px", marginTop: "20px", fontSize: "18px"}
                ]}
            >
                Fonte {inverteCores ? "AZUL" : "VERMELHO"} e Fundo {inverteCores ? "VERMELHO" : "AZUL"}
            </div>
        </>
    );
}

export default Inverter;