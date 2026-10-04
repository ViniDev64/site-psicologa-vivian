const botaoMenu = document.querySelector('.burguer');
const menu = document.querySelector('.nav-links');

function abrirMenu(abrir) {
  botaoMenu.classList.toggle('active', abrir);
  menu.classList.toggle('active', abrir);
  botaoMenu.setAttribute('aria-expanded', String(abrir));
}

botaoMenu.addEventListener('click', function () {
  abrirMenu(!menu.classList.contains('active'));
});

menu.querySelectorAll('a.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    abrirMenu(false);
  });
});

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && menu.classList.contains('active')) {
    abrirMenu(false);
    botaoMenu.focus();
  }
});