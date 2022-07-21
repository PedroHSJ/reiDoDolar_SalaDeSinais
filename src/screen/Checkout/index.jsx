import "./style.css";
import Button from "../../components/Button";
export default () => {
    return (
        <div className="main-checkout">
            <div className="checkout-title">
                <h2>
                    LEVE AGORA O CURSO COMPLETO + SALA DE SINAIS +
                    INDICADORES DO REI
                </h2>
                <h2>POR APENAS:</h2>

                <span style={{ fontSize: "2rem" }}>
                    12x DE{" "}
                    <span
                        style={{ color: "#ff0000", fontSize: "3rem" }}
                    >
                        R$19,78
                    </span>
                    <br></br>
                </span>
                <span>
                    PARCELADO NO CARTÃO<br></br> R$197,00 À VISTA{" "}
                    <span style={{ color: "#15E000" }}>
                        NO CARTÃO, BOLETO OU PIX
                    </span>
                </span>
            </div>

            <Button
                text="GARANTA JÁ SUA VAGA"
                color="#29D420"
                width="100%"
            />
        </div>
    );
};
