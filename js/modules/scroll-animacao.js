import debounce from './debounce.js';

export default class AnimacaoScroll {
  constructor(section, classe) {
    this.sections = document.querySelectorAll(section);
    this.inicioAnimacao = window.innerHeight * 0.7;
    this.classe = classe;

    this.checaDistancia = debounce(this.checaDistancia.bind(this), 50);
  }

  pegaDistanciaTop() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        elemento: section,
        distanciaTop: Math.floor(sectionTop - this.inicioAnimacao),
      };
    });
    this.checaDistancia();
  }

  // Confere a distância e anima as sections
  checaDistancia() {
    this.distance.forEach((section) => {
      if ((window.scrollY - 200) > section.distanciaTop) {
        section.elemento.classList.add(this.classe);
      } else if (section.elemento.classList.contains(this.classe)) {
        section.elemento.classList.remove(this.classe);
      }
    });
  }

  adicionaEvento() {
    window.addEventListener('scroll', this.checaDistancia);
  }

  iniciaClasse() {
    if (this.sections.length) {
      this.pegaDistanciaTop();
      this.adicionaEvento();
    }
    return this;
  }

  removeAnimacao() {
    window.addEventListener('scroll', this.checaDistancia);
  }
}
