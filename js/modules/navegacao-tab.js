export default function navegacaoTab () {
  const tabMenu = document.querySelectorAll('[data-tab="menu"]  li');
  const tabConteudo = document.querySelectorAll('[data-tab="conteudo"] section');
  
  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add('ativo');
    function ativaTab(index) {
      tabConteudo.forEach((section) => {
        section.classList.remove('ativo');
      })
      const direcao = tabConteudo[index].dataset.anime;
      tabConteudo[index].classList.add('ativo', direcao);
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativaTab(index);
      })
    })
  }
}