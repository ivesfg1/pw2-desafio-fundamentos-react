import lixeiraIcon from '../public/trash.svg';
import perfil1 from '../public/profile1.png';
import perfil2 from '../public/profile2.png';

function Mensagens() {
  return (
    <div className="mensagens">
      <div className="mensagem">
        <img src={perfil1} alt="perfil1" />
        <p>
          Boris, estou no local já lhe esperando. Estou com camisa
          azul e calça jeans.
        </p>
        <div className="icone">
          <img src={lixeiraIcon} alt="lixeira" />
        </div>
      </div>
      <div className="mensagem">
        <img src={perfil2} alt="perfil2" />
        <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
        <div className="icone">
          <img src={lixeiraIcon} alt="lixeira" />
        </div>
      </div>
    </div>
  );
}

export default Mensagens;
