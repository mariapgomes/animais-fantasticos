export default class Accordion {
  constructor(lista) {
    this.listaFaq = document.querySelectorAll(lista);
    this.classeAtivo = 'ativo';
  }

  toogleAccordion(item) {
    item.classList.toggle(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  adicionaEvento() {
    this.listaFaq.forEach((item) => item.addEventListener('click', () => this.toogleAccordion(item)));
  }

  iniciaClasse() {
    if (this.listaFaq.length) {
      this.toogleAccordion(this.listaFaq[0]);
      this.adicionaEvento();
    }
    return this;
  }
}
