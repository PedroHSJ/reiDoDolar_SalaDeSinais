import './style.css'
import './response.css'
import Logo from '../../../public/instagram-brands.svg';
import Foto from '../../../public/WhatsApp Image 2022-07-18 at 20.10.51.jpeg';


export default () => {
    return (
        <div className='about_all'>
            <div className='about_perfil'>
                <div className='container-footer'>
                  
                        <img id='img_perfil' src={Foto} alt="" />

                            <h1>DANIEL CORDEIRO</h1>

                            <a className='link' href="https://instagram.com/reidodolar_?igshid=YmMyMTA2M2Y=" target="_blank"> @reiodolar_</a>


                    <div className='aboutText'>
                        <h1 id='sobre'> SOBRE <span > MIM </span></h1>
                        <p> Quando estava perto de me forma em DIREITO, eu larguei a faculdade nos últimos períodos, pois vi que eu não me encaixava ali e fui tentar ganhar a vida no mercado financeiro.

                            Comecei no mercado de opções binarias e depois de quase 6 anos de mercado, muitas bancas quebradas, eu consegui fazer o meu proprio método e atingir a minha consistência e desfrutar de toda liberdade que ela proporciona! Mudei a minha vida TOTALMENTE e agora estou dando a oportunidade de você mudar a sua também.

                            Aqui no Trader Absoluto, eu coloquei todo o passo-a-passo que você precisa para lucrar diariamente e transformar a sua vida trabalhando de casa com o mercado de opções ao seu favor!
                        </p>

                    </div>
                    <div className='logos'>
                        <a href='https://instagram.com/reidodolar_?igshid=YmMyMTA2M2Y='
                            target="_blank"> <img src={Logo} alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}