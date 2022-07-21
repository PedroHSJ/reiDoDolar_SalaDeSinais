import "./style.css";
import "./responsividade.css";
import Card from "../../components/Card";
import Dolar from "../../assets/image/dolar.svg";
import Chart from "../../assets/image/chart.svg";
import Cloud from "../../assets/image/cloud.svg";
import Calendar from "../../assets/image/calendar.svg";
import Button from "../../components/Button";

export default () => {
    return (
        <div className="metodo-container">
            <div className="metodo-title">
                <h2>
                    NOSSO MÉTODO<br></br>
                    <h1 style={{ color: "#00ff00" }}>ÚNICO</h1>
                </h2>
            </div>
            <div className="metodo-main">
                <div className="card-metodo">
                    <img className="logoIcons" src={Dolar} />
                    <Card
                        title="NÃO É DAR O PLAY E FICAR MILIONÁRIO"
                        text="Para de acreditar na história da carochinha e em promessas milagrosas que você já esta cansado de ver por ai !!!"
                        colortext="#ff0000"
                    />
                </div>
                <div className="card-metodo">
                    <img className="logoIcons" src={Chart} />
                    <Card
                        title="A MELHOR ESTRATÉGIA​"
                        text="O robô foi desenvolvido utilizando a melhor estratégia que existe no mercado, fazendo micro operações a partir de U$0.35 (centavos de dolar)."
                        colortext="#ff0000"
                    />
                </div>
                <div className="card-metodo">
                    <img className="logoIcons" src={Calendar} />
                    <Card
                        title="SEM MENSALIDADES"
                        text="Você adquirindo o robô, ele é seu por 1 ano, sem necessidade de pagar mensalidades. Dentro deste tempo, você receberá todas as novas atualizações do robô."
                        colortext="#ff0000"
                    />
                </div>

                <div className="card-metodo">
                    <img className="logoIcons" src={Cloud} />
                    <Card
                        title="SUPORTE"
                        text="Você receberá o suporte necessário diretamente comigo e minha equipe, mesmo que você não tenha experiência alguma, você consegue fazer suas operações"
                        colortext="#ff0000"
                    />
                </div>
            </div>
            <div className="metodo-footer">
                <h2>GARANTA JÁ SUA VAGA</h2>
                {/* <FontAwesomeIcon icon={faChevronCircleDown} size="3x"/> */}
            </div>
            <Button
                text="QUERO GARANTIR MINHA VAGA"
                color="#29D420"
                width="100%"
            />
        </div>
    );
};
