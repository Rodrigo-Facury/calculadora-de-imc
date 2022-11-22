import { useAppSelector } from '../../store.js';
import './Information.css'

function Information() {
  const state = useAppSelector((state) => state.imcCalculator);

  return (
    <main id='information-page' data-testid='information-page'>
      <h1 id='information-title'>O que devo saber sobre IMC?</h1>
      <p>
        IMC é a sigla de Índice de Massa Corporal, um parâmetro que é utilizado para avaliar se o peso está dentro do valor ideal para a altura. 

        Isso significa que, a partir do resultado do IMC é possível saber se a pessoa está acima ou abaixo do peso recomendado e também diagnosticar problemas de saúde como obesidade ou desnutrição.

        O IMC pode ser utilizado em crianças, adolescentes, adultos ou idosos.
      </p>
      <h2>Como calcular</h2>
      <p>
        O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em m), de acordo com a seguinte fórmula: IMC = peso / (altura x altura).

        O resultado de IMC é dado em kg/m2.
      </p>
      {
        state.imc && 
          <p id='imc-details'>
            No caso dos dados que você inseriu:

            IMC = { state.metrics.weight } / ({ state.metrics.height } x { state.metrics.height })

            <br />
            <br />

            Portanto:

            <br />
            <br />

            IMC = { state.imc }

            <br />
            <br />

            Este IMC é classificado como { state.status.toLowerCase() }.
          </p>
      }
      <h2>Por que é importante saber o IMC?</h2>
      <p>
        Saber o IMC é importante para verificar se o peso está de acordo com a altura da pessoa, além de ser importante para saber se existe risco de desenvolver alguma doença. No caso das crianças, o IMC é importante para saber se o desenvolvimento está de acordo com o esperado.

        Além disso, sabendo o IMC, é possível também verificar qual o peso ideal e, assim, saber se a pessoa está acima ou abaixo do peso recomendado para a sua altura. Veja como é feito o cálculo do peso ideal.

      </p>
      <h2>O IMC é a melhor forma de avaliar o peso?</h2>
      <p>
        Apesar do IMC ser considerado fundamental para saber o estado nutricional da pessoa, é uma ferramenta que não leva em consideração muitos outros fatores que são importantes para avaliar o peso de uma pessoa. 


        Assim, embora seja uma boa ferramenta rápida para perceber se o peso está ou não adequado, não é a melhor forma de avaliar o peso. Para isso, o ideal é consultar um médico ou nutricionista para avaliar outros fatores como a idade, nível de atividade física, composição corporal, nível de hidratação e histórico de saúde, por exemplo.

        Veja que exame permite analisar a sua composição corporal.
      </p>
      <h2>O que fazer para melhorar o IMC?</h2>
      <p>
        Para melhorar o IMC, é importante verificar se está acima ou abaixo do peso considerado normal. Quando o IMC está na faixa de magreza, é importante consultar um nutricionista que fará uma avaliação completa, indicando um plano alimentar personalizado que priorize o ganho de peso de forma saudável. 

        Por outro lado, quando o IMC está na faixa do sobrepeso ou da obesidade, o nutricionista pode recomendar uma alimentação com redução de calorias. Além da dieta, normalmente também se recomenda a prática de atividade física regular, que ajudará a acelerar o metabolismo e facilitar a perda de peso, o que influencia diretamente no IMC.
      </p>
    </main>
  );
}

export default Information;
