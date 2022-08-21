const dropMenu = document.getElementById("dropMenu");
const dropSearch = document.getElementsByClassName("dropSearch")[0];

function menu() {
  dropMenu.classList.toggle("show-inlineFlex");
  dropSearch.classList.remove("show-block");
}

function search() {
  dropSearch.classList.toggle("show-block");
  dropMenu.classList.remove("show-inlineFlex");
}

// Eventos
document.getElementById("clickMenu").addEventListener("click", menu);
document.getElementById("clickSearch").addEventListener("click", search);
