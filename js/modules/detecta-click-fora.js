export default function detectaClickFora(element, events, callback) {
  const html = document.documentElement;
  const jaAtivo = 'data-ativo';

  function clickFora(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(jaAtivo);

      events.forEach((evento) => {
        html.removeEventListener(evento, clickFora);
      });
      callback();
    }
  }

  if (!element.hasAttribute(jaAtivo)) {
    events.forEach((event) => {
      setTimeout(() => html.addEventListener(event, clickFora));
    });
    element.setAttribute(jaAtivo, '');
  }
}
