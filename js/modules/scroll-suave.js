export default class ScrollSuave {
  constructor(links, opcoes) {
    this.linksInternos = document.querySelectorAll(links);

    if (opcoes === undefined) {
      this.opcoes = { behavior: 'smooth', block: 'start' };
    } else {
      this.opcoes = opcoes;
    }

    this.scroll = this.scroll.bind(this);
  }

  scroll(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.opcoes);
  }

  adicionaEvento() {
    this.linksInternos.forEach((link) => link.addEventListener('click', this.scroll));
  }

  iniciaClasse() {
    if (this.linksInternos.length) {
      this.adicionaEvento();
    }
    return this;
  }
}
