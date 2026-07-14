// ============================================================
// Termometro com micro:bit
// 4 faixas de temperatura com icone + melodia personalizada
// Ordem: exibe icone -> toca melodia -> aguarda 3 segundos
// ============================================================

basic.forever(function () {
    let temperatura = input.temperature()

    // ── GELADO: abaixo de 5°C ───────────────────────────────
    if (temperatura < 5) {

        // Icone: floco de neve
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
        `)

        // Melodia: notas graves e lentas
        music.playTone(131, 700)   // Do3
        music.playTone(131, 700)   // Do3
        music.playTone(98,  900)   // Sol2 (mais grave)

    // ── FRIO: entre 5°C e 14°C ──────────────────────────────
    } else if (temperatura < 15) {

        // Icone: seta para baixo
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
        `)

        // Melodia: notas medias descendentes
        music.playTone(392, 400)   // Sol4
        music.playTone(330, 400)   // Mi4
        music.playTone(262, 500)   // Do4

    // ── AGRADAVEL: entre 15°C e 24°C ────────────────────────
    } else if (temperatura < 25) {

        // Icone: coracao
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
        `)

        // Melodia: alegre e animada
        music.playTone(523, 250)   // Do5
        music.playTone(659, 250)   // Mi5
        music.playTone(784, 250)   // Sol5
        music.playTone(659, 350)   // Mi5

    // ── QUENTE: 25°C ou mais ────────────────────────────────
    } else {

        // Icone: sol
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
        `)

        // Melodia: notas agudas e rapidas
        music.playTone(880, 150)   // La5
        music.playTone(988, 150)   // Si5
        music.playTone(880, 150)   // La5
        music.playTone(988, 100)   // Si5

    }

    // Aguarda 3 segundos antes de repetir
    basic.pause(3000)
})
