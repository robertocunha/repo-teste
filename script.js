const numeros = [1, 2, 3, 4, 5];

let body = document.querySelector("body");
let paragrafo = document.getElementById("pId");

for (const item of numeros) {
    paragrafo.textContent += "número: " + item + ", ";

    let botao = document.createElement('button');
    botao.textContent = item;
    body.appendChild(botao);
}

