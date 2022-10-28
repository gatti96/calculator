const main = document.querySelector("main");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

window.addEventListener("DOMContentLoaded", function () {
  //este evento inicio o site com o cursor no input
  input.focus();
});

//essa função cria função para quando apertar botão no teclado do pc
input.addEventListener("keydown", function (ev) {
  //keydown é pressionar um botão
  ev.preventDefault(); //retira o padrão do input

  if (allowedKeys.includes(ev.key)) {
    //só permite digitação de valores que existem no array
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    //apaga ultimo valor digitado ao usar backspace no teclado
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calcular();
  }
});

function calcular() {
  resultInput.value = "ERRO";
  const resultado = eval(input.value);
  /*o método eval calcula automático o que estiver no input, fazedno qualquer conta */
  resultInput.value = resultado;
}

document.getElementById("themeSwitcher").addEventListener("click", function () {
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

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
  resultInput.value = "";
  copy.innerHTML = "Copiar"; /*este inner muda texto botão */
});

document.getElementById("clear2").addEventListener("click", function () {
  //apaga o ultimo valor digitado ao pressionar o botão
  input.value = input.value.slice(0, -1);
});

//esses códigos de baixo é para criar a função dos botões da calculadora
const button = document.querySelectorAll(".charKey");
button.forEach((charKey) =>
  charKey.addEventListener("click", function () {
    input.value = input.value + charKey.dataset.value;
  })
);

//essa função de baixo cria a propriedade do botão de igual
document.getElementById("equal").addEventListener("click", function () {
  calcular();
});

//esssa função dee baixo copia o resultado para a area de transferencia
const copy = document.getElementById("copyToClipboard");

copy.addEventListener("click", function () {
  const copyResult = resultInput.value;
  navigator.clipboard.writeText(copyResult).then();
  copy.innerHTML = "copiado!"; /*este inner muda texto botão */
});
