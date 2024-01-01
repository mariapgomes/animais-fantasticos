export default class NavegacaoTab {
  constructor(listaTabs, listaConteudo) {
    this.tabMenu = document.querySelectorAll(listaTabs);
    this.tabConteudo = document.querySelectorAll(listaConteudo);
    this.classeAtivo = 'ativo';
  }

  ativaTab(index) {
    this.tabConteudo.forEach((section) => {
      section.classList.remove(this.classeAtivo);
    });
    const direcao = this.tabConteudo[index].dataset.anime;
    this.tabConteudo[index].classList.add(this.classeAtivo, direcao);
  }

  adicionaEvento() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.ativaTab(index));
    });
  }

  iniciaClasse() {
    if (this.tabMenu.length && this.tabConteudo.length) {
      this.tabConteudo[0].classList.add(this.classeAtivo);
      this.adicionaEvento();
    }
    return this;
  }
}
