// let numero = prompt("Digite um numero seu gostosão")

// parseInt(numero)

// let i = 1

// while (i <= 10) {

//     document.write(`${numero} x ${i} = ${numero * i } <br>`)
//     i = i + 1
// }


let btn = document.getElementById("btn")
let paragrafo = document.querySelector("p")




btn.addEventListener("click", () => {

    paragrafo.classList.toggle("classist")

})