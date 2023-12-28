export default class AnimacaoNumeros {
  constructor(numeros, observadorNumeros, classeObservada) {
    this.numeros = document.querySelectorAll(numeros);
    this.observadorNumeros = document.querySelector(observadorNumeros);
    this.classeObservada = classeObservada;

    this.ativaNaMutacao = this.ativaNaMutacao.bind(this);
  }

  static incrementaNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let inicio = 0;
    const contador = setInterval(() => {
      inicio += incremento;
      numero.innerText = inicio;

      if (inicio > total) {
        numero.innerText = total;
        clearInterval(contador);
      }
    }, 10);
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementaNumero(numero));
  }

  ativaNaMutacao(mutacao) {
    if (mutacao[0].target.classList.contains(this.classeObservada)) {
      this.observador.disconnect();
      this.animaNumeros();
    }
  }

  adicionaObservador() {
    this.observador = new MutationObserver(this.ativaNaMutacao);
    this.observador.observe(this.observadorNumeros, { attributes: true });
  }

  iniciaClasse() {
    if (this.numeros.length && this.observadorNumeros) {
      this.adicionaObservador();
    }
    return this;
  }
}
