import detectaClickFora from './detecta-click-fora.js';

export default class MenuDopdown {
  constructor(menu, classe, eventos) {
    this.menusDropdown = document.querySelectorAll(menu);
    this.classeAtiva = classe;

    this.ativaMenuDropdown = this.ativaMenuDropdown.bind(this);

    // Define argumento padrão caso não especificado
    if (eventos === undefined) {
      this.eventos = ['touchstart', 'click'];
    } else {
      this.eventos = eventos;
    }
  }

  ativaMenuDropdown(event) {
    event.preventDefault();
    const elementoClicado = event.currentTarget;
    elementoClicado.classList.add(this.classeAtiva);

    detectaClickFora(elementoClicado, this.eventos, () => {
      elementoClicado.classList.remove(this.classeAtiva);
    });
  }

  adicionaEvento() {
    this.menusDropdown.forEach((menu) => {
      this.eventos.forEach((tiposDeEvento) => {
        menu.addEventListener(tiposDeEvento, this.ativaMenuDropdown);
      });
    });
  }

  iniciaClasse() {
    if (this.menusDropdown.length) {
      this.adicionaEvento();
    }
    return this;
  }
}
