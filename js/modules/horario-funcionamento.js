export default function iniciaFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataHoje = new Date();
  const diaHoje = dataHoje.getDay();
  const horarioAgora = dataHoje.getHours();

  const diaAberto = diasSemana.indexOf(diaHoje) !== -1;
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (diaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
