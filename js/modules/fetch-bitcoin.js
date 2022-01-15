const fetchBitcoin = (url, target) => {
  fetch(url)
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fetchBitcoin;
