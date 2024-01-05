import Slide from './slide';

export default class NavegacaoSlide extends Slide {
  constructor(slide, container, classe) {
    super(slide, container, classe);
    this.controleEventoBind();
  }

  adicionaSetas(anterior, proximo) {
    this.elementoAnterior = document.querySelector(anterior);
    this.proximoElemento = document.querySelector(proximo);
    this.adicionaEventoSetas();
  }

  adicionaEventoSetas() {
    this.elementoAnterior.addEventListener('click', this.ativaSlideAnterior);
    this.proximoElemento.addEventListener('click', this.ativaProximoSlide);
  }

  criaControle() {
    const controle = document.createElement('ul');
    controle.dataset.controle = 'slide';

    this.slideArray.forEach((item, index) => {
      controle.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
    });
    this.container.appendChild(controle);
    return controle;
  }

  eventoControle(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.centralizaSlide(index);
    });
    this.container.addEventListener('disparaEvento', this.controleAtivo);
  }

  adicionaControle(customizaControle) {
    this.controle = document.querySelector(customizaControle) || this.criaControle();
    this.arrayControle = [...this.controle.children];
    this.arrayControle.forEach(this.eventoControle);
    this.controleAtivo();
  }

  controleAtivo() {
    this.arrayControle.forEach((item) => item.classList.remove(this.classeAtivo));
    this.arrayControle[this.index.ativo].classList.add(this.classeAtivo);
  }

  controleEventoBind() {
    this.eventoControle = this.eventoControle.bind(this);
    this.controleAtivo = this.controleAtivo.bind(this);
  }
}
