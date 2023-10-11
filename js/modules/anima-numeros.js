export default function iniciaAnimacaoNumeros() {

  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    
    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
    
      let inicio = 0;
      const contador = setInterval(() => {
        inicio += incremento
        numero.innerText = inicio;
    
        if(inicio > total) {
          numero.innerText = total;
          clearInterval(contador);
        }
    
      }, 10)
    })
  }

  function ativaNaMutacao(mutacao) {
    if(mutacao[0].target.classList.contains('ativo')) {
      animaNumeros();
      observador.disconnect();
    }
  }
  const observador = new MutationObserver(ativaNaMutacao),
        targetObservado = document.querySelector('.numeros');
  
  observador.observe(targetObservado, {attributes: true});
}
