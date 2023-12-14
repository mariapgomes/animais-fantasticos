export default function iniciaBuscaBitcoin() {
  function buscaBitcoin() {
    fetch('https://www.blockchain.com/pt/ticker')
      .then((resposta) => resposta.json())
      .then((valores) => {
        const btc = ((1000 / valores.BRL.buy).toFixed(4)).replace('.', ',');
        const spanBitcoin = document.querySelector('.btc-preco');
        spanBitcoin.innerText = btc;
      }).catch((erro) => {
        erro = 'Não foi possível conectar';
        console.log(Error(erro));
      });
  }

  buscaBitcoin();
  setInterval(buscaBitcoin, 30000);
}
