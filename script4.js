const arrayImagens = [
    "/imagens/imagem1.jfif",
    "/imagens/imagem2.jfif",
    "/imagens/imagem3.jfif",
    "/imagens/imagem4.jfif",
];

let imagem = document.querySelector("img");
let indice = 0;
let nroImagens = arrayImagens.length;
console.log(nroImagens)

imagem.src = arrayImagens[indice];

function avancar() {
    if (indice === nroImagens - 1) {
        indice = 0;
    } else {
        indice += 1;
    }
    imagem.src = arrayImagens[indice];
}

function voltar() {
    if (indice === 0) {
        indice = nroImagens - 1;
    } else {
        indice -= 1;
    }
    imagem.src = arrayImagens[indice];
}