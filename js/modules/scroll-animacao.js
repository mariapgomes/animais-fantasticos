export default function iniciaAnimacaoScroll () {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const inicioAnimacao = window.innerHeight * 0.7
    
    function animacaoScroll () {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - inicioAnimacao) < 0;
    
        if (sectionVisivel) {
          section.classList.add('ativo');
        } else if(section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      })
    }
    
    animacaoScroll();
    
    window.addEventListener('scroll', animacaoScroll);
  }
}