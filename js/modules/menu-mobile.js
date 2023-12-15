import detectaClickFora from './detecta-click-fora.js';

export default function iniciaMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function abreMenu() {
    menuList.classList.add('ativo');
    menuButton.classList.add('ativo');

    detectaClickFora(menuList, eventos, () => {
      menuList.classList.remove('ativo');
      menuButton.classList.remove('ativo');
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, abreMenu));
  }
}
