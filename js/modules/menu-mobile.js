import outsiteClick from "./outside-click.js";

const initMenuMobile = () => {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    const openMenu = (e) => {
      menuButton.classList.add("active");
      menuList.classList.add("active");

      outsiteClick(menuList, eventos, () => {
        menuButton.classList.remove("active");
        menuList.classList.remove("active");
      });
    };
    eventos.forEach((item) => {
      menuButton.addEventListener(item, openMenu);
    });
  }
};

export default initMenuMobile;
