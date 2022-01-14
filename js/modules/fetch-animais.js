import initAnimaNumeros from "./anima-numeros.js";

const initFetchAnimais = () => {
  const fetchAniamis = async (url) => {
    try {
      const resAnimais = await fetch(url);
      const animaisJSON = await resAnimais.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);

        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  };

  const createAnimal = (animal) => {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  };

  fetchAniamis("./animais-api.json");
};

export default initFetchAnimais;
