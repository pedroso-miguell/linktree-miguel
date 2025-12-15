  function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
}

const light = document.getElementById("light-effect");

// mover a luz conforme o mouse
document.addEventListener("mousemove", (e) => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

// detectar tema e trocar cor do brilho
function updateLightMode() {
  if (document.documentElement.classList.contains("light")) {
    light.classList.remove("dark");
    light.classList.add("light");
  } else {
    light.classList.remove("light");
    light.classList.add("dark");
  }
}

updateLightMode();

// sobrescreve função já existente
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  updateLightMode();
}


