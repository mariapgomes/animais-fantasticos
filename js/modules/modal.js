export default class Modal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(containerModal);

    // Definição do this para a propriedade eventoToggleModal.
    this.eventoToggleModal = this.eventoToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventoToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  adicionaEvento() {
    this.btnAbrir.addEventListener('click', this.eventoToggleModal);
    this.btnFechar.addEventListener('click', this.eventoToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  iniciaClasse() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.eventoToggleModal();
    }
    return this;
  }
}
