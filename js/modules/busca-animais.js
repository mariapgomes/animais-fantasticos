import iniciaAnimacaoNumeros from './anima-numeros.js';

export default function iniciaBuscaAnimais() {
  async function buscaAnimais(url) {
    try {
      const resposta = await fetch(url),
            respostaJSON = await resposta.json();
    
      respostaJSON.forEach(animal => {
        criaAnimal(animal)
      });
      iniciaAnimacaoNumeros();
      
    } catch (error) {
      console.log(error.message)
    }
  }
  
  function criaAnimal(animal) {
    const containerAnimais = document.querySelector('.numeros-grid');
  
    containerAnimais.innerHTML += `<div class="numeros-animal">
                                    <h3>${animal.especie}</h3>
                                    <span data-numero>${animal.total}</span>
                                  </div>`
  }
  
  buscaAnimais('http://127.0.0.1:5500/animais.json');
}
