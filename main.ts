function displayH () {
    uH = Hour % 10
    dH = Math.trunc(Hour / 10)
    displayN(dH, 4)
    displayN(uH, 3)
}
function displayN (number: number, column: number) {
    if (number == 1) {
        led.plot(column, 0)
        led.unplot(column, 1)
        led.unplot(column, 2)
        led.unplot(column, 3)
        led.unplot(column, 4)
    } else if (number == 2) {
        led.plot(column, 0)
        led.plot(column, 1)
        led.unplot(column, 2)
        led.unplot(column, 3)
        led.unplot(column, 4)
    } else if (number == 3) {
        led.plot(column, 0)
        led.plot(column, 1)
        led.plot(column, 2)
        led.unplot(column, 3)
        led.unplot(column, 4)
    } else if (number == 4) {
        led.plot(column, 0)
        led.plot(column, 1)
        led.plot(column, 2)
        led.plot(column, 3)
        led.unplot(column, 4)
    } else if (number == 5) {
        led.plot(column, 0)
        led.plot(column, 1)
        led.plot(column, 2)
        led.plot(column, 3)
        led.plot(column, 4)
    } else if (number == 6) {
        led.plotBrightness(column, 0, 70)
        led.plot(column, 1)
        led.unplot(column, 2)
        led.unplot(column, 3)
        led.unplot(column, 4)
    } else if (number == 7) {
        led.plotBrightness(column, 0, 70)
        led.plot(column, 1)
        led.plot(column, 2)
        led.unplot(column, 3)
        led.unplot(column, 4)
    } else if (number == 8) {
        led.plotBrightness(column, 0, 70)
        led.plot(column, 1)
        led.plot(column, 2)
        led.plot(column, 3)
        led.unplot(column, 4)
    } else if (number == 9) {
        led.plotBrightness(column, 0, 70)
        led.plot(column, 1)
        led.plot(column, 2)
        led.plot(column, 3)
        led.plot(column, 4)
    } else {
        led.unplot(column, 0)
        led.unplot(column, 1)
        led.unplot(column, 2)
        led.unplot(column, 3)
        led.unplot(column, 4)
    }
}
input.onButtonPressed(Button.A, function () {
    if (Set == 2) {
        Set = 0
    } else if (Set == 1) {
        Set = 2
    }
})
function changeM () {
    basic.clearScreen()
    Minut += 1
    if (Minut == 60) {
        Minut = 0
        changeH()
    }
    displayH()
    displayM()
}
function changeH () {
    basic.clearScreen()
    Hour += 1
    if (Hour == 24) {
        Hour = 0
    }
    displayH()
    displayM()
}
function displayM () {
    uM = Minut % 10
    dM = Math.trunc(Minut / 10)
    displayN(dM, 1)
    displayN(uM, 0)
}
input.onButtonPressed(Button.B, function () {
    if (Set == 1) {
        changeH()
    } else if (Set == 2) {
        changeM()
    }
})
let dM = 0
let uM = 0
let dH = 0
let uH = 0
let Set = 0
let Hour = 0
let Minut = 0
let Second = 0
Minut = 0
Hour = 0
Set = 1
while (Set == 1) {
    basic.pause(500)
    basic.showString("H")
}
while (Set == 2) {
    basic.pause(500)
    basic.showString("M")
}
basic.clearScreen()
loops.everyInterval(1000, function () {
    led.unplot(2, 1)
    led.unplot(2, 3)
    Second += 1
    if (Second == 60) {
        Second = 0
        changeM()
    }
    basic.pause(100)
    led.plot(2, 1)
    led.plot(2, 3)
})
basic.forever(function () {
    displayH()
    displayM()
})
