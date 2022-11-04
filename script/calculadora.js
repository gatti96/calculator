import { calcular, Iniciar, trocarTemas, clear } from "./functions.js";
import { main, input, resultInput, allowedKeys, copy } from "./variables.js";

Iniciar();

trocarTemas();

clear();

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

copy.addEventListener("click", function () {
  const copyResult = resultInput.value;
  navigator.clipboard.writeText(copyResult).then();
  copy.innerHTML = "copiado!"; /*este inner muda texto botão */
});
