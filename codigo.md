basic.forever(function () {
let temperatura = input.temperature()
if (temperatura < 5) {
// GELADO: exibe floco de neve
basic.showLeds(`
# . # . #
. # . # .
# . # . #
. # . # .
# . # . #
`)
} else if (temperatura < 15) {
// FRIO: exibe seta para baixo
basic.showLeds(`
. . # . .
. . # . .
# . # . #
. # # # .
. . # . .
`)
} else if (temperatura < 25) {
// AGRADAVEL: exibe coracao
basic.showLeds(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .
`)
} else {
// QUENTE: exibe sol (diamante)
basic.showLeds(`
. . # . .
. # # # .
# # # # #
. # # # .
. . # . .
`)
}
basic.pause(2000)
})
