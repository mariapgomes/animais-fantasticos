export default class Tooltp {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    this.removeTooltip = this.removeTooltip.bind(this);
    this.posicionaTooltip = this.posicionaTooltip.bind(this);
    this.iniciaCriacao = this.iniciaCriacao.bind(this);
  }

  posicionaTooltip(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  removeTooltip({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.removeTooltip);
    currentTarget.removeEventListener('mousemove', this.posicionaTooltip);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  iniciaCriacao({ currentTarget }) {
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.posicionaTooltip);
    currentTarget.addEventListener('mouseleave', this.removeTooltip);
  }

  adicionaEvento() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.iniciaCriacao);
    });
  }

  iniciaClasse() {
    if (this.tooltips.length) {
      this.adicionaEvento();
    }
    return this;
  }
}
