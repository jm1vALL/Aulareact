export default function Exercicio2( {peso, altura} )
{
    let imc = peso / (altura * altura);
    return (
        <div>
           O imc é {imc ? imc.toFixed(2) : '0.00'} 
        </div>
    )
}