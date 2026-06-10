document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.navbar');

  // cria botão hamburguer
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-toggle');
  menuBtn.innerHTML = '☰';
  header.appendChild(menuBtn);

  // abre/fecha menu
  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.innerHTML = navbar.classList.contains('active') ? '✕' : '☰';
  });

  // fecha menu ao clicar no link
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('active'));
  });

  // header muda sombra ao rolar
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 50 
      ? '0 4px 20px rgba(0,0,0,0.1)' 
      : '0 2px 10px rgba(0,0,0,0.05)';
  });
});