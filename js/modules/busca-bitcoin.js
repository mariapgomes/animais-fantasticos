export default function buscaBitcoin(url, alvo) {
  function iniciaBusca() {
    fetch(url)
      .then((resposta) => resposta.json())
      .then((valores) => {
        const btc = ((1000 / valores.BRL.buy).toFixed(4)).replace('.', ',');
        const spanBitcoin = document.querySelector(alvo);
        spanBitcoin.innerText = btc;
      }).catch((erro) => {
        erro = 'Não foi possível conectar';
        console.log(Error(erro));
      });
  }

  iniciaBusca();
  setInterval(iniciaBusca, 30000);
}
