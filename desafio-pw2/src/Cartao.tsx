// Cartao.js
import './App.css';

import Contato from './Contato';
import Mensagens from './Mensagens';
import Informacao from './Informacao';

function Cartao() {
  return (
    <div className="cartao">
      <div className="titulo">
        <h1>
          Encontre <span>Fábio</span> no local de partida
        </h1>
        <p className="descricao">Chega em 3 minutos (800 metros)</p>
      </div>
      <Informacao />
      <Contato />
      <Mensagens />
    </div>
  );
}

export default Cartao;
