const arrayImagens = [
    "/imagens/imagem1.jfif",
    "/imagens/imagem2.jfif",
    "/imagens/imagem3.jfif",
    "/imagens/imagem4.jfif",
];

let body = document.querySelector("body");

for (const item of arrayImagens) {
   const imagem = document.createElement("img");
   imagem.src = item;
   body.appendChild(imagem);
}