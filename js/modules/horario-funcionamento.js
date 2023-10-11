export default function iniciaFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]'),
        diasSemana = funcionamento.dataset.semana.split(',').map(Number),
        horarioSemana = funcionamento.dataset.horario.split(',').map(Number),
        dataHoje = new Date(),
        diaHoje = dataHoje.getDay(),
        horarioAgora = dataHoje.getHours(),
        diaAberto = diasSemana.indexOf(diaHoje) !== -1,
        horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
  
  if(diaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}