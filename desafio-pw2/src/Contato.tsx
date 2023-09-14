import telefoneIcon from '../public/phone.svg';
import adicionarIcon from '../public/add.svg';

function Contato() {
  return (
    <div className="contato">
      <input
        className="mensagem-input"
        type="text"
        placeholder="Enviar mensagem para Fábio..."
        aria-label="Mensagem para Fábio"
      />
      <button className="botao">Publicar</button>
      <div className="icone">
        <img src={telefoneIcon} alt="telefone" />
      </div>
      <div className="icone">
        <img src={adicionarIcon} alt="adicionar" />
      </div>
    </div>
  );
}

export default Contato;
