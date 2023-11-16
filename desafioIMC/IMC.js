const altura = prompt("Digite sua altura em centimetros!")
const peso = prompt("Digite o seu peso")
const imc = peso/(altura*altura)

if (imc <= 18.5){
    console.log("Você está muito abaixo do peso")
} else if (imc >= 18.6 || imc <= 24.9) {
    console.log("Você está no peso ideal PARABÉNS!!!")
} else if (imc >= 25 || imc <= 29.9){
    console.log("Você está levemente acima do peso ideal")
} else if (imc >= 30 || imc <= 34.9){
    console.log("Você está com obesidade grau 1")
} else if (imc >=35 || imc <= 39.9){
    console.log("Você está com obesidade grau 2 (Severa)")
} else {
    console.log("Você esta com obesidade grau 3 (Morbida)")
}
