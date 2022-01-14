const initFetchBitcoin = () => {
  fetch("https://blockchain.info/ticker")
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default initFetchBitcoin;
