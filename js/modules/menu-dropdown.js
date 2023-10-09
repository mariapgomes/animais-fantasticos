import detectaClickFora from "./detecta-click-fora.js";

export default function iniciaMenuDopdown() {
  const menusDropdown = document.querySelectorAll('[data-dropdown]');
  
  menusDropdown.forEach(menu => {
    ['touchstart', 'click'].forEach(tiposDeEvento => {
      menu.addEventListener(tiposDeEvento, ativaMenuDropdown);
    })
  })
  
  function ativaMenuDropdown(event) {
    event.preventDefault();
    this.classList.add('ativo');
  
    detectaClickFora(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }
}


