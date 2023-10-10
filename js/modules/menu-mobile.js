import detectaClickFora from './detecta-click-fora.js'

export default function iniciaMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]'),
        menuList = document.querySelector('[data-menu="list"]'),
        eventos = ['click', 'touchstart'];
  
  if(menuButton) {
    function abreMenu(event) {
      menuList.classList.add('ativo');
      menuButton.classList.add('ativo');
  
      detectaClickFora(menuList, eventos, () => {
        menuList.classList.remove('ativo');
        menuButton.classList.remove('ativo');
      })
    }
    
    eventos.forEach(evento => menuButton.addEventListener(evento, abreMenu));
  }
}
