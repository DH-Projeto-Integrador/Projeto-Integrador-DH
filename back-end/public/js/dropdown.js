const menu = document.getElementById("menu");
const listMenu = document.getElementById("dropdown-menu")

menu.addEventListener("click", () => {
  listMenu.classList.toggle("dropdown-menu")
})