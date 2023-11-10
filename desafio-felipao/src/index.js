let nickname = "Mathewszinho"
let levelDoBoneco = 6655
let rankDoBoneco = ""

if (levelDoBoneco <= 1000) {
    rankDoBoneco = "ferro"
} else if (levelDoBoneco > 1001 && levelDoBoneco < 2000){
    rankDoBoneco = "bronze"
} else if (levelDoBoneco > 2001 && levelDoBoneco < 5000) {
    rankDoBoneco = "prata"
} else if (levelDoBoneco > 5001 && levelDoBoneco < 7000) {
    rankDoBoneco = "ouro"
} else if (levelDoBoneco > 7001 && levelDoBoneco < 8000) {
    rankDoBoneco = "platina"
} else if (levelDoBoneco > 8001 && levelDoBoneco < 9000) {
    rankDoBoneco = "ascendente"
} else if (levelDoBoneco > 9001 && levelDoBoneco < 10000) {
    rankDoBoneco = "imortal"
} else {
    (levelDoBoneco > 10001)
    rankDoBoneco = "radiante"
}

console.log(" O Herói de nome " + nickname + " está no nível de " + rankDoBoneco)