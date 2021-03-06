const outsiteClick = (element, events, callback) => {
  const html = document.documentElement;
  const outside = 'data-outside';

  const handleOutsideClick = (e) => {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  };

  if (!element.hasAttribute(outside)) {
    element.setAttribute(outside, '');
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
  }
};

export default outsiteClick;
