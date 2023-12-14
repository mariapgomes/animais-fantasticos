export default function iniciaTooltp() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const mouseMoveAtivo = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  const mouseOverDesativado = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', mouseOverDesativado);
      this.element.removeEventListener('mousemove', mouseMoveAtivo);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function mouseOverAtivo(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    mouseMoveAtivo.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', mouseMoveAtivo);

    mouseOverDesativado.tooltipBox = tooltipBox;
    mouseOverDesativado.element = this;
    this.addEventListener('mouseleave', mouseOverDesativado);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', mouseOverAtivo);
  });
}
