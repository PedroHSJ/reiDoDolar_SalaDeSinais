import "./style.css";
import Button from "../../components/Button";
import Felipe from "../../assets/image/FelipeHilux.jpeg";

export default () => {
    return (
        <div className="main-telegram">
            <div className="main-telegram-filtro">
                <h1 style={{ color: "#0088cc" }}>
                    GRUPO OFICIAL NO TELEGRAM 
                </h1>

                <Button
                    text={"ENTRE AGORA NO GRUPO OFICIAL DO TELEGRAM"}
                    color={"#0088cc"}
                    link={"https://t.me/reidodolar"}
                />
            </div>
        </div>
    );
};
