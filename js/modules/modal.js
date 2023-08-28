export default function iniciaModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]'),
        btnFechar = document.querySelector('[data-modal="fechar"]'),
        containerModal = document.querySelector('[data-modal="container"]');
  
  if(btnAbrir && btnFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
  
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
    
    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
