//*Cria a navegação por Tab

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
