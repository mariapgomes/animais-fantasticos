import iniciaAnimacaoNumeros from './anima-numeros.js';

export default function iniciaBuscaAnimais() {
  function criaAnimal(animal) {
    const containerAnimais = document.querySelector('.numeros-grid');

    containerAnimais.innerHTML += `<div class="numeros-animal">
                                    <h3>${animal.especie}</h3>
                                    <span data-numero>${animal.total}</span>
                                  </div>`;
  }

  async function buscaAnimais(url) {
    try {
      const resposta = await fetch(url);
      const respostaJSON = await resposta.json();

      respostaJSON.forEach((animal) => {
        criaAnimal(animal);
      });
      iniciaAnimacaoNumeros();
    } catch (error) {
      console.log(error.message);
    }
  }

  buscaAnimais('http://127.0.0.1:5500/animais.json');
}
