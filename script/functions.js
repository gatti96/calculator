import { main, input, resultInput, allowedKeys, copy } from "./variables.js";

export function calcular() {
  resultInput.value = "ERRO";
  const resultado = eval(input.value);
  /*o método eval calcula automático o que estiver no input, fazedno qualquer conta */
  resultInput.value = resultado;
}

export function Iniciar() {
  window.addEventListener("DOMContentLoaded", function () {
    //este evento inicio o site com o cursor no input
    input.focus();
  });
}

export function trocarTemas() {
  document
    .getElementById("themeSwitcher")
    .addEventListener("click", function () {
      //muda tema claro/escuro
      if (main.dataset.theme === "light") {
        document.body.style.setProperty("--bg-color", "#000");
        document.body.style.setProperty("--font-color", "#fff");
        document.body.style.setProperty("--border-color", "#fff");
        main.dataset.theme = "dark";
      } else {
        document.body.style.setProperty("--bg-color", "#fff");
        document.body.style.setProperty("--font-color", "#000");
        document.body.style.setProperty("--border-color", "#000");
        main.dataset.theme = "light";
      }
    });
}

export function clear() {
  document.getElementById("clear").addEventListener("click", function () {
    input.value = "";
    input.focus();
    resultInput.value = "";
    copy.innerHTML = "Copiar"; /*este inner muda texto botão */
  });
}
