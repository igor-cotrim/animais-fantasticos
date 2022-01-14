/* eslint-disable node/no-unsupported-features/es-syntax */
import outsiteClick from "./outside-click.js";

const initDropdownMenu = () => {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(e) {
    e.preventDefault();

    e.currentTarget.classList.add("active");

    outsiteClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((item) => {
    ["click", "touchstart"].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
};

export default initDropdownMenu;
