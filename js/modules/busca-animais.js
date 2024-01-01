import AnimacaoNumeros from './anima-numeros.js';

export default function criaAnimais(url, containerNumeros) {
  const containerAnimais = document.querySelector(containerNumeros);

  function insereAnimal(animal) {
    containerAnimais.innerHTML += `<div class="numeros-animal">
                                    <h3>${animal.especie}</h3>
                                    <span data-numero>${animal.total}</span>
                                  </div>`;
  }

  function animaNumeros() {
    const animacaoNumeros = new AnimacaoNumeros('[data-numero]', '.numeros', 'ativo');
    animacaoNumeros.iniciaClasse();
  }

  async function buscaAnimais() {
    try {
      const resposta = await fetch(url);
      const respostaJSON = await resposta.json();
      respostaJSON.forEach((animal) => insereAnimal(animal));

      animaNumeros();
    } catch (error) {
      console.log(error.message);
    }
  }

  return buscaAnimais();
}
