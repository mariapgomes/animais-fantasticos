//*Cria a navegação por Tab

function navegacaoTab () {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabConteudo = document.querySelectorAll('.js-tab-conteudo section');
  
  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add('ativo');
    function ativaTab(index) {
      tabConteudo.forEach((section) => {
        section.classList.remove('ativo');
      })
      tabConteudo[index].classList.add('ativo');
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativaTab(index);
      })
    })
  }
}

navegacaoTab();

//*Cria accordion list

function iniciaAccordion () {
  const listaFaq = document.querySelectorAll('.js-accordion dt');
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

iniciaAccordion();

//*Scroll suave

function iniciaScrollSuave () {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scroll (event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  
  linksInternos.forEach((link) => addEventListener('click', scroll));
}

iniciaScrollSuave();

//*Animação ao scroll

const sections = document.querySelectorAll('.js-scroll');

function iniciaAnimacaoScroll () {
  if (sections.length) {
    const inicioAnimacao = window.innerHeight * 0.7
    
    function animacaoScroll () {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - inicioAnimacao) < 0;
    
        if (sectionVisivel) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      })
    }
    
    animacaoScroll();
    
    window.addEventListener('scroll', animacaoScroll);
  }
}

iniciaAnimacaoScroll();