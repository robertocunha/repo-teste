const nomes = ["lala", "lele", "lili"];

let body = document.querySelector("body");

for (const item of nomes) {
    let p = document.createElement("p");
    p.textContent = item;
    body.appendChild(p);
}