export default function Exercicio1( {fahrenheit} )
{
    let celsius = ((Number(fahrenheit) - 32) *5) /9;
    return (
        <div>
         O resultado é {celsius}
        </div>
    )
}