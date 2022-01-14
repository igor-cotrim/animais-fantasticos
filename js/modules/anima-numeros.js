const initAnimaNumeros = () => {
  const animaNumeros = () => {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      let start = 0;
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);

      const timer = setInterval(() => {
        start += inscremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 + Math.random());
    });
  };

  const handleMutation = (mutation) => {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  };

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
};

export default initAnimaNumeros;
