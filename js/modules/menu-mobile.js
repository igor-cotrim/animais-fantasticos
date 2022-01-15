import outsiteClick from './outside-click.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    if (events === undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu = () => {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    outsiteClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  };

  addMenuMobileEvents = () => {
    this.events.forEach((item) => {
      this.menuButton.addEventListener(item, this.openMenu);
    });
  };

  init = () => {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  };
}
