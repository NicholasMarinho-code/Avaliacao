const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active")
    navMenu.classList.remove("active")
}))


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registrado:', reg))
        .catch(err => console.log('Falha ao registrar SW:', err));
    });
  }