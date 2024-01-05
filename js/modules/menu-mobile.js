import detectaClickFora from './detecta-click-fora.js';

export default class MenuMobile {
  constructor(menuButton, menuList, classe, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.classeAtiva = classe;

    this.abreMenu = this.abreMenu.bind(this);

    // Define argumento padrão caso não especificado
    if (eventos === undefined) {
      this.eventos = ['touchstart', 'click'];
    } else {
      this.eventos = eventos;
    }
  }

  abreMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.classeAtiva);
    this.menuButton.classList.add(this.classeAtiva);

    detectaClickFora(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.classeAtiva);
      this.menuButton.classList.remove(this.classeAtiva);
    });
  }

  adicionaEvento() {
    this.eventos.forEach((evento) => this.menuButton.addEventListener(evento, this.abreMenu));
  }

  iniciaClasse() {
    if (this.menuButton && this.menuList) {
      this.adicionaEvento();
    }
    return this;
  }
}
