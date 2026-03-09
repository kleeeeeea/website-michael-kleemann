const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-main-nav]');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuButton.setAttribute('aria-expanded', String(expanded));
  });
}

const yearNode = document.querySelector('[data-year]');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
