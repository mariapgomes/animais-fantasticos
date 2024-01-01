export default class Funcionamento {
  constructor(funcionamento, classeAtiva) {
    this.funcionamento = document.querySelector(funcionamento);
    this.classeAtiva = classeAtiva;
  }

  tempoFunionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  tempoAgora() {
    this.dataHoje = new Date();
    this.diaHoje = this.dataHoje.getDay();
    this.horarioAgora = this.dataHoje.getUTCHours() - 3;
  }

  estaAberto() {
    const diaAberto = this.diasSemana.indexOf(this.diaHoje) !== -1;
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0]
    && this.horarioAgora < this.horarioSemana[1];
    return diaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.classeAtiva);
    }
  }

  iniciaClasse() {
    if (this.funcionamento) {
      this.tempoFunionamento();
      this.tempoAgora();
      this.ativaAberto();
    }
    return this;
  }
}
