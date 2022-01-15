import AnimaNumeros from './anima-numeros.js';

const fetchAnimais = (url, target) => {
  const numerosGrid = document.querySelector(target);

  const preencherAnimais = (animal) => {
    const divAnimal = createAnimal(animal);

    numerosGrid.appendChild(divAnimal);
  };

  const animaAnimaisNumeros = () => {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  };

  const criarAnimais = async () => {
    try {
      const resAnimais = await fetch(url);
      const animaisJSON = await resAnimais.json();

      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  };

  const createAnimal = (animal) => {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  };

  return criarAnimais();
};

export default fetchAnimais;
