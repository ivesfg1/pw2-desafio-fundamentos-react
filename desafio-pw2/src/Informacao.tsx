import carroIcon from '../public/car.svg';

function Informacao() {
  return (
    <div className="informacao">
      <div className="icone">
        <img src={carroIcon} alt="carro" />
      </div>
      <div className="info">
        <h2>BCD0D19</h2>
        <p> Honda Civic Roxo </p>
      </div>
    </div>
  );
}

export default Informacao;
