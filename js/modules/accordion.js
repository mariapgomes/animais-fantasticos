export default function iniciaAccordion () {
  const listaFaq = document.querySelectorAll('[data-anime="accordion"] dt');
  const classeAtivo = 'ativo'

  if (listaFaq) {
    listaFaq[0].classList.add(classeAtivo);
    listaFaq[0].nextElementSibling.classList.add(classeAtivo);
    
    function ativaAccordion () {
      this.classList.toggle(classeAtivo);
      this.nextElementSibling.classList.toggle(classeAtivo)
    }

    listaFaq.forEach((item) => item.addEventListener('click', ativaAccordion));
  }
}