import "./style.css";
import Card from "../../components/Card";

export default () => {
    return (
        <div className="metodo-container">
            <div className="metodo-title">
                <h1>NOSSO MÉTODO</h1>
            </div>
            <div className="metodo-main">
                <Card
                    title="NÃO É DAR O PLAY E FICAR MILIONÁRIO"
                    text="Para de acreditar na história da carochinha e em promessas milagrosas que você já esta cansado de ver por ai !!!"
                    colortext="#ff0000"
                />
                <Card
                    title="A MELHOR ESTRATÉGIA​"
                    text="O robô foi desenvolvido utilizando a melhor estratégia que existe no mercado, fazendo micro operações a partir de U$0.35 (centavos de dolar)."
                    colortext="#ff0000"
                />
                <Card
                    title="SEM MENSALIDADES"
                    text="Você adquirindo o robô, ele é seu por 1 ano, sem necessidade de pagar mensalidades. Dentro deste tempo, você receberá todas as novas atualizações do robô."
                    colortext="#ff0000"
                />

                <Card
                    title="SUPORTE"
                    text="Você receberá o suporte necessário diretamente comigo e minha equipe, mesmo que você não tenha experiência alguma, você consegue fazer suas operações"
                    colortext="#ff0000"
                />
            </div>
        </div>
    );
};
